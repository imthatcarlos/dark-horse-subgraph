import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  CampaignCompleted,
  CampaignCreated,
  UserRegistered,
  UserRewardsWithdrawn
} from "../generated/MobilityCampaigns/MobilityCampaigns"
import {
  MobilityCampaign,
  RewardOwner,
  MobilityCampaignOwner,
  Reward
} from "../generated/schema"

export function handleCampaignCompleted(event: CampaignCompleted): void {
  const entity = new MobilityCampaign(event.params.creator.toHex() + "-" + event.params.idx.toString());
  entity.closedAtCampaignReceivers = event.params.totalCampaignReceivers;
  entity.isActive = false;
  entity.save();
}

export function handleCampaignCreated(event: CampaignCreated): void {
  const entity = new MobilityCampaign(event.params.creator.toHex() + "-" + event.params.idx.toString());

  entity.idx = event.params.idx;
  entity.creator = event.params.creator.toHex();

  // @TODO: not possible to decode indexed string value.
  entity.organization = event.params.organization.toString();

  entity.category = event.params.category;
  entity.title = event.params.title;
  entity.createdAt = event.params.createdAt;
  entity.budgetWei = event.params.budgetWei;
  entity.isActive = true;

  entity.save();

  // create an entity for MobilityCampaignOwner if it doesn't exist
  let campaignOwner = MobilityCampaignOwner.load(event.transaction.from.toHex());
  if (campaignOwner == null) {
    campaignOwner = new MobilityCampaignOwner(event.transaction.from.toHex());
    campaignOwner.owner = event.params.creator;
    campaignOwner.totalContributedWei = event.params.budgetWei;
  } else {
    campaignOwner.totalContributedWei = campaignOwner.totalContributedWei + event.params.budgetWei;
  }

  campaignOwner.save();
}

export function handleUserRegistered(event: UserRegistered): void {
  const entity = new RewardOwner(event.transaction.from.toHex());

  entity.owner = event.params.account;
  entity.enabledAt = event.params.enabledAt;
  entity.enabledAtCampaignIdx = event.params.enabledAtCampaignIdx;
  entity.save();
}

export function handleUserRewardsWithdrawn(event: UserRewardsWithdrawn): void {
  const entity = new RewardOwner(event.transaction.from.toHex());

  entity.totalRewardsWei = event.params.totalRewardsWei;
  entity.save();

  const logEntity = new Reward(event.transaction.from.toHex() + "-" + event.logIndex.toString());
  logEntity.owner = event.params.account.toHex();
  logEntity.rewardsWei = event.params.rewardsWei;
  logEntity.withdrewAt = event.params.withdrewAt;
  logEntity.save();
}

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.EXPIRES_IN_SECONDS(...)
// - contract.MIN_REWARDS_WITHDRAW_WEI(...)
// - contract.activeCampaignOwners(...)
// - contract.campaignReceivers(...)
// - contract.dataProviders(...)
// - contract.graphIndexer(...)
// - contract.rewardsWithdrawnWei(...)
// - contract.totalCampaignReceivers(...)
// - contract.totalDataProviders(...)
// - contract.totalRewardsWei(...)
// - contract.getReceiveCampaign(...)
// - contract.getProvideData(...)
// - contract.getActiveCampaignId(...)
// - contract.getActiveCampaign(...)
// - contract.calculateRefundedWei(...)
// - contract.getActiveCampaignIdsUsers(...)
// - contract.getActiveCampaignUsers(...)
// - contract.getCampaignsIndexer(...)
