/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { DuckTiersBasic } from "./DuckTiersBasic";

export class DuckTiersBasicFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DuckTiersBasic {
    return new Contract(address, _abi, signerOrProvider) as DuckTiersBasic;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address"
      }
    ],
    name: "getUserTier",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];