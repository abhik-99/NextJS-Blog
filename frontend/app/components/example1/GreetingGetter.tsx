"use client";
import React from "react";
import { useContractRead } from "wagmi";
import greeterAbi from "@/blockchain/greeter_abi.json";
import StyledButton from "../ui/StyledButton";

const GreetingGetter = () => {
  const { data, isSuccess, isLoading, refetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_GREETING_CONTRACT,
    abi: greeterAbi,
    functionName: "greeting",
  });

  const greetingGet = async () => {
    refetch();
  };
  return (
    <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg border-2 border-gray-600 my-4">
      <h4 className="text-xl font-semibold text-gray-400">Get Greeting</h4>
      <p className="block w-full my-4 text-gray-200">
        <b>Greeting:</b> {isLoading && "..."}
        {isSuccess && (data as any)?.result}{" "}
      </p>
      <StyledButton onClick={greetingGet} color="green">
        Get
      </StyledButton>
    </div>
  );
};

export default GreetingGetter;
