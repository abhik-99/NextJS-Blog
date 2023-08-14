'use client'
import React from "react";
import { usePublicClient } from "wagmi";
import greeterAbi from "@/blockchain/greeter_abi.json";
import { polygonMumbai } from "viem/chains";

const GreetingGetter = () => {
  const publicClient = usePublicClient({
    chainId: polygonMumbai.id
  });
  const [greeting, setGreeting] = React.useState<string>();

  const greetingGet = async () => {
    const data = await publicClient.simulateContract({
      address: process.env.NEXT_PUBLIC_GREETING_CONTRACT,
      abi: greeterAbi,
      functionName: 'greeting',
    });
    setGreeting(data.result as string)
  }
  return (
    <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg border-2 border-gray-600 my-4">
      <h4 className="text-xl text-gray-400">Get Greeting</h4>
      <p className="block w-full my-4 text-gray-200">
        <b>Greeting:</b> {greeting}{" "}
      </p>
      <button className="bg-green-500 hover:bg-green-800 rounded-lg py-2 px-4 hover:shadow-[0px_0px_15px_5px_green]" onClick={greetingGet}>
        Get
      </button>
    </div>
  );
};

export default GreetingGetter;
