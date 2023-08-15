import React from "react";
import CustomAppbar from "../components/CustomAppbar";
import { GreetingCard } from "../components/example1";
import { NFTCard } from "../components/example2";

const HiddenPage = () => {
  return (
    <div className="min-h-screen">
      <CustomAppbar />

      <main className="container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-5xl tracking-tight font-extrabold text-gray-300">
          Yohoo!!
        </h1>
        <h2 className="text-3xl text-gray-500">
          You have <span className="font-bold">Started</span>.
        </h2>
        <p className="">
          You have been signed in{" "}
          <span className="font-semibold text-green-400 text-xl">
            successfully
          </span>
          !
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GreetingCard />
        <NFTCard />

        </div>
      </main>
    </div>
  );
};

export default HiddenPage;
