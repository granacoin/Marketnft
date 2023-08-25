/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Scolcoin } from "@thirdweb-dev/chains";
export const NETWORK = Scolcoin;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x8F57e8DA730D26E6b4f2aF3b3259020E897E34b3";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x5C916aA9BC0d85204A3F6B9DC1539778383174C4";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use explorer.scolcoin.com to view transactions on the Scolcoin testnet.
export const ETHERSCAN_URL = "https://explorer.scolcoin.com/";
