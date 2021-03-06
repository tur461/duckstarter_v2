/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DuckTiersInterface extends ethers.utils.Interface {
  functions: {
    "DUCK()": FunctionFragment;
    "canEmergencyWithdraw()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdrawFeePercent(uint256)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "updateEmergencyWithdrawStatus(bool)": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "updateTier(uint8,uint256)": FunctionFragment;
    "updateWithdrawFee(uint256,uint256)": FunctionFragment;
    "getUserTier(address)": FunctionFragment;
    "calculateWithdrawFee(address,uint256)": FunctionFragment;
    "getTiers()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DUCK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canEmergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawFeePercent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEmergencyWithdrawStatus",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateTier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWithdrawFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getUserTier", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateWithdrawFee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getTiers", values?: undefined): string;

  decodeFunctionResult(functionFragment: "DUCK", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canEmergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateEmergencyWithdrawStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateWithdrawFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateWithdrawFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTiers", data: BytesLike): Result;

  events: {
    "EmergencyWithdrawn(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Withdrawn(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EmergencyWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class DuckTiers extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DuckTiersInterface;

  functions: {
    DUCK(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "DUCK()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    canEmergencyWithdraw(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canEmergencyWithdraw()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      staked: BigNumber;
      stakedTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      staked: BigNumber;
      stakedTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    withdrawFeePercent(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "withdrawFeePercent(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateEmergencyWithdrawStatus(
      _status: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateEmergencyWithdrawStatus(bool)"(
      _status: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emergencyWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

    "emergencyWithdraw()"(overrides?: Overrides): Promise<ContractTransaction>;

    updateTier(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateTier(uint8,uint256)"(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateWithdrawFee(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateWithdrawFee(uint256,uint256)"(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getUserTier(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      res: number;
      0: number;
    }>;

    "getUserTier(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      res: number;
      0: number;
    }>;

    calculateWithdrawFee(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "calculateWithdrawFee(address,uint256)"(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getTiers(
      overrides?: CallOverrides
    ): Promise<{
      buf: BigNumber[];
      0: BigNumber[];
    }>;

    "getTiers()"(
      overrides?: CallOverrides
    ): Promise<{
      buf: BigNumber[];
      0: BigNumber[];
    }>;
  };

  DUCK(overrides?: CallOverrides): Promise<string>;

  "DUCK()"(overrides?: CallOverrides): Promise<string>;

  canEmergencyWithdraw(overrides?: CallOverrides): Promise<boolean>;

  "canEmergencyWithdraw()"(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    staked: BigNumber;
    stakedTime: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "userInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    staked: BigNumber;
    stakedTime: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  withdrawFeePercent(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "withdrawFeePercent(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateEmergencyWithdrawStatus(
    _status: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateEmergencyWithdrawStatus(bool)"(
    _status: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emergencyWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

  "emergencyWithdraw()"(overrides?: Overrides): Promise<ContractTransaction>;

  updateTier(
    _tierId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateTier(uint8,uint256)"(
    _tierId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateWithdrawFee(
    _key: BigNumberish,
    _percent: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateWithdrawFee(uint256,uint256)"(
    _key: BigNumberish,
    _percent: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getUserTier(_userAddress: string, overrides?: CallOverrides): Promise<number>;

  "getUserTier(address)"(
    _userAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  calculateWithdrawFee(
    _userAddress: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateWithdrawFee(address,uint256)"(
    _userAddress: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTiers(overrides?: CallOverrides): Promise<BigNumber[]>;

  "getTiers()"(overrides?: CallOverrides): Promise<BigNumber[]>;

  callStatic: {
    DUCK(overrides?: CallOverrides): Promise<string>;

    "DUCK()"(overrides?: CallOverrides): Promise<string>;

    canEmergencyWithdraw(overrides?: CallOverrides): Promise<boolean>;

    "canEmergencyWithdraw()"(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      staked: BigNumber;
      stakedTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      staked: BigNumber;
      stakedTime: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    withdrawFeePercent(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawFeePercent(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEmergencyWithdrawStatus(
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateEmergencyWithdrawStatus(bool)"(
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    "emergencyWithdraw()"(overrides?: CallOverrides): Promise<void>;

    updateTier(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateTier(uint8,uint256)"(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWithdrawFee(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateWithdrawFee(uint256,uint256)"(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getUserTier(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    "getUserTier(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    calculateWithdrawFee(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateWithdrawFee(address,uint256)"(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTiers(overrides?: CallOverrides): Promise<BigNumber[]>;

    "getTiers()"(overrides?: CallOverrides): Promise<BigNumber[]>;
  };

  filters: {
    EmergencyWithdrawn(user: string | null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Staked(user: string | null, amount: null): EventFilter;

    Withdrawn(
      user: string | null,
      amount: BigNumberish | null,
      fee: null
    ): EventFilter;
  };

  estimateGas: {
    DUCK(overrides?: CallOverrides): Promise<BigNumber>;

    "DUCK()"(overrides?: CallOverrides): Promise<BigNumber>;

    canEmergencyWithdraw(overrides?: CallOverrides): Promise<BigNumber>;

    "canEmergencyWithdraw()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFeePercent(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawFeePercent(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(_amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(_amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateEmergencyWithdrawStatus(
      _status: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateEmergencyWithdrawStatus(bool)"(
      _status: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    emergencyWithdraw(overrides?: Overrides): Promise<BigNumber>;

    "emergencyWithdraw()"(overrides?: Overrides): Promise<BigNumber>;

    updateTier(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateTier(uint8,uint256)"(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateWithdrawFee(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateWithdrawFee(uint256,uint256)"(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getUserTier(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserTier(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateWithdrawFee(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateWithdrawFee(address,uint256)"(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTiers(overrides?: CallOverrides): Promise<BigNumber>;

    "getTiers()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DUCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DUCK()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canEmergencyWithdraw(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canEmergencyWithdraw()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFeePercent(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "withdrawFeePercent(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateEmergencyWithdrawStatus(
      _status: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateEmergencyWithdrawStatus(bool)"(
      _status: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(overrides?: Overrides): Promise<PopulatedTransaction>;

    "emergencyWithdraw()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    updateTier(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateTier(uint8,uint256)"(
      _tierId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateWithdrawFee(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateWithdrawFee(uint256,uint256)"(
      _key: BigNumberish,
      _percent: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getUserTier(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserTier(address)"(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateWithdrawFee(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateWithdrawFee(address,uint256)"(
      _userAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTiers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTiers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
