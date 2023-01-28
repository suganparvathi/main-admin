import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import { AiFillCaretDown } from "react-icons/ai";

export const You = () => {

  return (
   
    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center overflow-hidden h-[100%] flex">
      <div className="absolute w-[90%] h-full flex justify-center">
      <div className="w-[80%] h-full flex mt-10 justify-start items-center">
        <div className="w-[45%] h-[70%] rounded-3xl flex flex-col z-20 bg-opacity-80 backdrop-blur bg-black">
          <div className="flex flex-row ml-4 mt-4 text-xl text-pink-400">Withdrawn Amount From Your Wallet<span className="ml-4 text-3xl"><AiFillCaretDown/></span></div>
          <div className="flex flex-row">  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" alt="" className="w-[60px] h-[60px] rounded-full ml-4"/> 
          <p className="flex flex-col text-white ml-4 ">
            <p className="font-bold text-3xl">Rose</p>
            <p className="text-xl font-light">Withdrawn</p>
          </p>
          <p className="ml-14 text-2xl text-white mt-4 font-bold">$5000</p>
          </div>
          <div className="text-white text-xl ml-4 font-light p-2">Transaction Date :<span className="ml-6 font-bold">04:08:45</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Transaction Time :<span className="ml-6 font-bold">12:48:45</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Transaction Status :<span className="ml-6 font-bold">Completed</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Transaction ID :<span className="ml-6 font-bold">JOP98079890</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Money withdrawn From :<span className="ml-6 font-bold">Your Wallet</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">our Wallet ID :<span className="ml-6 font-bold">Katie***@jopay.com</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Transaction Method :<span className="ml-6 font-bold">UPI</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Money Withdrawn To :<span className="ml-6 font-bold">SBI Bank</span></div>
          <div className="text-white text-xl ml-4 font-light p-2">Account Number :<span className="ml-6 font-bold">SBI***459078</span></div>
        </div>
      </div>

    </div> 
  </div>
  </div>
    
  );
};
