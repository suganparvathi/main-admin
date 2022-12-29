import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { Link } from "react-router-dom";
import {ImPlus} from 'react-icons/im';




export const AddImages = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[10%]">
         
            <BackButton/>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
                <div className="w-full h-[20%] flex justify-center items-center">
                <p className="text-5xl font-bold underline underline-offset-2 text-white">Add Images</p>
               </div>
           <div className="w-[50%] h-[30%] justify-start items-center flex flex-row">
             <div className="w-[17%] ml-10 h-[60%] flex justify-center items-center rounded-xl bg-white"><ImPlus className="text-6xl text-quaternary"/></div>
             <div className="ml-10 text-4xl text-white font-bold">Add New Jogoo Images</div>
           </div>
           <div className="w-[50%] h-[30%] justify-start items-center flex flex-row">
            <div className="w-[17%] ml-10 h-[60%] flex justify-center items-center rounded-xl bg-white"><ImPlus className="text-6xl text-quaternary"/></div>
            <div className="ml-10 text-4xl text-white font-bold">Add New Jogoo Images</div>
           </div>
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  