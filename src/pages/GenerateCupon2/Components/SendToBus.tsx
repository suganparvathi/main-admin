import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FaBus } from "react-icons/fa";




export const SendToBus = () => {
  
   
const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);

  return (
    
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[4%]">
         
            <BackButton />
          </div>
          <div className=" font-bold w-full  h-[5%] -mt-4 flex justify-center text-3xl">Send To</div>
          
       
        {/* center div */}
        <div className="w-full h-full flex mt-4 justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="flex justify-center -mt-6 h-[15%]  w-full">
            <p className="rounded-full w-[90px] flex justify-center items-center bg-white h-[90px]"><FaBus className="text-4xl text-quaternary "/></p>
            </div>
            <div className="w-full h-[10%] flex-col text-white text-4xl font-bold flex justify-center items-center">
            Albert(678FB)
            <p className="text-sm  mt-2 font-light">OLA Bus</p>
            </div>
            <div className="flex flex-row w-full h-[90%]">
                <p className="w-[25%]  flex justify-end -mt-10 text-white text-3xl items-center h-[90%]">Select Cupon Type</p>
                <div className="w-[50%] -mt-10 h-full flex justify-center items-center">
                    <div className="w-[45%] h-[65%] rounded-2xl flex justify-center text-3xl font-bold text-[#3752B4] flex-col items-center drop-shadow-2xl bg-white">
                        <p className=""><Link to="/cash-back">Cash Back</Link></p>
                        <p className="mt-10"><Link to="/gift-voucher">Gift Voucher</Link></p>
                        <p className="mt-10"><Link to="/shopping-voucher">Shopping Voucher</Link></p>

                    </div>

                </div>

            </div>
        
          </div>
        </div>
      </div>
    </div>
   
    

  );
};
