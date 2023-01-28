import React, { useCallback, useState } from "react";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";

export const Refunding = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
              <BackButton/><p className="text-2xl font-bold">Refunding</p>
          </div>
           
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className=" w-full flex justify-center items-center text-6xl text-white font-light h-[15%]">Refunding</div>
            <div className="w-[25%] h-full flex-col">
                <div className="w-full h-[25%] flex justify-start ml-16 items-center">
                <Link to="/time-shedule"><p className="text-4xl font-light underline decoration-2 underline-offset-4 text-white">Time Schedule</p></Link>
                </div>
                <div className="w-full h-[25%]  flex justify-start ml-16 items-center">
                <Link to="/trips-list"><p className="text-4xl  font-light underline decoration-2 underline-offset-[12px] text-white">Trips List</p></Link>
                </div>
            </div>
         </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  