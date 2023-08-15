"use client";
import React from "react";

import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import nftAbi from "@/blockchain/nft_abi.json";
import StyledButton from "../ui/StyledButton";

const MintSection = () => {
  const { address } = useAccount();
  const { data, isSuccess, isLoading, refetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: writeData, write } = useContractWrite({
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT,
    abi: nftAbi,
    functionName: "safeMint",
    account: address,
  });
  useWaitForTransaction({
    hash: writeData?.hash,
    onSuccess() {
      refetch();
    },
  });
  const handleMint = async () => {
    write({
      args: [address],
    });
  };
  return (
    <div className="h-full mt-4 lg:flex lg:flex-col lg:justify-evenly lg:items-center">
      <p>
        You are signed in as{" "}
        <span className="font-bold tracking-tight">
          {address?.slice(0, 5)}...
          {address?.slice(address.length - 5, address.length)}
        </span>
        .
      </p>
      <p>
        Your Balance:{" "}
        {isLoading && <span className="font-semibold">loading...</span>}
        {isSuccess && (data as any).toString()}
      </p>
      <div className="flex justify-center items-center mt-3">
        <StyledButton color="pink" onClick={handleMint}>
          Mint
        </StyledButton>
      </div>
    </div>
  );
};

export default MintSection;
