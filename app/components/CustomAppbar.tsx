import React from "react";
import Image from "next/image";
import logo from "@/public/logo192.png"
import SignoutButton from "./SignoutButton";

const CustomAppbar = () => {

  return (
    <nav className="bg-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://abhikbanerjee.com/" className="flex items-center">
          <Image
            src={logo}
            className="h-12 w-12 mr-3 rounded-xl hover:shadow-[0px_0px_15px_5px_green]"
            alt="Abhik Banerjee Logo"
          />
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <SignoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomAppbar;
