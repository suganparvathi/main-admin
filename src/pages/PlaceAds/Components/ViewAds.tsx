import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import { Shopping } from "./Shopping";


export const ViewAds = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          <BackButton/><p className="text-2xl font-bold">Place Ads</p>
          </div>
                
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className=" w-full flex justify-center items-center font-bold text-2xl text-white h-[15%]">View Ads</div>
            <div className="w-full h-full">
                <Shopping/>
            </div>
            
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  