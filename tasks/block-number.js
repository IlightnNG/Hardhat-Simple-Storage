const { task } = require("hardhat/config")

// enter "yarn hardhat" in terminal
// there will be a task "block-number"
task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        const blcokNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blcokNumber}`)
    },
)
// add the task in hardhat.config.js
module.exports = {}
