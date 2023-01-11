require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  networks: {
    hardhat: {
      network_id: "*",
    },
    zilliqa: {
      url: "https://evm-api-dev.zilliqa.com/",
      accounts: "remote",
      gas: 100000000,
      gasPrice: 1000000000,
      chainID: 33101,
    },
  },
  contracts: {
    "contracts/**/*.sol": {
      settings: {
        outputSelection: {
          "*": {
            "*": ["abi", "evm.bytecode"],
          },
        },
      },
    },
  },
  solidity: {
    version: "0.8.9",
  },
  paths: {
    src: "contracts",
    tests: "test",
  },
};
