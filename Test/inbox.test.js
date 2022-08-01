// What is Mocha?
// Mocha is a test running framework
// It is used to test 

const assert = require('assert');

// It requires the local network on our machine
const ganache = require('ganache-cli')
// Web 3 Class that will help us create web instance
const Web3 = require('web3')

// Create Web3 instance and provide the provider
const web3 = new Web3(ganache.provider());

// CLass that we will be testing with Mocha
class Car
{
    Park()
    {
        return 'Stopped';
    }
    Drive()
    {
        return 'vroom'
    }
}

// Test Initialization code
// Eg car object is used in both it tests
let mycar;
beforeEach(() =>{
    mycar = new Car();
});

// Describe --> Used to group multpile it Tests
// Arg 1 -> Any String as object name, Arg 2 -> Arrow Fucntion 
describe('Car',() => {
    // Inside it we test out funtionality
    // Arg 1 -> object naem Arg-2 -> Arrow Function
    it('Can park' , ()=>{
        // assert equal funciton to comapre expected and real value
        assert.equal(mycar.Park() , 'Stopped')
    });
    it('Can Drive' , ()=>{
        assert.equal(mycar.Drive() , 'vroom')
    });
});