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
import {MdModeEdit} from 'react-icons/md'


const members = [
  { name : "100% Refundable", on: "Created On : 26/08/2021", time: "Created Time : 9:42 A.M"},
  { name : "50% Refundable", on: "Created On : 26/08/2021", time: "Created Time : 9:42 A.M"},
  
]  

export const ViewTimeSchedule = () => {


const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");



return ( 
    <div className="relative">
       {showMoreOptions && (
           <>
           <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className='absolute flex mt-14 justify-center items-center w-full h-full'>
     <div className='bg-black z-20 flex drop-shadow-2xl  flex-col text-xl  rounded-3xl w-[60%] h-[65%]'>
      <div className="w-full h-[40%] flex flex-col text-white justify-center items-center">
      <div className='rounded-full  drop-shadow-xl bg-white justify-center flex items-center w-[12%] h-[60%]'>
      <FaBus className="text-4xl text-quaternary"/>
      </div>
      <p className="font-bold text-4xl mt-2">OLA Bus</p>
      </div>
      <div className="w-full text-white font-bold text-4xl h-[25%] flex justify-center items-center">
        Are You Sure You Want To Delete
      </div>
      <div className="w-full flex flex-row justify-evenly items-center text-4xl font-bold text-white h-[20%]">
        
        <p className=""><Link to="/deleted-successfully">Yes</Link></p>
        <p className="">No</p>

      </div></div></div>
     </>
)}

{/* {showMoreOptions && (
           <>
           <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions} />
         </div>
     <div className='absolute flex mt-14 justify-center items-center w-full h-full'>
     <div className='bg-black z-20 flex drop-shadow-2xl  flex-col text-xl  rounded-3xl w-[60%] h-[65%]'>
      <div className="w-full h-[40%] flex flex-col text-white justify-center items-center">
      <div className='rounded-full  drop-shadow-xl bg-white justify-center flex items-center w-[12%] h-[60%]'>
      <FaBus className="text-4xl text-quaternary"/>
      </div>
      <p className="font-bold text-4xl mt-2">OLA Bus</p>
      </div>
      <div className="w-full text-white font-bold text-4xl h-[25%] flex justify-center items-center">
       knsjdhasuidhuash
      </div>
      <div className="w-full flex flex-row justify-evenly items-center text-4xl font-bold text-white h-[20%]">
        <p className=""><Link to="/deleted-successfully">Yes</Link></p>
        <p className="">No</p>
      </div></div></div>
     </>)} */}




<div className="w-screen h-screen overflow-hidden  flex">
      <div className="w-[100%] flex-col overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex w-full h-[5%]">
         
            <BackButton/><p className="font-bold text-2xl">View Refunding</p>
            </div>
          
          
       
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">

          <div className="w-full h-[20%] flex justify-center font-light text-7xl text-white mt-8">View Time Schedule</div>
           
            <div className="w-full h-full flex flex-col">
            {members?.map((m:any) => (
                <div className="w-full h-[27%]  flex flex-row">
                <div className=" w-full  h-full flex flex-start text-xl font-extralight text-white">
                <div className='rounded-full ml-14 mt-4 drop-shadow-xl bg-white justify-center flex items-center w-[110px] h-[110px]'>
                    <p className="bg-auto bg-los bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p>
                      {/* <FaBus className="text-4xl  text-quaternary"/> */}
                      </div>
                   <div className="ml-2 text-2xl mt-4">
                      <p>{m.name}</p>
                      <p>{m.on}</p>
                      <p>{m.time}</p>
                     
                  </div>
                </div>
                <div className="flex flex-end w-[15%] items-center h-full text-white">
            <div className=" flex flex-row font-bold  text-3xl">
              <p className="ml-4"> <FaEye onClick={ handleShowOptions}/></p>
             
              <p className="ml-16"> < MdDeleteForever onClick={ handleShowOptions}/> </p>
            </div>
         </div>
          </div>
          ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        
       
        )
      }  