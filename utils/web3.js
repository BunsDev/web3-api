const Web3 = require('web3')
const { RPC } = require("../constants")

const {
  CHAIN_ID,
} = require('../constants')

const clients = {chain: []}

clients.chain.push(new Web3(RPC))

const chainRandomClient = () => clients.chain[~~(clients.chain.length * Math.random())]

module.exports = {
  get chainWeb3() {
    return chainRandomClient()
  },

  web3Factory: chainId => {
    switch (chainId) {
      case CHAIN_ID:
        return chainRandomClient()
    }
  },
}