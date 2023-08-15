"use client";
import { useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";
import React from "react";
import StyledButton from "./ui/StyledButton";

const SignoutButton = () => {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: "/" });
  };
  return (
    <StyledButton color="red" onClick={handleSignout}>
      Sign Out
    </StyledButton>
  );
};

export default SignoutButton;
