const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface , bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'try item smooth sadness decide unhappy duck insect dentist accident lucky document',
    'https://rinkeby.infura.io/v3/95d002fc564747daa885109f6563b42c'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account : ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data : bytecode,
        arguments : ['Hi Faisal!'] 
    }).send({
        gas : '1000000',
        from : accounts[0]
    })
    console.log('Contract Deployed to : ', result.options.address);
};

deploy();