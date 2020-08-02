# dark-horse-subgraph (a [HackFS](https://hackfs.com/) project)

View on [The Graph Explorer](https://thegraph.com/explorer/subgraph/imthatcarlos/dark-horse-mobility-campaigns)

The idea for our hack is to use indexed data + events as a "Feed" feature in our marketplace app
```
- 0xE0... withdrew 0.2 ETH in rewards
- 0xE1... signed up for rewards
- 0x2A... created campaign 'my ad' with 2 ETH
```

#### Schema
```graphql
type MobilityCampaign @entity {
  id: ID!
  idx: BigInt!
  creator: MobilityCampaignOwner! # address
  organization: String
  category: String!
  title: String!
  createdAt: BigInt!
  isActive: Boolean!
  closedAtCampaignReceivers: BigInt!
}

type MobilityCampaignOwner @entity {
  id: ID!
  owner: Bytes!
  campaigns: [MobilityCampaign!]! @derivedFrom(field: "creator")
  totalContributedWei: BigInt!
}

type RewardOwner @entity {
  id: ID!
  owner: Bytes!
  enabledAt: BigInt!
  enabledAtCampaignIdx: BigInt!
  totalRewardsWei: BigInt
  rewards: [Reward!]! @derivedFrom(field: "owner")
}

type Reward @entity {
  id: ID!
  owner: RewardOwner!
  rewardsWei: BigInt!
  withdrewAt: BigInt!
}
```

#### Deploying
```
yarn
yarn build
yarn deploy
```
