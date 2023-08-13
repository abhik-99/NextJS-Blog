import React from "react";
import CustomAppbar from "../components/CustomAppbar";
import Card from "../components/Card";

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
        <Card />
      </main>
    </div>
  );
};

export default HiddenPage;
