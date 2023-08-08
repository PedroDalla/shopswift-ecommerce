"use client";

import {
  IconBox,
  IconMinus,
  IconPlus,
  IconStarFilled,
  IconStarHalfFilled,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import Headphones from "../../public/images/categories/headphones.jpg";

export default function Home() {
  const [buyAmount, setBuyAmount] = useState(1);

  const addBuyAmount = () => {
    setBuyAmount((bA) => bA + 1);
  };

  const subtractBuyAmount = () => {
    setBuyAmount((bA) => {
      if (bA === 1) return bA;
      return bA - 1;
    });
  };

  return (
    <main>
      <div className="container flex flex-col lg:flex-row gap-20 w-full mx-auto my-0 py-10">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full aspect-square rounded-xl object-cover"
            src={Headphones}
            alt="Headphones"
          />
        </div>
        <div className="w-full lg:w-1/2 text-slate-800">
          <div className="w-full flex flex-col gap-8">
            <div className="border-b-[1px] border-b-slate-200 w-full pb-8 flex flex-col gap-4">
              <span className="font-extrabold text-4xl">Sony H100-S1</span>
              <p className="font-medium">
                A perfect balance of highs and lows, comfort and high-fidelity
                audio.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 inline-flex">
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarFilled size={20} />
                  <IconStarHalfFilled size={20} />
                </span>
                <span className="font-medium">(121)</span>
              </div>
            </div>
            <div className="border-b-[1px] border-b-slate-200 w-full pb-8 flex flex-col gap-4">
              <span className="font-bold text-2xl">
                $549.00 or $99.99/month
              </span>
              <p className="font-medium text-sm">
                Suggested payments with 6 months special financing.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <div className="flex bg-slate-100 rounded-full p-4 font-black items-center justify-between w-36">
                  <button onClick={subtractBuyAmount}>
                    <IconMinus size={20} stroke={3} />
                  </button>
                  <div>{buyAmount}</div>
                  <button onClick={addBuyAmount}>
                    <IconPlus size={20} stroke={3} />
                  </button>
                </div>
                <p className="text-sm font-medium">
                  Only{" "}
                  <span className="text-indigo-800 font-bold">12 items</span>{" "}
                  left!
                  <br />
                  Don&apos;t miss it!
                </p>
              </div>
              <div className="w-full flex gap-3">
                <button className="px-16 py-3 xl:px-20 rounded-full font-bold bg-indigo-700 text-slate-100 hover:bg-indigo-900 cursor-pointer transition-colors ease-in-out duration-200">
                  Buy Now
                </button>
                <button className="px-16 py-3 xl:px-20 rounded-full font-bold border-indigo-800 border-[1px] bg-slate-100 hover:bg-slate-200 cursor-pointer transition-colors ease-in-out duration-200">
                  Add to Cart
                </button>
              </div>
              <div className="w-full rounded-xl border-2 border-slate-100">
                <div className="flex px-6 py-4 items-start pb-6 gap-2 border-b-2 border-slate-100">
                  <div className="h-full flex flex-col justify-start text-indigo-800">
                    <IconTruckDelivery />
                  </div>
                  <p>
                    <span className="font-bold">Free Delivery</span>
                    <br />
                    <span className="text-sm font-medium underline">
                      Enter your Postal Code for Delivery Availability
                    </span>
                  </p>
                </div>
                <div className="flex px-6 py-4 items-start pb-6 gap-2">
                  <div className="h-full flex flex-col justify-start text-indigo-800">
                    <IconBox />
                  </div>
                  <p>
                    <span className="font-bold">Return Delivery</span>
                    <br />
                    <span className="text-sm font-medium">
                      Free 30 days Delivery returns.{" "}
                      <span className="underline">Details</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
