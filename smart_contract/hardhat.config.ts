import { HardhatUserConfig } from "hardhat/config";
import dotenv from 'dotenv';
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,

  },
  networks: {
    mumbai: {
      url: process.env.RPC_URL,
      accounts: [
        process.env.PRIVATE_KEY
      ],
    },
  },
};

export default config;
