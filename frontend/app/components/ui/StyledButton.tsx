'use client'
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cx from "classnames";

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "red" | "green" | "blue" | "pink" | "yellow" | "violet";
  children: ReactNode;
};
const StyledButton = ({
  children,
  color,
  ...otherProps
}: StyledButtonProps) => {
  const colorClass =
    color === "red"
      ? "bg-red-700 hover:border hover:border-red-700"
      : color === "yellow"
      ? "bg-yellow-400 hover:border hover:border-orange-700"
      : color === "violet"
      ? "bg-violet-700 hover:border hover:border-violet-700"
      : color === "blue"
      ? "bg-blue-700 hover:border hover:border-blue-700"
      : color === "green"
      ? "bg-green-500 hover:bg-green-800 hover:shadow-[0px_0px_15px_5px_green]"
      : "bg-pink-700 hover:bg-pink-900 hover:border-none hover:shadow-[0px_0px_15px_5px_pink]";
  return (
    <button
      className={cx("rounded-lg py-2 px-4 hover:bg-transparent", colorClass)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default StyledButton;
