require("dotenv").config(); // Load environment variables from .env

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.API_URL, // Access the environment variable with process.env
      accounts: [process.env.Private_Key], // Access the environment variable with process.env
      chainId: 11155111,
      gas: 210000000,
      gasPrice: 800000000000,
    },
  },
};
