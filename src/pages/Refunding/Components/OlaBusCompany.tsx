import React, { useCallback, useState } from "react";
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

export const OlaBusCompany = () => {

return ( 
   

<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%] ">
         
            <BackButton/><p className="text-2xl font-bold">Trip List</p>
         
         
        </div>
                         {/* center div */}
        <div className="w-full h-full mt-2 flex justify-center ">
          <div className="mt-4 w-[95%] h-full bg-quaternary rounded-xl">
            <div className="w-full h-[15%] flex justify-center text-white text-5xl font-light items-center">Ola Bus Company</div>
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search your Company  Name/Company ID"/> </div>
            <div className="w-full h-[60%] overflow-y-auto  flex flex-col">
            {members?.map((e:any) => (
                <div className="w-full h-[60%] mb-20 flex flex-row">
                <div className=" w-full  h-[90%] flex flex-start text-xl font-extralight text-white">
                <Link to ="/ola-bus-company-trip-list">
                <div className='rounded-full ml-14  hover:scale-90 mt-4 drop-shadow-2xl bg-white justify-center flex items-center w-[130px] h-[130px]'>
                      <FaBus className="text-7xl  text-black"/>
                      </div>
                      </Link>
                   <div className="ml-4  mt-4">
                      <p className="text-4xl">{e.name}</p>
                      <p className="text-3xl mt-4">Date: <span className="ml-20 ">26/08/2021</span></p>
                      <p className="text-3xl mt-2">Time:<span className="ml-20">06:00 Am</span></p>
                  </div>
                </div>
              
          </div>
          ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
          
       
        )
      }  