/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AnimalFactoryERC721TokenInterface extends ethers.utils.Interface {
  functions: {
    "name()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "exists(uint256)": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "getTotalTokensAgainstAddress(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "setAnimalMeta(uint256,string)": FunctionFragment;
    "sendToken(address,uint256,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "symbol()": FunctionFragment;
    "getAnimalIdAgainstAddress(address)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "burnToken(address,uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalTokensAgainstAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAnimalMeta",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sendToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAnimalIdAgainstAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalTokensAgainstAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAnimalMeta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAnimalIdAgainstAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
}

export class AnimalFactoryERC721Token extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AnimalFactoryERC721TokenInterface;

  functions: {
    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getApproved(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenOfOwnerByIndex(address,uint256)"(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exists(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "exists(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenByIndex(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "ownerOf(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTotalTokensAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalAnimals: BigNumber }>;

    "getTotalTokensAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalAnimals: BigNumber }>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setAnimalMeta(
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAnimalMeta(uint256,string)"(
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendToken(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sendToken(address,uint256,string)"(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    getAnimalIdAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { listAnimals: BigNumber[] }>;

    "getAnimalIdAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { listAnimals: BigNumber[] }>;

    setApprovalForAll(
      _to: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setApprovalForAll(address,bool)"(
      _to: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "tokenURI(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    burnToken(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "burnToken(address,uint256)"(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  getApproved(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getApproved(uint256)"(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  approve(
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenOfOwnerByIndex(
    _owner: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenOfOwnerByIndex(address,uint256)"(
    _owner: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "safeTransferFrom(address,address,uint256)"(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "exists(uint256)"(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenByIndex(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenByIndex(uint256)"(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "ownerOf(uint256)"(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getTotalTokensAgainstAddress(
    ownerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTotalTokensAgainstAddress(address)"(
    ownerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAnimalMeta(
    tid: BigNumberish,
    tmeta: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAnimalMeta(uint256,string)"(
    tid: BigNumberish,
    tmeta: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendToken(
    sendTo: string,
    tid: BigNumberish,
    tmeta: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sendToken(address,uint256,string)"(
    sendTo: string,
    tid: BigNumberish,
    tmeta: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  getAnimalIdAgainstAddress(
    ownerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAnimalIdAgainstAddress(address)"(
    ownerAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  setApprovalForAll(
    _to: string,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setApprovalForAll(address,bool)"(
    _to: string,
    _approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "tokenURI(uint256)"(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  burnToken(
    tokenOwner: string,
    tid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "burnToken(address,uint256)"(
    tokenOwner: string,
    tid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isApprovedForAll(address,address)"(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getApproved(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approve(address,uint256)"(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenOfOwnerByIndex(address,uint256)"(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    exists(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "exists(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenByIndex(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "ownerOf(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getTotalTokensAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalTokensAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAnimalMeta(
      tid: BigNumberish,
      tmeta: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAnimalMeta(uint256,string)"(
      tid: BigNumberish,
      tmeta: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sendToken(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendToken(address,uint256,string)"(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    getAnimalIdAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAnimalIdAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    setApprovalForAll(
      _to: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setApprovalForAll(address,bool)"(
      _to: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokenURI(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    burnToken(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burnToken(address,uint256)"(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Transfer(
      _from: string | null,
      _to: string | null,
      _tokenId: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _from: string; _to: string; _tokenId: BigNumber }
    >;

    Approval(
      _owner: string | null,
      _approved: string | null,
      _tokenId: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _owner: string; _approved: string; _tokenId: BigNumber }
    >;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): TypedEventFilter<
      [string, string, boolean],
      { _owner: string; _operator: string; _approved: boolean }
    >;
  };

  estimateGas: {
    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getApproved(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenOfOwnerByIndex(address,uint256)"(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exists(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exists(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenByIndex(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ownerOf(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalTokensAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalTokensAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAnimalMeta(
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAnimalMeta(uint256,string)"(
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendToken(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sendToken(address,uint256,string)"(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAnimalIdAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAnimalIdAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      _to: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setApprovalForAll(address,bool)"(
      _to: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenURI(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnToken(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "burnToken(address,uint256)"(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getApproved(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenOfOwnerByIndex(address,uint256)"(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exists(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exists(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenByIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenByIndex(uint256)"(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerOf(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalTokensAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalTokensAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAnimalMeta(
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAnimalMeta(uint256,string)"(
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendToken(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sendToken(address,uint256,string)"(
      sendTo: string,
      tid: BigNumberish,
      tmeta: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAnimalIdAgainstAddress(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAnimalIdAgainstAddress(address)"(
      ownerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      _to: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setApprovalForAll(address,bool)"(
      _to: string,
      _approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenURI(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenURI(uint256)"(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnToken(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "burnToken(address,uint256)"(
      tokenOwner: string,
      tid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}