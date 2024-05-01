require("@nomicfoundation/hardhat-toolbox") // Most of the following tools are included
require("dotenv").config() // get info from .env
require("@nomicfoundation/hardhat-verify") // etherscan
require("./tasks/block-number") // create a local task
require("hardhat-gas-reporter") // [tool] show the gas
require("solidity-coverage") // [tool] show the uncovered lines

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "111"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        // rinbey:{
        //     url:  ,
        //     accounts:  ,
        //     chainId:  ,
        // },
        // -- hardhat network is different from localhost
        localhost: {
            url: "http://127.0.0.1:8545/",
            // accounts: hardhat has given many accounts
            chainID: 31337,
        },
    },

    solidity: "0.8.24",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    // 1.use gas-reporter to show the gas cost
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        //currency: "USD",
        //coinmarketcap: COINMARKETCAP_API_KEY,
    },
    // 2.'yarn hardhat coverage'
}
