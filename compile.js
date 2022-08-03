//require('./Contracts/Inbox.sol')    // Bad !! -> Here we are not requiring Js file

// 1. Require Path
const Path = require('path');
// Require File System
const Fs = require('fs');
// Require Solidity Compiler
const solc = require('solc');
const path = require('path');

// 2. Get the Current Directory
const InboxContractPath = path.resolve(__dirname,'Contracts','Inbox.sol');
// 3. Tell the file system the type of File reading
const source = Fs.readFileSync(InboxContractPath,'UTF-8');
// 4. Check the compilaiton process
// Arguement 1 -> Compile this source code file
// Arguement 2 -> Total Number of Contracts Inside Contract Directory
// module.export basically export this object -> .contratcs[':Inbox'] -> Gets only the Bytecode and ABI
module.exports = solc.compile(source, 1).contracts[':Inbox']