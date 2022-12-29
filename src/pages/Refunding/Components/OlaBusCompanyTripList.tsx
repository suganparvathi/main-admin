import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {MdModeEdit} from 'react-icons/md'


const members = [
  { name : "OLA Bus (OLA-8796)", data : "2 Refunds From 1 Bus"},
  { name : "OLA Bus (OLA-4567)", data : "1 Refunds From 1 Bus"},
 
]  

export const OlaBusCompanyTripList = () => {

return ( 
   

<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[12%] ">
          <div className="w-full h-full flex flex-row items-center ">
            <BackButton/><p className="text-2xl font-bold">Trip List</p>
          </div>
          
          <div className="w-full h-full flex items-center">
            <Notifcation/>
          </div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full  bg-quaternary rounded-xl">
            <div className="w-full h-[15%] flex justify-center text-white text-5xl font-light items-center">Ola Bus Company</div>
            <div className="flex flex-row w-full h-[85%]">
            <div className="w-[65%] bg-yellow-200 h-full">
                <div></div>
            </div>
          <div className="w-[35%] mr-6 rounded-t-[50px] bg-red-200 h-full">hi</div>

            </div>
         </div>
        </div>
      </div>
    </div>
          
       
        )
      }  