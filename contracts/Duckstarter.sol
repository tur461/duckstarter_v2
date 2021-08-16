// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

abstract contract DuckTiersBasic {
	function getUserTier(address _userAddress) virtual external view returns(uint8);
}

contract DuckStarter is Ownable, ReentrancyGuard {

    using SafeMath for uint;
    using SafeERC20 for IERC20;

	uint constant MAX_NUM_TIERS = 10;

	IERC20 public depositToken;
	DuckTiersBasic public duckTiers;

	uint public stakingStartTime;
	uint public stakingFinishTime;

	uint public harvestStartTime;
	address public depositReceiverAddress;

	mapping(address => uint) public balances;
	uint public totalStaked;

	uint public totalTier0Staked;
	uint public totalTier0Limit;
	uint public stakingLimit;

	struct Reward {
		address addr;
		uint amount;
	}

	Reward[] public rewards;

	mapping(address => uint) public userLastUnclaimedReward;
    mapping(address => bool) public isVerified;

	uint[MAX_NUM_TIERS] public tierStakingLimits;
	address public verifyAddress;

	mapping(uint => uint) public tiersSold;
	mapping(uint => uint) public tiersCap;
	uint public tiersCapTime;

	mapping(address => bool) public claimed;

	//fee
	address public feeReceiverAddress;
	uint public feePercent;

	uint public refundCountdown;

	event NewReward(address indexed tokenAddress, uint amount);
	event Staked(address indexed user, uint indexed feeAmount, uint amount);
	event Claimed(address indexed user, address indexed tokenAddress, uint indexed index, uint amount);
	event WithdrawnLostTokens(address indexed owner, address tokenAddress, uint amountWithdrawn);
	event RewardChanged(uint indexed index, address indexed tokenAddress, uint amount);
	event Refunded(address indexed user, uint amount);

	constructor(
		address _duckTierAddress,
		address _depositTokenAddress,
		address _depositReceiverAddress,
		address _feeReceiverAddress,
		uint _refundCountdown
		) public Ownable() {

		duckTiers = DuckTiersBasic(_duckTierAddress);
		depositToken = IERC20(_depositTokenAddress);
		depositReceiverAddress = _depositReceiverAddress;
		feeReceiverAddress = _feeReceiverAddress;
		refundCountdown = _refundCountdown;
	}

	function initialSetup(
			uint _stakingStartTime,
			uint _stakingFinishTime,
			uint _totalTier0Limit,
			uint _stakingLimit,
			uint _feePercent,
			uint[] calldata _tiersCap,
			uint _tiersCapTime,
			uint[] calldata _tierStakingLimits)
		external onlyOwner {

		require(_stakingStartTime != 0, "invalid input _stakingStartTime");
		
		// @dev miss it on audit
		// require(stakingStartTime == 0, "already set");
        
		stakingStartTime = _stakingStartTime;
		stakingFinishTime = _stakingFinishTime;
		
		stakingLimit = _stakingLimit;
		totalTier0Limit = _totalTier0Limit;

		require(_tierStakingLimits.length <= MAX_NUM_TIERS, "too long tierStakingLimits");
		for(uint i = 0; i < _tierStakingLimits.length; i++) {
		    if(i > 0) {
		        require(_tierStakingLimits[i] > _tierStakingLimits[i-1], "invalid limits");
		    }
		    
			tierStakingLimits[i] = _tierStakingLimits[i];
		}

		for(uint i = 0; i < _tiersCap.length; i++) {
			tiersCap[i] = _tiersCap[i];
		}

		tiersCapTime = _tiersCapTime;
		feePercent = _feePercent;
	}

    function secondarySetup(uint _harvestStartTime, address _verifyAddress) external onlyOwner {
        require(_harvestStartTime >= stakingFinishTime, "harvestStartTime < stakingFinishTime");
		harvestStartTime = _harvestStartTime;
		verifyAddress = _verifyAddress;
	}

	function getUserStakingLimit(address _userAddress) public view returns(uint) {
		uint userTier = duckTiers.getUserTier(_userAddress);
		return tierStakingLimits[userTier];
	}

	function addReward(address _rewardAddress, uint _rewardAmount) external onlyOwner {
		rewards.push(Reward({addr: _rewardAddress, amount: _rewardAmount}));
		emit NewReward(_rewardAddress, _rewardAmount);
	}

	function changeReward(uint index, address _rewardAddress, uint _rewardAmount) external onlyOwner {
		rewards[index] = Reward({addr: _rewardAddress, amount: _rewardAmount});
		emit RewardChanged(index, _rewardAddress, _rewardAmount);
	}
	
	function stake(uint amount, bytes calldata signature) external nonReentrant() {
		require(block.timestamp > stakingStartTime && block.timestamp < stakingFinishTime, "not a staking time");
		// require(duckTiers.getUserTier(msg.sender) > 0, "required DuckTiers: stage 1");
		require(verify(signature), "invalid password");

		isVerified[msg.sender] = true;
		
    	if(totalStaked.add(amount) > stakingLimit) {
        	amount = stakingLimit.sub(totalStaked);
        }
        
        uint _userStakingLimit = getUserStakingLimit(msg.sender);
        if(balances[msg.sender].add(amount) > _userStakingLimit) {
            amount = _userStakingLimit.sub(balances[msg.sender]);
        }

        uint8 userTier = duckTiers.getUserTier(msg.sender);

        if(userTier == 0) {
        	if(totalTier0Staked.add(amount) > totalTier0Limit) {
        		amount = totalTier0Limit.sub(totalTier0Staked);
        	}
		}

		if(block.timestamp < tiersCapTime) {
        	if(tiersSold[userTier].add(amount) > tiersCap[userTier]) {
        		amount = tiersCap[userTier].sub(tiersSold[userTier]);
        	}

        	tiersSold[userTier] = tiersSold[userTier].add(amount);
        }
        
        require(amount > 0, "nothing to stake");

        if(userTier == 0) {
			totalTier0Staked = totalTier0Staked.add(amount);
		}

		require(depositToken.transferFrom(msg.sender, address(this), amount), "cannot transfer deposit");
	    
		balances[msg.sender] = balances[msg.sender].add(amount);
		totalStaked = totalStaked.add(amount);

		uint _fee = amount.mul(feePercent).div(1000);
		require(depositToken.transferFrom(msg.sender, feeReceiverAddress, _fee), "cannot transfer deposit");

		emit Staked(msg.sender, _fee, amount);
	}

	function refund() external nonReentrant() {
		require(harvestStartTime != 0, "wait for harvest start time");
		require(block.timestamp > harvestStartTime && block.timestamp < harvestStartTime.add(refundCountdown), "refund is closed");

		require(!claimed[msg.sender], "cannot refund after claim");
		require(balances[msg.sender] > 0, "nothing to refund");

		uint bal = balances[msg.sender];
		balances[msg.sender] = 0;

		depositToken.safeTransfer(msg.sender, bal);

		emit Refunded(msg.sender, bal);
	}

	function claimReward() external nonReentrant() {
		require(block.timestamp >= harvestStartTime, "not a harvest time");
		require(balances[msg.sender] > 0, "nothing to claim");

		uint buf = userLastUnclaimedReward[msg.sender];
		userLastUnclaimedReward[msg.sender] = rewards.length;

		for(uint i = buf; i < rewards.length; i++) {
			uint reward = rewards[i].amount.mul(balances[msg.sender]).div(totalStaked);
			IERC20(rewards[i].addr).safeTransfer(msg.sender, reward);
			emit Claimed(msg.sender, rewards[i].addr, i, reward);
		}

		if(!claimed[msg.sender]) {
			claimed[msg.sender] = true;
		}
	}

	function getTierStakingLimits() external view returns(uint[MAX_NUM_TIERS] memory res) {
		for(uint8 i = 0; i < tierStakingLimits.length; i++) {
			res[i] = tierStakingLimits[i];
		}
	}

	function getTiersSold() external view returns(uint[MAX_NUM_TIERS] memory res) {
		for(uint8 i = 0; i < tierStakingLimits.length; i++) {
			res[i] = tiersSold[i];
		}
	}

	function getTiersCap() external view returns(uint[MAX_NUM_TIERS] memory res) {
		for(uint8 i = 0; i < tierStakingLimits.length; i++) {
			res[i] = tiersCap[i];
		}
	}
    
	function calculateReward(address user) external view returns(uint) {
		if(totalStaked == 0) {
			return 0;
		}
		uint res;
	    for(uint i = userLastUnclaimedReward[user]; i < rewards.length; i++) {
			uint reward = rewards[i].amount.mul(balances[user]).div(stakingLimit);
			res = res.add(reward);
		}

		return res;
	}
	
	//if something wrong
	function withdrawLostTokens(address _tokenAddress) external onlyOwner {
		require(harvestStartTime != 0, "wait for harvest start time");
		require(block.timestamp > harvestStartTime.add(refundCountdown), "refund is closed");

		uint balanceOfThis;
		if(_tokenAddress == address(0)) {
			balanceOfThis = address(this).balance;
			payable(depositReceiverAddress).transfer(balanceOfThis);
		} else {
			balanceOfThis = IERC20(_tokenAddress).balanceOf(address(this));
			IERC20(_tokenAddress).safeTransfer(depositReceiverAddress, balanceOfThis);
		}

		emit WithdrawnLostTokens(owner(), _tokenAddress, balanceOfThis);
	}

	/// signature methods.
	function verify(bytes memory signature) internal view returns(bool) {
		if(isVerified[msg.sender]) {
			return true;
		}
		
		bytes32 message = prefixed(keccak256(abi.encodePacked(msg.sender, address(this))));
        return (recoverSigner(message, signature) == verifyAddress);
	}

    function recoverSigner(bytes32 message, bytes memory sig)
        internal
        pure
        returns (address)
    {
        (uint8 v, bytes32 r, bytes32 s) = abi.decode(sig, (uint8, bytes32, bytes32));

        return ecrecover(message, v, r, s);
    }

    /// builds a prefixed hash to mimic the behavior of eth_sign.
    function prefixed(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }
}