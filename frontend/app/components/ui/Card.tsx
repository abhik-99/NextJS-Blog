import React, { ReactNode } from "react";

type CardPropsType = {
  children: ReactNode;
};

const Card = ({ children }: CardPropsType) => {
  return (
    <div className=" mt-5 bg-gray-800 border-2 border-gray-600 p-4 rounded-lg w-1/3 min-w-max text-gray-200">
      {children}
    </div>
  );
};

export default Card;
