/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ERC721Interface } from "../ERC721Interface";

export class ERC721Interface__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Interface {
    return new Contract(address, _abi, signerOrProvider) as ERC721Interface;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "ownerAddress",
        type: "address",
      },
    ],
    name: "getTotalTokensAgainstAddress",
    outputs: [
      {
        name: "totalAnimals",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "_balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tid",
        type: "uint256",
      },
      {
        name: "tmeta",
        type: "string",
      },
    ],
    name: "setAnimalMeta",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sendTo",
        type: "address",
      },
      {
        name: "tid",
        type: "uint256",
      },
      {
        name: "tmeta",
        type: "string",
      },
    ],
    name: "sendToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "ownerAddress",
        type: "address",
      },
    ],
    name: "getAnimalIdAgainstAddress",
    outputs: [
      {
        name: "listAnimals",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenOwner",
        type: "address",
      },
      {
        name: "tid",
        type: "uint256",
      },
    ],
    name: "burnToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
