// import
const { ethers, run, network } = require("hardhat") // hardhat, no long ether

// async main
async function main() {
    // 1.Deploy
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage")
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.waitForDeployment()
    console.log(simpleStorage)

    // 2. show config
    console.log(`Deployed contract to: ${simpleStorage.address}`)
    // use ` not ' to apply js
    //console.log(network.config)

    // 3. Verifies a contract on Etherscan or Sourcify
    // 4 == "4"  -> true
    // 4 === "4" -> false
    // if test chain or local, verify
    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deployTransaction.wait(6)
        await verify(simpleStorage.address, [])
    }

    // 4. read value
    const currentValue = await simpleStorage.read()
    console.log(`Current value is: ${currentValue}`)

    // 5. Update the current value
    const transactionResponse = await simpleStorage.store(20)
    await transactionResponse.wait(1)
    const updateValue = await simpleStorage.read()
    console.log(`Updated value is: ${updateValue}`)
}

// config: require("@nomicfoundation/hardhat-verify")
// to verify the etherscan
// arrow function:
// const verify = async(constractAddress, args){}
async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArgument: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
