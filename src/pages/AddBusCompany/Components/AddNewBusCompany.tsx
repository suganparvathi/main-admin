import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import {FaBusAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import * as yup from "yup";
import Input from '../../../components/Input';
import CustomForm from '../../../components/Form';


const members = [
  { name : "OLA Bus(#456TYP)"},
  { name : "Red Bus(#456TYP)"},
  { name : "Uber Bus(#456TYP)"},
 
]  

export const AddNewBusCompany= () => {


const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");



return ( 
   





<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[12%] ">
          <div className="w-full h-full flex items-center ">
            <BackButton/>
          </div>
          <div className="flex w-full font-bold text-3xl justify-center mt-10 items-center">
          <p>Add New Bus Company</p>
          </div>
          <div className="w-full h-full flex items-center">
            <Notifcation/>
          </div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-row bg-quaternary rounded-xl">
            <div className="w-[65%] flex flex-row  h-full">
              
              <div className="w-full ml-10 flex items-center justify-center grid grid-cols-2 h-[95%]">
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Company Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Create Company Password' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Bus Document' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Owner Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Bus Company Document' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Owner Phone Number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Create Company Login ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white flex drop-shadow-2xl justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Owner Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Bus Company Email ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Bus Company Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
               <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Owner Personal ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Owners ID Proof' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
              </div>
             
            </div>
            <div className="w-[35%] h-full flex flex-col">
              <div className="w-full flex justify-evenly items-center  h-[50%]">
                <div className="w-[40%]  flex justify-center items-center h-[80%] bg-white rounded-2xl "><FaBusAlt className="text-8xl"/></div>
                <div className="w-[40%] h-[80%] flex justify-center items-center bg-white rounded-2xl "><FaUserAlt className="text-8xl"/></div>
              </div>
              <div className="w-full  flex flex-col  items-center h-[50%]">

                <div className="w-full h-[45%] flex  justify-center items-center">
                  <button className="w-[35%] h-[40%] rounded-full flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white text-white">Save</button>
                </div>
                <div className="w-full h-[35%]  flex justify-center ">
                  <button className="w-[35%] h-[50%] rounded-full flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white text-white">Cancel</button>
                </div>
              </div>
            </div>
          
             
            </div>
          </div>
        </div>
      </div>
   
    
        
       
        )
      }  