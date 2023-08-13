'use client'
import React from "react";

const GreetingGetter = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg border-2 border-gray-600 my-4">
      <h3 className="text-2xl font-bold text-gray-400">Get Greeting</h3>
      <p className="block w-full my-4 text-gray-200">
        <b>Greeting:</b>{" "}
      </p>
      <button className="bg-green-500 hover:bg-green-800 rounded-lg py-2 px-4 hover:shadow-[0px_0px_15px_5px_green]">
        Get
      </button>
    </div>
  );
};

export default GreetingGetter;
