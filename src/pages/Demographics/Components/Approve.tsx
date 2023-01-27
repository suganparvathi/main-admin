import React from "react";
import {RiDownload2Fill } from "react-icons/ri";
import {FaEye } from "react-icons/fa";
import {TiTick } from "react-icons/ti";
import {AiOutlineClose } from "react-icons/ai";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";



export const Approve = () => {

return ( 

    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
                        {/* top-div */}
     <div className="flex  w-full h-[12%] ">
        <div className="w-full h-full flex items-center ">
          <BackButton/>
        </div>
        {/* <div className="w-full h-full flex items-center">
          <Notifcation/>
        </div> */}
      </div>
                       {/* center div */}
      <div className="w-full h-full flex justify-center ">
        <div className="mt-4 w-[90%] h-full flex justify-center items-center bg-quaternary rounded-xl">
            <div className="w-[60%] h-[50%] bg-white flex justify-center items-center rounded-2xl">
                <p className="text-[50px] font-bold">KYC Verified Successfully</p>

                </div>
          
                </div>
            </div>
          </div>
         

        </div>

     
      
        )
      }  