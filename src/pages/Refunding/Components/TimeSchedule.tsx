import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";





export const TimeSchedule = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%] items-center  flex-row ">
         <BackButton/><p className="text-2xl font-bold">Refunding</p>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex mt-2 justify-center ">
          <div className="mt-4 w-[95%] h-full bg-quaternary rounded-xl">
            <div className=" w-full flex justify-center items-center text-6xl text-white font-light h-[15%]">Time Schedule</div>
            <div className="w-[30%] h-full flex-col">
                <div className="w-full h-[25%] flex justify-start ml-16 items-center">
                <Link to="/new-time-schedule"><p className="text-3xl font-light underline decoration-2 underline-offset-[7px] text-white">Add New Time Schedule</p></Link>
                </div>
                <div className="w-full h-[25%]  flex justify-start ml-16 items-center">
                <Link to="/view-time-schedule"><p className="text-3xl  font-light underline decoration-2 underline-offset-[7px] text-white">View Time Schedule</p></Link>
                </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  