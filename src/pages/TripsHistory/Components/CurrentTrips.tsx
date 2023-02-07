import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import {MdModeEdit} from 'react-icons/md'

const members = [
  { name : "OLA Bus Company", data : "Number Of Buses in Trip 5"},
  { name : "UBER Bus Company", data : "Number Of Buses in Trip 3"},
  { name : "Red Bus Company", data : "Number Of Buses in Trip 3"},
  { name : "Zemo Bus Company", data : "Number Of Buses in Trip 1"},
 
]  


export const CurrentTrips = () => {

  const[state, setState]=useState<string>();

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          
            <BackButton/><p className="text-2xl font-bold">Current Trip</p>
          </div>
                    
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           
          <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Bus Company  Name/Bus ID"/> </div>
            <div className="w-full h-[65%]  overflow-y-auto flex flex-col">
            {members?.map((e:any) => (
                <div className="w-full h-[50%] mb-8  flex flex-row">
                <div className=" w-full  h-[40%]  flex flex-start text-xl font-extralight text-white">
                    <Link to ="/ola-bus">
                <div
                onClick={()=>{
                  console.log(e.name,"currenttrips")
                setState(e.name)
                }}
                className='rounded-full ml-14 hover:scale-90 drop-shadow-2xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                      <FaBus className="text-2xl   text-quaternary"/>
                </div>
                </Link>
                   <div className="ml-4  mt-6">
                      <p className="text-2xl font-bold">{e.name}</p>
                     
                  </div>
                </div>
                <div className="flex flex-end w-[47%] items-center  h-[35%] text-white">
            <div className=" flex flex-row font-bold text-2xl">
              <p className="ml-4 mt-12">{e.data}</p>
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