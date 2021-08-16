// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    
    constructor() public ERC20("Reward", "REWARD") {
        _mint(msg.sender, 1000000e18);
    }
    
    function mint(address _to, uint _amount) public {
        _mint(_to, _amount);
    }

}