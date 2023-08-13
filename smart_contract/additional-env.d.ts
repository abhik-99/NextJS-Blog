declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ETHERSCAN_API: string,
      RPC_URL: string,
      PRIVATE_KEY: string,
    }
  }
}
  
export {};