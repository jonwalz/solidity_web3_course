const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  'black solve wrestle slam spoon attitude tell pact easily rose display aware climb plate wall bind fly any island congress cloud nose holiday glad',
  'https://rinkeby.infura.io/v3/380047a906df4799a23b2fb46fc3b0fe'
)

const web3 = new Web3(provider)