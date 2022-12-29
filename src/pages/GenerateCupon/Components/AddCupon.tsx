import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import Entervalue from "../../../components/Entervalue";
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import { Form } from "formik";
import * as yup from "yup";
import Overlay from "../../../components/Overlay";
import { FaBus } from "react-icons/fa";




export const AddCupon= () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");


  return (
    
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[10%]">
          <div className="w-full h-full  flex items-center ">
            <BackButton />
          </div>
          <div className='rounded-full mt-8 drop-shadow-xl bg-white justify-center flex items-center w-[20%] h-[140px]'>
                <FaBus className="text-7xl text-quaternary"/>
            </div>
        <div className="w-full h-full flex items-center">
           
          </div>
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="flex justify-center -mt-14 h-[15%]  w-full">
          
            </div>
            <div className="w-full flex flex-row h-[70%]">
                <div className="w-[50%] h-full flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center items-center h-[30%]">
                    <div className="w-[75%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Cupon Type' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                    </div>
                    <div className="w-full flex justify-center items-center h-[30%]">
                    <div className="w-[75%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Applicable For' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                    </div>
                    <div className="w-full flex justify-center items-center h-[30%]">
                    <div className="w-[75%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Add Banner Image' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                    </div>
                </div>
                <div className="w-[50%] flex flex-col items-center justify-center h-[70%]">
                    <div className="w-full h-[50%] flex justify-center flex-row items-center">
                    <div className="w-[40%] h-[50%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Valid From' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>


                <div className="w-[40%] h-[50%] ml-6 bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Valid to' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>




                    </div>
                    <div className="w-full h-[50%] flex justify-center items-center">
                    <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <div className='flex items-center '>
                     
                      <input 
                      type="text"
                      name="StaffId"
                      placeholder='Offer Given by Which Company' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-white border-none" /> {" "}
                  </div>
                </div>
                       
                    </div>
                </div>
                

            </div>
            <div className="w-full h-[20%] flex justify-center">
                <div className="w-[20%] text-3xl drop-shadow-2xl font-bold rounded-2xl h-[60%] flex justify-center items-center bg-white text-black">
                    <button>Generate Cupon</button></div>

            </div>
            </div>
        </div>
      </div>
    </div>
   
  );
};
