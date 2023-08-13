import React from "react";
import GreetingGetter from "./GreetingGetter";
import GreetingSetter from "./GreetingSetter";

const Card = () => {
  return (
    <div className=" mt-5 bg-gray-800 border-2 border-gray-600 p-4 rounded-lg w-1/3 min-w-max text-gray-200">
      {" "}
      <p className="">
        You have been signed in{" "}
        <span className="font-semibold text-green-400 text-xl">
          successfully
        </span>
        !
      </p>
      <GreetingGetter />
      <GreetingSetter />
    </div>
  );
};

export default Card;
