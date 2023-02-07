import React, { useCallback, useState } from "react";
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

   const [showMoreOptions1, setShowMoreOptions1] = useState(false);
  const handleShowOptions1 = () => {
     setShowMoreOptions1(!showMoreOptions1);
     
    }

return ( 
    <div className="relative">
      {showMoreOptions && (
           <>
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
  <div className="absolute w-[90%] flex-col   flex items-center h-full">
    <div className="w-[65%] -ml-20 h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-16 items-center">
            <div className='rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[110px] h-[80%]'>
            <p className="bg-auto bg-los bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p>
              </div>
             
    </div>
    
    </div>
    <div className="w-[45%] rounded-3xl bg-white flex text-xl flex-row z-20 justify-center items-center  h-[55%] text-black">
      <div className="flex flex-col w-[50%] justify-center items-start h-full">
      <p className="ml-4 flex flex-row  p-4">Refundable Amount </p>
      <p className="ml-4 flex flex-row p-4">Applicable for</p>
      <p className="ml-4 flex flex-row p-4">Created By </p>
      <p className="ml-4 flex flex-row p-4">Created Date & Time</p>
      </div>
      <div className="flex flex-col justify-center items-start w-[50%] h-full">

      <span className="font-bold p-4">100% Refundable</span>
      <span className="font-bold p-4">Customer Who Cancelled Trip 2 Days Before</span>
      <span className="font-bold p-4">Jopay Admin(You)</span>
      <span className="font-bold p-4">26/08/2021 (6:00 Am)</span>
      </div>   
    </div>
  </div>
  </>


)}

{showMoreOptions1 && (
           <>
           <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions1} />
         </div>
     <div className='absolute flex mt-14 justify-center items-center w-full h-full'>
     <div className='bg-black z-20 flex drop-shadow-2xl    flex-col text-xl  rounded-3xl w-[60%] h-[55%]'>
     
      <div className="w-full text-white font-bold text-4xl h-[35%] flex flex-col items-center">
      <p className="text-3x font-semibold mt-10"> Do You Want To Delete?</p>
      <p className="text-2xl font-light mt-10"> If You Select Yes You Can't Able to Restore the Data cl</p>
      </div>
      <div className="w-full flex flex-row justify-evenly items-center text-4xl font-bold mt-20 text-white h-[20%]">
        <p className=" hover:scale-90"><Link to="/deleted-successfully">Yes</Link></p>
        <p className=" hover:scale-90">No</p>
      </div></div></div>
     </>)}

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
           
            <div className="w-full h-[60%] overflow-y-auto  flex flex-col">
            {members?.map((m:any) => (
                <div className="w-full h-[60%] mb-20  flex flex-row">
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
              <p className="ml-4  hover:scale-90"> <FaEye onClick={ handleShowOptions}/></p>
             
              <p className="ml-16  hover:scale-90"> < MdDeleteForever onClick={ handleShowOptions1}/> </p>
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