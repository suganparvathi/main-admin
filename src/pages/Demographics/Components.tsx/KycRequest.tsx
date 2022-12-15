import React, { useCallback, useState } from "react";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const members = [
    { name : "Harsha"},
    { name : "Muthu"},
   
]  


export const KycRequest = () => {

    


    return ( 
   <div className="w-full h-full flex  flex-col  ">
             {members.map(({name}) => (
            <div className="w-full h-[20%] flex flex-row">
                  <div className=" w-full h-full flex flex-start text-xl font-bold text-white">
                     <div className="w-[70px] ml-4"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[60px]"/></div>
                     <div className="ml-8">
                        <p>{name}</p>
                        <p>KYC Applied Date : 05:08:2021</p>
                        <p>Time: 11:00 A.M</p>
                     </div>
                  </div>
                     <div className="flex flex-end w-[18%] items-center h-full text-white">
                        <Link to="/pending-request">
                        <p className="border-b-2 border-white font-bold text-xl">Request Pending</p>
                        </Link>
                     </div>
            </div>
            ))}
      <div className="w-full h-[20%] flex flex-row">
         <div className=" w-full h-full flex flex-start text-xl font-bold text-white">
              <div className="w-[70px] ml-4"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[60px]"/></div>
              <div className="ml-8">
                   <p>knjnj</p>
                   <p>KYC Applied Date : 05:08:2021</p>
               </div>
         </div>
         <div className="flex flex-end w-[10%] items-center h-full text-white">
              <div className=" flex flex-row font-bold  text-2xl">
                <p className="ml-2"> <FaEye/> </p>
                <p className="ml-2"> < MdDeleteForever/> </p>
               </div>
           </div>
      </div>

   </div>
        )
      }  