// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.17;

contract Inbox 
{
    // Solidity Automaticaly Creates Function of Public Variables
    string public message;

    // Code to Write the constructor function
    // Keyword memory in parameters
    constructor (string memory initialmessage) {
        message = initialmessage;
    }
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}