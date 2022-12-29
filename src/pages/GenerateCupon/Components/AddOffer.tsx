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




export const AddOffer= () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");


  return (
    
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[10%] ">
          <div className="w-full h-full  ">
            <BackButton />
          </div>
          <div className='rounded-full mt-8  drop-shadow-2xl bg-white justify-center flex items-center w-[17%] h-[120px]'>
               
                <p className="bg-logo bg-no-repeat bg-center w-12 h-14 text-3xl"></p>
            </div>
        <div className="w-full ">
          
          </div>
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col  bg-quaternary rounded-xl">
            <div className="w-full h-[75%] flex-col flex justify-center items-center">
                <div className="w-[60%] flex  items-center h-[45%]">
                    <div className="w-[45%]  h-[35%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                    <div className='flex items-center'>
                     
                     <input 
                     type="text"
                     name="StaffId"
                     placeholder='Enter Offer Details' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>
                    <div className="w-[30%] ml-20 h-[35%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <input 
                     type="text"
                     name="StaffId"
                     placeholder='Vaild From' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>
                </div>
                <div className="w-[60%] flex  h-[25%]">

                <div className="w-[45%]  h-[55%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <input 
                     type="text"
                     name="StaffId"
                     placeholder='Enter Offer Type' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>
                    <div className="w-[30%] ml-20 h-[55%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <input 
                     type="text"
                     name="StaffId"
                     placeholder='Valid To' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>

                    

                </div>
                <div className="w-[60%] h-[20%] flex justify-center">
                <div className="w-[55%]  h-[70%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <input 
                     type="text"
                     name="StaffId"
                     placeholder='Add Banner Image' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
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
