const BN = require("bn.js")
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3002'
const CHAIN_ID = process.env.CHAIN_ID || 250
const RPC = process.env.RPC_URL || 'https://rpc.ankr.com/fantom'

// addresses //
const DAO_ADDRESS = "0x1c63c726926197bd3cb75d86bcfb1daebcd87250"
const TOKEN_ADDRESS ="0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07"
// note: add your token address (and name) here //

// numeric //
const _1E18 = new BN("1000000000000000000")
const TOKEN_DECIMALS = 18
const MAX_SUPPLY = 250_000_000

// exports constants //
module.exports = {
  API_BASE_URL, CHAIN_ID, RPC, DAO_ADDRESS, MAX_SUPPLY, TOKEN_DECIMALS, TOKEN_ADDRESS, _1E18
}