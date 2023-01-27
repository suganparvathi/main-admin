import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import { KycRequest } from "./KycRequest";
import {TiArrowUnsorted } from "react-icons/ti";

const Filter =[
  {name: "Recent"},
  {name: "Date"},
  {name: "Month"},
  {name: "Time"},
]


export const KycVerification = () => {

  const [state, setState] = useState<string>();
 
  
return ( 
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%] ">
          <div className="w-full h-full flex-row flex items-center ">
            <BackButton/><p className="text-2xl font-bold">KYC Verification</p>
          </div>
          
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className="w-full h-[10%]  flex justify-center items-center text-white font-bold text-3xl">KYC Verification</div>
            <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Name/Email ID/Phone Number"/> </div>
            <div className="w-full h-[15%]  flex justify-center items-center font-bold ">
                <div className="flex flex-row items-center text-black w-full h-full text-2xl font-bold ">
                  <button 
                  
                  
                  className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl text-white "><FiFilter className="text-text"/>Filter</button>
                  {
                    Filter.map((data) =>(
                   <button 
                   onClick={() =>{
                   console.log(data.name, "verify")
                   setState(data.name)
                   }}
                   className={`w-[10%] h-[50%] ml-2 flex justify-center hover:bg-blue-200 items-center rounded-3xl
                  ${data.name === state ? "bg-green text-white" : "bg-white"}`}>{data.name}
                  </button>
                  
                    ))
                }
                </div> 
                  <div className="flex flex-end w-[15%] h-[50%] ml-2 flex justify-center text-2xl items-center text-black rounded-3xl bg-white mr-2 ">Sort By<TiArrowUnsorted/></div>
            </div>
            <div className="w-full h-full"><KycRequest/></div>
          </div>
        </div>
      </div>
    </div>
        
       
        )
      }  