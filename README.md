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
  - tokenlist.json (utils)

- **You will need to add:**
  - Your token to constants.
  - Your token to the tokenlist.json

### **Further Considerations**
I prefer a test -> prod workflow. So, I push to main, then PR to the prod branch. 

The prod branch then updates the domain I use for whatever production-related purposes.

This way, I am able to ensure the API works as expected prior to updating live production data.