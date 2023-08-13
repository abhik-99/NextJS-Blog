"use client";
import React from "react";
import WagmiProvider from "./WagmiProvider";
import AuthContext from "./AuthContext";

type ProviderType = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  return (
    <WagmiProvider>
      <AuthContext>{children}</AuthContext>
    </WagmiProvider>
  );
};

export default Providers;
