// Assert is a testing framework
const assert = require('assert');
// Local Testing network on local host
const ganache = require('ganache-cli');
// web3 Library
const Web3 = require('web3');
// Import ABI and ByteCode from compile,js file
const {interface , bytecode} = require('../compile')
// Create web3 object
const web3 = new Web3(ganache.provider())

let accounts;
let inbox;
let InitialMessage = 'Hi There!';


// Async Function which takes some time to execute
// This Function will be executed before all tests
beforeEach( async() => {
    // get Accounts of local network 
    accounts = await web3.eth.getAccounts();

    // Provide Web3 library interface of contract 
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        // Now provide bytecode and Constructor parameter of contract
        .deploy({
             data : bytecode, 
             arguments : [InitialMessage]
            })
        // deploy the contract on this address ofnetwork
        .send({ from : accounts[0] , gas : '1000000'})
});

describe("InboxContract", () => {

     // Test and Check Contract Properties
    it("ContractInformations", () => {
        console.log(inbox)
    });

    it("DeployContract", () => {
        // Check if address is a defined value and contract is deployed
        assert.ok(inbox.options.address)
    });
        // Access the global variables of smart contract
    it("DefaultMessage", async () => {
        // Check the default global variable of smart contract
        const message = await inbox.methods.message().call();
        assert.equal(message,InitialMessage)
    });

        // Access the setMessage function of smart contract
    it("ChangeMessage", async () => {
        // Check the default global variable of smart contract
        await inbox.methods.setMessage('Hi Faisal!').send({ from : accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message,'Hi Faisal!')
    });
});