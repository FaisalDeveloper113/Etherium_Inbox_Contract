// Assert is a testing framework
const assert = require('assert');
// ganache provide a route to web3
const ganache = require('ganache-cli');
// web3 Library
const Web3 = require('web3');
// Import ABI and ByteCode from compile,js file
const {interface , bytecode} = require('../compile')
// Create web3 object
const web3 = new Web3(ganache.provider())

let accounts;
let inbox;
// Asynv Function which takes some time to execute
beforeEach( async() => {
    //  await will wait for the result
    // get Accounts of local network
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data : bytecode , arguments : ['Hi There!']})
        .send({ from : accounts[0] , gas : '1000000'})
});

describe("InboxContract", () => {
    it("DeployContract", () => {
        console.log(inbox);
    });
});