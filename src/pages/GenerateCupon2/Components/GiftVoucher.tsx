import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import Entervalue from "../../../components/Entervalue";
import { FaBus } from "react-icons/fa";





export const GiftVoucher = () => {
  
const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);

  return (
   
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[4%]">
         
            <BackButton />
          </div>
          <div className=" font-bold w-full  h-[5%] -mt-4 flex justify-center text-3xl">Gift Voucher</div>
          
       
        {/* center div */}
        <div className="w-full h-full flex mt-4 justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="flex justify-center -mt-6 h-[15%]  w-full">
            <p className="rounded-full w-[90px] flex justify-center items-center bg-white h-[90px]"><FaBus className="text-4xl text-quaternary "/></p>

            </div>
            <div className="w-full h-[15%]  text-white text-4xl font-bold flex justify-center items-center">
         
            <div className="w-full h-[10%] flex-col text-white text-4xl font-bold flex justify-center items-center">
            Albert(678FB)
            <p className="text-sm  mt-2 font-light">OLA Bus</p>
            </div>
            </div>
            <div className=" w-full h-[13%] flex flex-row text-2xl">
              <div className="w-[37%]  h-full "></div>
              <div className="w-full  h-full ">
              <Entervalue  placeholder="Enter The Gift Voucher Percentage"/>
              </div>
             </div>
            
          
           <div className="w-full h-[20%] flex flex-row justify-center items-end">
           <div className="flex  justify-center  border-2 ml-[90px] w-[11%] text-black border-white h-[50px]  rounded-full ">
             <input
                type="password"
                name="Entervalue"
                placeholder="* * * *"
                className="bg-transparent border-none py-2   text-white text-2xl outline-none w-[70%]"
              />{" "}
               </div>
               <p className="flex justify-center mt-2 text-white text-xl ml-2">Password</p>
               </div>
               <div className="w-full h-[20%] flex items-center justify-center">
                <button 
                onClick={colorButton}
                className={`w-[8%] h-[40%] border-2 text-black border-white text-xl rounded-full
                ${ color? "bg-green" : "bg-white"}`}>Send</button>
               </div>
        
          </div>
        </div>
      </div>
    </div>
   
    

  );
};
