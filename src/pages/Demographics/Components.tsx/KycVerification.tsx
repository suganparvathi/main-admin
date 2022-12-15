import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import { KycRequest } from "./KycRequest";
import {TiArrowUnsorted } from "react-icons/ti";




export const KycVerification = () => {
return ( 
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[12%] ">
          <div className="w-full h-full flex items-center ">
            <BackButton/>
          </div>
          <div className="w-full h-full flex items-center">
            <Notifcation/>
          </div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className="w-full h-[10%]  flex justify-center items-center text-white font-bold text-2xl">KYC Verification</div>
            <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Name/Email ID/Phone Number"/> </div>
            <div className="w-full h-[15%]  flex justify-center items-center text-white font-bold ">
                <div className="flex flex-row items-center text-black w-full h-full text-2xl font-bold ">
                  <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl bg-white "><FiFilter className="text-black"/>Filter</div>
                  <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl bg-white ">Recent</div>
                  <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl bg-white ">Date</div>
                  <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl bg-white ">Month</div>
                  <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl bg-white ">Time</div>
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