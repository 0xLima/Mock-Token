/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomicfoundation/hardhat-toolbox'); // This includes ethers, waffle, and etherscan
require("@nomicfoundation/hardhat-ethers");
const { vars } = require("hardhat/config");
const { PrivateKey } = require('./secret.json');
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

module.exports = {
   defaultNetwork: 'bscTestnet',

   networks: {
      hardhat: {},
      bscTestnet: {
         url: 'https://bsc-testnet-rpc.publicnode.com',
         accounts: [PrivateKey],
         chainId: 97,
      }
   },
   etherscan: {
      apiKey: {
         bscTestnet: '-',
      },
      url: {
         bscTestnet: 'https://api-testnet.bscscan.com/api',
      },
      sourcify: {
         enabled: true,
      }
   }, 

   solidity: {
      compilers: [
        {
           version: '0.8.20',
           settings: {
              evmVersion: 'paris',
              optimizer: {
                 enabled: true,
                 runs: 1000,
              },
           },
        },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
