// // Allows us to use ES6 in our migrations and tests.
// require('babel-register')

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "";

// // Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// // Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
    networks: {
        ganache: {
        host: '127.0.0.1',
        port: 7545,
        network_id: '*' // Match any network id
        },
        rinkeby: {
            provider: function() { 
              return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/3135ff4d9a4c409ba25b8a34244009ee") 
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000,
          }
    },
}
  // Set default mocha options here, use special reporters etc.
    // mocha: {
    // timeout: 100000
    // },

  // Configure your compilers
    // compilers: {
    //     solc: {
    //         version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
    //     // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    //     // settings: {          // See the solidity docs for advice about optimization and evmVersion
    //     //  optimizer: {
    //     //    enabled: false,
    //     //    runs: 200
    //     //  },
    //     //  evmVersion: "byzantium"
    //     // }
    //     }
    // }

