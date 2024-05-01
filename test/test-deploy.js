const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

// yarn hardhat test
// yarn hardhat test --grep (key words)

// describe("SimpleStorage", ()=>{})
describe("SimpleStorage", function () {
    //init
    let SimpleStorageFactory, simpleStorage
    //
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await SimpleStorageFactory.deploy()
    })

    it("Should start with a favorite number of 111", async function () {
        const currentValue = await simpleStorage.read()
        const expectedValue = "111"
        // assert or
        // expect
        assert.equal(currentValue.toString(), expectedValue)
    })
    // itonly
    it("Should update when we call store", async function () {
        const expectedValue = "8"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.read()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
