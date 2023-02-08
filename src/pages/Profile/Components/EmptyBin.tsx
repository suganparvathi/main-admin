import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import {TbArrowsRandom} from 'react-icons/tb'


const Filter =[
  {name: "Name"},
  {name: "Mail Id"},
  {name: "Emp.ID"},
  {name: "Create Date"},
  {name: "Month"},
  {name: "Date"},
]
const members = [
    { name : "Elizabeth Victoria"},
    // { name : "Edward Kenway"},
    // { name : "Lisa Annie"},
   ]  

export const EmptyBin = () => {
  const[state,setState]=useState<string>();



return ( 
   

<div className="w-screen h-screen overflow-hidden  flex">
      <div className="w-[100%] flex-col overflow-hidden h-[100%] flex">
                          {/* top-div */}
                          <div className="flex  w-full items-center  flex-row h-[5%] ">
          
          <BackButton/><p className="text-2xl font-bold">Recycle Bin</p>
        </div>
         
          
       
                         {/* center div */}
                         <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[7%]  text-white text-xl"><Searchbar placeholder= "Search By Name/Mail ID/Employee Id/Phone Number"/> </div>
            <div className="w-full h-[15%]   flex justify-center items-center font-bold ">
                <div className="flex flex-row items-center text-black w-full h-full text-2xl font-bold ">
                  <button 
                  className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl text-white "><FiFilter className="text-text"/>Filter</button>
                  {
                    Filter.map((data) =>(
                   <button 
                   onClick={() =>{
                   console.log(data.name, "verify")
                   setState(data.name)
                   }}
                   className={`w-[14%] h-[50%] ml-2 flex justify-center  items-center rounded-3xl
                  ${data.name === state ? "bg-green text-white" : "bg-white"}`}>{data.name}
                  </button>
                  
                    ))
                }
                </div> 
                  
            </div>
            <div className="w-full h-[40%] justify-center items-center flex  flex-col ">
           <p className="font-bold text-8xl text-white ">NO Item Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  