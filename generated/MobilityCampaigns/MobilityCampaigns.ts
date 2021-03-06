// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CampaignCompleted extends ethereum.Event {
  get params(): CampaignCompleted__Params {
    return new CampaignCompleted__Params(this);
  }
}

export class CampaignCompleted__Params {
  _event: CampaignCompleted;

  constructor(event: CampaignCompleted) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalCampaignReceivers(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get refundWei(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get idx(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CampaignCreated extends ethereum.Event {
  get params(): CampaignCreated__Params {
    return new CampaignCreated__Params(this);
  }
}

export class CampaignCreated__Params {
  _event: CampaignCreated;

  constructor(event: CampaignCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get organization(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }

  get category(): string {
    return this._event.parameters[3].value.toString();
  }

  get createdAt(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get budgetWei(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get idx(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class UserRegistered extends ethereum.Event {
  get params(): UserRegistered__Params {
    return new UserRegistered__Params(this);
  }
}

export class UserRegistered__Params {
  _event: UserRegistered;

  constructor(event: UserRegistered) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get enabledAt(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get enabledAtCampaignIdx(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UserRewardsWithdrawn extends ethereum.Event {
  get params(): UserRewardsWithdrawn__Params {
    return new UserRewardsWithdrawn__Params(this);
  }
}

export class UserRewardsWithdrawn__Params {
  _event: UserRewardsWithdrawn;

  constructor(event: UserRewardsWithdrawn) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewardsWei(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalRewardsWei(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get withdrewAt(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MobilityCampaigns__getActiveCampaignResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }
}

export class MobilityCampaigns__getActiveCampaignUsersResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }
}

export class MobilityCampaigns extends ethereum.SmartContract {
  static bind(address: Address): MobilityCampaigns {
    return new MobilityCampaigns("MobilityCampaigns", address);
  }

  EXPIRES_IN_SECONDS(): BigInt {
    let result = super.call(
      "EXPIRES_IN_SECONDS",
      "EXPIRES_IN_SECONDS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_EXPIRES_IN_SECONDS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "EXPIRES_IN_SECONDS",
      "EXPIRES_IN_SECONDS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_REWARDS_WITHDRAW_WEI(): BigInt {
    let result = super.call(
      "MIN_REWARDS_WITHDRAW_WEI",
      "MIN_REWARDS_WITHDRAW_WEI():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MIN_REWARDS_WITHDRAW_WEI(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_REWARDS_WITHDRAW_WEI",
      "MIN_REWARDS_WITHDRAW_WEI():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  activeCampaignOwners(param0: Address): BigInt {
    let result = super.call(
      "activeCampaignOwners",
      "activeCampaignOwners(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_activeCampaignOwners(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "activeCampaignOwners",
      "activeCampaignOwners(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  campaignReceivers(param0: Address): BigInt {
    let result = super.call(
      "campaignReceivers",
      "campaignReceivers(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_campaignReceivers(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "campaignReceivers",
      "campaignReceivers(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dataProviders(param0: Address): boolean {
    let result = super.call("dataProviders", "dataProviders(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_dataProviders(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "dataProviders",
      "dataProviders(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  graphIndexer(): Address {
    let result = super.call("graphIndexer", "graphIndexer():(address)", []);

    return result[0].toAddress();
  }

  try_graphIndexer(): ethereum.CallResult<Address> {
    let result = super.tryCall("graphIndexer", "graphIndexer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardsWithdrawnWei(): BigInt {
    let result = super.call(
      "rewardsWithdrawnWei",
      "rewardsWithdrawnWei():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardsWithdrawnWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardsWithdrawnWei",
      "rewardsWithdrawnWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalCampaignReceivers(): BigInt {
    let result = super.call(
      "totalCampaignReceivers",
      "totalCampaignReceivers():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalCampaignReceivers(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalCampaignReceivers",
      "totalCampaignReceivers():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalDataProviders(): BigInt {
    let result = super.call(
      "totalDataProviders",
      "totalDataProviders():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalDataProviders(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalDataProviders",
      "totalDataProviders():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalRewardsWei(): BigInt {
    let result = super.call(
      "totalRewardsWei",
      "totalRewardsWei():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalRewardsWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalRewardsWei",
      "totalRewardsWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getReceiveCampaign(_a: Address): boolean {
    let result = super.call(
      "getReceiveCampaign",
      "getReceiveCampaign(address):(bool)",
      [ethereum.Value.fromAddress(_a)]
    );

    return result[0].toBoolean();
  }

  try_getReceiveCampaign(_a: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getReceiveCampaign",
      "getReceiveCampaign(address):(bool)",
      [ethereum.Value.fromAddress(_a)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getProvideData(_a: Address): boolean {
    let result = super.call(
      "getProvideData",
      "getProvideData(address):(bool)",
      [ethereum.Value.fromAddress(_a)]
    );

    return result[0].toBoolean();
  }

  try_getProvideData(_a: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getProvideData",
      "getProvideData(address):(bool)",
      [ethereum.Value.fromAddress(_a)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getActiveCampaignId(): BigInt {
    let result = super.call(
      "getActiveCampaignId",
      "getActiveCampaignId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getActiveCampaignId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getActiveCampaignId",
      "getActiveCampaignId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getActiveCampaign(): MobilityCampaigns__getActiveCampaignResult {
    let result = super.call(
      "getActiveCampaign",
      "getActiveCampaign():(string,string,string,string,uint256,uint256,uint256)",
      []
    );

    return new MobilityCampaigns__getActiveCampaignResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_getActiveCampaign(): ethereum.CallResult<
    MobilityCampaigns__getActiveCampaignResult
  > {
    let result = super.tryCall(
      "getActiveCampaign",
      "getActiveCampaign():(string,string,string,string,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MobilityCampaigns__getActiveCampaignResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }

  calculateRefundedWei(): BigInt {
    let result = super.call(
      "calculateRefundedWei",
      "calculateRefundedWei():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_calculateRefundedWei(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateRefundedWei",
      "calculateRefundedWei():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getActiveCampaignIdsUsers(): Array<BigInt> {
    let result = super.call(
      "getActiveCampaignIdsUsers",
      "getActiveCampaignIdsUsers():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getActiveCampaignIdsUsers(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getActiveCampaignIdsUsers",
      "getActiveCampaignIdsUsers():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getActiveCampaignUsers(
    _id: BigInt
  ): MobilityCampaigns__getActiveCampaignUsersResult {
    let result = super.call(
      "getActiveCampaignUsers",
      "getActiveCampaignUsers(uint256):(string,string,string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return new MobilityCampaigns__getActiveCampaignUsersResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toString()
    );
  }

  try_getActiveCampaignUsers(
    _id: BigInt
  ): ethereum.CallResult<MobilityCampaigns__getActiveCampaignUsersResult> {
    let result = super.tryCall(
      "getActiveCampaignUsers",
      "getActiveCampaignUsers(uint256):(string,string,string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MobilityCampaigns__getActiveCampaignUsersResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toString()
      )
    );
  }

  getIsCampaignActive(_idx: BigInt): boolean {
    let result = super.call(
      "getIsCampaignActive",
      "getIsCampaignActive(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_idx)]
    );

    return result[0].toBoolean();
  }

  try_getIsCampaignActive(_idx: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getIsCampaignActive",
      "getIsCampaignActive(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_idx)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCampaignCall extends ethereum.Call {
  get inputs(): CreateCampaignCall__Inputs {
    return new CreateCampaignCall__Inputs(this);
  }

  get outputs(): CreateCampaignCall__Outputs {
    return new CreateCampaignCall__Outputs(this);
  }
}

export class CreateCampaignCall__Inputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }

  get _organization(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _category(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _ipfsHash(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _key(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class CreateCampaignCall__Outputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }
}

export class EnableNewUserCall extends ethereum.Call {
  get inputs(): EnableNewUserCall__Inputs {
    return new EnableNewUserCall__Inputs(this);
  }

  get outputs(): EnableNewUserCall__Outputs {
    return new EnableNewUserCall__Outputs(this);
  }
}

export class EnableNewUserCall__Inputs {
  _call: EnableNewUserCall;

  constructor(call: EnableNewUserCall) {
    this._call = call;
  }
}

export class EnableNewUserCall__Outputs {
  _call: EnableNewUserCall;

  constructor(call: EnableNewUserCall) {
    this._call = call;
  }
}

export class DisableUserCall extends ethereum.Call {
  get inputs(): DisableUserCall__Inputs {
    return new DisableUserCall__Inputs(this);
  }

  get outputs(): DisableUserCall__Outputs {
    return new DisableUserCall__Outputs(this);
  }
}

export class DisableUserCall__Inputs {
  _call: DisableUserCall;

  constructor(call: DisableUserCall) {
    this._call = call;
  }
}

export class DisableUserCall__Outputs {
  _call: DisableUserCall;

  constructor(call: DisableUserCall) {
    this._call = call;
  }
}

export class CompleteCampaignCall extends ethereum.Call {
  get inputs(): CompleteCampaignCall__Inputs {
    return new CompleteCampaignCall__Inputs(this);
  }

  get outputs(): CompleteCampaignCall__Outputs {
    return new CompleteCampaignCall__Outputs(this);
  }
}

export class CompleteCampaignCall__Inputs {
  _call: CompleteCampaignCall;

  constructor(call: CompleteCampaignCall) {
    this._call = call;
  }
}

export class CompleteCampaignCall__Outputs {
  _call: CompleteCampaignCall;

  constructor(call: CompleteCampaignCall) {
    this._call = call;
  }
}

export class WithdrawRewardsCall extends ethereum.Call {
  get inputs(): WithdrawRewardsCall__Inputs {
    return new WithdrawRewardsCall__Inputs(this);
  }

  get outputs(): WithdrawRewardsCall__Outputs {
    return new WithdrawRewardsCall__Outputs(this);
  }
}

export class WithdrawRewardsCall__Inputs {
  _call: WithdrawRewardsCall;

  constructor(call: WithdrawRewardsCall) {
    this._call = call;
  }
}

export class WithdrawRewardsCall__Outputs {
  _call: WithdrawRewardsCall;

  constructor(call: WithdrawRewardsCall) {
    this._call = call;
  }
}
