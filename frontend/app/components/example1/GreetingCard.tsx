import React from "react";
import Card from "../ui/Card";
import dynamic from "next/dynamic";

const GreetingGetter = dynamic(
  () => import("./GreetingGetter"),
  { ssr: false }
)

const GreetingSetter = dynamic(
  () => import("./GreetingSetter"),
  { ssr: false }
)

export const GreetingCard = () => {
  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-400">Example 1:</h3>
      <GreetingGetter />
      <GreetingSetter />
    </Card>
  );
};