import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import {BsFillBellFill} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import {AiOutlineBars} from "react-icons/ai";

const Center=[
  
    {name:"Direct Support", link:"/support"},
    {name:"Help", link:"/profile-help"},
    {name:"Cupon", link:"/profile-cupon"},
    {name:"Refunding", link:"/"},
    {name:"Trips", link:"/profile-trips"},
]
const Notification=[
    {name:"2 Notification From Direct Support"},
    {name:"1 Notification From Help"},
    {name:"2 Notification From Cupon"},
    {name:"1 Notification From Refunding"},
    {name:"3 Notification From Trips"},
]



export const NotificationCenter = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%]">
          
            <BackButton/><p className="text-2xl font-bold">Notification Center</p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[15%] flex justify-center text-white items-center font-bold text-3xl">Notification Center</div>
           <div className="flex justify-center w-full h-[70%] flex-row items-center">
           <div className="flex justify-start  flex-col w-[60%] h-full">
               {
                Center.map((c)=>(
                 <p className="p-4 mt-6 ml-4 text-white underline underline-offset-8 decoration-1 font-bold text-2xl">
                  <Link to={c.link}>
                  {c.name}
                  </Link>
                  </p>
                
                ))    
            }
              </div>
              <div className="flex items-end h-full w-[40%] flex-col">
                {Notification.map((n)=>(
                <p className="text-2xl p-4 text-white mt-6 font-bold">{n.name}</p>
                )) }
              </div>
            </div> 
           </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  