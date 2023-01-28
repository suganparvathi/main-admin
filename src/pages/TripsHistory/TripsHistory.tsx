import React, { useCallback, useState } from "react";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";


export const TripsHistory = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          
            <BackButton/><p className="text-2xl font-bold">Trips History</p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           
            <div className="w-[30%]  flex  h-full flex-col">
                <div className="w-full h-[40%] ml-16 flex justify-start  items-center">
                <Link to="/current-trips"><p className="text-5xl font-bold underline decoration-2 underline-offset-[13px] text-white">Current Trip</p></Link>
                </div>
                <div className="w-full h-[10%] ml-16  flex justify-start  items-center">
                <Link to="/trip-list"><p className="text-5xl  font-bold underline decoration-2 underline-offset-[13px] text-white">Trip History</p></Link>
                </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
    
    
        
       
        )
      }  