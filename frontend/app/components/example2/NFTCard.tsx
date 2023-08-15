
import dynamic from "next/dynamic";
import React from "react";
import Card from "../ui/Card";

const MintSection = dynamic(
  () => import("./MintSection"),
  { ssr: false }
)

export const NFTCard = () => {
  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-400">Example 2:</h3>
      <MintSection />
    </Card>
  );
};