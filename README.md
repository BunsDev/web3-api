# Web3 API Template
Simple (template) implementation for creating an API for a protocol, especially as it relates to submissions to CoinGecko and CoinMarketCap.

## Getting Started
``` yarn && yarn start ```

### **Create Vercel Account**
Create an account on Vercel to acquire the data direct from a URL.
  - Note: this is required for a proper CoinGecko submission to track Circulating Supply.
- [Create (Free) Account](https://vercel.com/)

### **Routes (Endpoints)**
- /supply/total
- /supply/circulating
- /supply/max

### **Implementation Notes**
- **You may need to update:** 
  - CHAIN_ID (constants)
  - RPC_URL (constants)

- **You will need to update:**
  - TOKEN_ADDRESS (constants)
  - TOKEN_DECIMALS (constants)
  - MAX_SUPPLY (constants)

### **Further Considerations**
- Use main to test, the PR to prod for production URL.
- Report the unadjusted results to CG and CMC.