'use client'
import React from "react";

const GreetingSetter = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg border-2 border-gray-600 my-4">
      <h3 className="text-2xl font-bold text-gray-400">Set Greeting</h3>
      <input className=" block w-full p-2.5 bg-black rounded-lg border border-gray-600 placeholder-gray-400 text-gray-500 focus:ring-blue-500 focus:border-blue-500 my-4" />
      <button className="rounded-lg py-2 px-4 bg-pink-700 hover:bg-pink-900 hover:border-none hover:shadow-[0px_0px_15px_5px_pink]">
        Set
      </button>
    </div>
  );
};

export default GreetingSetter;
