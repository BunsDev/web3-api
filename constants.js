const BN = require("bn.js")
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3002'
const CHAIN_ID = process.env.RPC || 250
const RPC = process.env.RPC || 'https://rpc.ankr.com/fantom'

// addresses //
const SOUL="0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07"
// note: add your token address (and name) here //

// numeric //
const _1E18 = new BN("1000000000000000000")

// exports constants //
module.exports = {
  API_BASE_URL, CHAIN_ID, RPC, SOUL, _1E18
}