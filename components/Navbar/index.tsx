"use client";

import {
  IconBook,
  IconChevronDown,
  IconMenu2,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { Searchbar } from "./components/Searchbar";

export const Navbar: React.FC = () => {
  const [searchbarFocused, setSearchbarFocused] = useState(false);

  //Wrapper for 'setSearchbarFocused'
  function toggleSearchbarFocused() {
    const newValue = !searchbarFocused;
    setSearchbarFocused(newValue);
    return newValue;
  }

  return (
    <nav className="h-[80px] sticky top-0 left-0 w-full bg-white flex justify-center text-md z-50">
      <div className="flex gap-10 justify-between items-center h-full w-full py-5 px-5 xl:px-0 xl:max-w-[1200px] 2xl:max-w-[1400px]">
        {/* ShopSwift Logo Section */}
        <div className="hidden md:block">
          <a className="flex gap-2 justify-center items-center bg-gradient-to-r from-indigo-950 to-indigo-700 bg-clip-text text-transparent">
            <IconShoppingCart size={40} className="text-indigo-900" />
            <span className="font-extrabold text-3xl">ShopSwift</span>
          </a>
        </div>
        {/* ShopSwift Logo Section (Mobile)*/}
        <div className="md:hidden">
          <a className="flex gap-2 justify-center items-center bg-gradient-to-br from-indigo-950 to-indigo-700 bg-clip-text text-transparent">
            <IconShoppingCart size={30} className="text-indigo-900" />
            <span className="font-extrabold text-2xl">ShopSwift</span>
          </a>
        </div>
        {/* Middle Section */}
        <div className="hidden gap-5 justify-between flex-1 items-center md:flex ">
          {/* Main Links */}
          <ul className="flex gap-10">
            <li className="font-medium flex gap-2">
              <span>Categories</span>
              <IconChevronDown />
            </li>
            <li
              className={`font-medium ${
                searchbarFocused ? "hidden" : "lg:list-item"
              }  hidden`}>
              <a>Deals</a>
            </li>
            <li
              className={`font-medium ${
                searchbarFocused ? "hidden" : "lg:list-item"
              }  hidden`}>
              <a>What&apos;s new</a>
            </li>
            <li
              className={`font-medium ${
                searchbarFocused ? "hidden" : "lg:list-item"
              }  hidden`}>
              <a>Delivery</a>
            </li>
          </ul>
          {/* Searchbar */}
          <Searchbar
            focused={searchbarFocused}
            toggleFocused={toggleSearchbarFocused}
          />
        </div>

        {/* Account and Cart Section */}
        <div className="flex gap-5">
          <a>
            <div className="flex font-medium gap-1 cursor-pointer text-sm items-center justify-center">
              <IconUser />
              <span className="hidden md:inline">Account</span>
            </div>
          </a>
          <a>
            <div className="flex font-medium gap-1 cursor-pointer text-sm items-center justify-center">
              <IconShoppingCart />
              <span className="hidden md:inline">Cart</span>
            </div>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex justify-center items-center">
          <button className="text-slate-950 hover:text-slate-800 cursor-pointer">
            <IconMenu2 />
          </button>
        </div>
      </div>
    </nav>
  );
};
