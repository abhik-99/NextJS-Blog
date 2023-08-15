declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_W3C_PID: string;
      NEXT_PUBLIC_SIGNIN_MESSAGE: string;
      NEXTAUTH_SECRET: string;
      SIWE_DOMAIN: string;
      NEXT_PUBLIC_GREETING_CONTRACT: `0x${string}`;
      NEXT_PUBLIC_NFT_CONTRACT: `0x${string}`;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
