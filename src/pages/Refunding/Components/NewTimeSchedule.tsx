import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import {FaAngleDown} from 'react-icons/fa';
import {FaPlus} from 'react-icons/fa'
import Overlay from "../../../components/Overlay";




export const NewTimeSchedule = () => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"Timeschedule");

   
  const Time = [
    {copilot: "AM"},
    {copilot: "PM"},
   
]
const Amount = [
  {copilot: "*****"},
  {copilot: "**"},
 
]

return ( 
  <div className='relative'>
  {showMoreOptions && (
       <>
       <div className="absolute z-10 ">
      <Overlay onClick={handleShowOptions} />
     </div>
    <div className='absolute flex justify-center items-center w-full h-full'>
      <div className='bg-white z-20 flex drop-shadow-2xl flex-col text-xl justify-center items-center w-[65%] h-[18%]'>
        <p className=''><Link to="/direct-support">Direct Support</Link></p>
        <p className='mt-10'><Link to="/chat-help">Help</Link></p>

      </div>

    </div>
    </>


)}

<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
        <div className="flex  w-full h-[5%] items-center  flex-row ">
         <BackButton/><p className="text-2xl font-bold">Refunding</p>
        </div>
                         {/* center div */}
        <div className="w-full h-full mt-2 flex justify-center ">
          <div className="mt-4 w-[95%] h-full bg-quaternary flex items-center flex-col rounded-xl">
            <div className=" w-full flex justify-center items-center text-6xl text-white font-light h-[15%]">New Time Shedule</div>
            <div className="w-full h-[20%] flex flex-row justify-center items-center">
                <div className="h-full flex justify-center text-2xl font-light drop-shadow-2xl text-white items-center w-[25%]">Time Before Depature</div>
                <div className="h-full w-[25%] flex justify-center text-white drop-shadow-2xl text-2xl font-light items-center">Refundable Amount</div>
            </div>
            <div className="w-full h-[15%] flex flex-row justify-center">
            <div className="h-[50%] w-[20%] flex justify-end  rounded-full bg-white text-black items-center pr-2 text-2xl font-light ">
              {/* <FaAngleDown /> */}
              <select name="Driver" id="clicking" className='w-[30%] h-6 
                            text-textblue  focus:outline-none'>
                                <option ></option>
                                {Time.map(({ copilot}) => (
                                    <option className="" value={copilot}>{copilot}</option>
                                ))}
                            </select>
              </div>
            <div className="h-[50%] w-[20%] flex ml-20 justify-end rounded-full items-center pr-2 bg-white text-black text-2xl font-light ">
            <select name="Driver" id="clicking" className='w-[30%] h-6 
                            text-textblue  focus:outline-none'>
                                <option ></option>
                                {Amount.map(({ copilot}) => (
                                    <option className="" value={copilot}>{copilot}</option>
                                ))}
                            </select>
            </div>
            </div>
            <div className="flex justify-center w-full h-[14%]">
                <button className="w-[12%] h-[75%] rounded-lg  hover:scale-90 text-white text-3xl drop-shadow-2xl font-bold flex justify-center items-center bg-green">Save</button>
            </div>
           <div className="w-full flex justify-center h-[30%] mt-6">
            <div className="w-[10%] h-[70%] rounded-xl bg-white drop-shadow-2xl flex justify-center items-center"><FaPlus className="text-quaternary text-7xl"/></div>
           </div>
        
          </div>
        </div>
      </div>
    </div>
    </div>
    
        
       
        )
      }  