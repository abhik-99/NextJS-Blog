'use client'
import { useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";
import React from 'react'

const SignoutButton = () => {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: "/" });
  };
  return (
    <button
    className="rounded-lg py-2 px-4 bg-red-700 hover:border hover:border-red-700 hover:bg-transparent"
    onClick={handleSignout}
  >
    Sign Out
  </button>
  )
}

export default SignoutButton