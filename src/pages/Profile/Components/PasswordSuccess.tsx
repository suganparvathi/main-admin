import React from "react";
import {RiDownload2Fill } from "react-icons/ri";
import {FaEye } from "react-icons/fa";
import {TiTick } from "react-icons/ti";
import {AiOutlineClose } from "react-icons/ai";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";



export const PasswordSuccess = () => {

return ( 

    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                        {/* top-div */}
     <div className="flex  w-full h-[5%] ">
        <BackButton/>
    </div>
                       {/* center div */}
        <div className="w-full h-full flex justify-center ">
        <div className="mt-4 w-[90%] h-full flex justify-center items-center bg-quaternary rounded-xl">
            <div className="w-[60%] h-[60%] bg-white text-[40px] font-light flex flex-col justify-center items-center rounded-2xl">
                <p className=""> Successfully Password Changed</p>
                <p className="mt-6">Redirecting To Login Page</p>

                </div>
          
                </div>
            </div>
          </div>
         

        </div>

     
      
        )
      }  