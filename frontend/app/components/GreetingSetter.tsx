'use client'
import React from "react";
import { useAccount, useContractWrite } from "wagmi";
import greeterAbi from "@/blockchain/greeter_abi.json";

const GreetingSetter = () => {
  const {address: account} = useAccount();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: process.env.NEXT_PUBLIC_GREETING_CONTRACT,
    abi: greeterAbi,
    functionName: 'setGreetings',
    account
  })
  
  const greeting = React.useRef<HTMLInputElement | null>(null);
  const [value, setValue] = React.useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSet = async () => {
    write({
      args: [greeting.current?.value],
    });
  } 
  return (
    <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg border-2 border-gray-600 my-4">
      <h4 className="text-xl text-gray-400">Set Greeting</h4>
      <input className=" block w-full p-2.5 bg-black rounded-lg border border-gray-600 placeholder-gray-400 text-gray-500 focus:ring-blue-500 focus:border-blue-500 my-4" ref={greeting} value={value} onChange={handleChange} />
      <button className="rounded-lg py-2 px-4 bg-pink-700 hover:bg-pink-900 hover:border-none hover:shadow-[0px_0px_15px_5px_pink]" onClick={handleSet}>
        Set
      </button>
    </div>
  );
};

export default GreetingSetter;
