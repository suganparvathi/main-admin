import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { Link } from "react-router-dom";





export const JogooImages = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[10%] ">
          
            <BackButton/>
          </div>
         
       
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className="w-[30%] h-full flex-col flex justify-center items-center">
                <div className="w-full h-[10%] flex justify-center items-center">
                <Link to="/add-images"><p className="text-2xl font-bold underline underline-offset-2 text-white">Add Images</p></Link>
                </div>
                <div className="w-full h-[35%]  flex justify-center items-center">
                <Link to="/view-images"><p className="text-2xl font-bold underline underline-offset-2 text-white">View Images</p></Link>
                </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  