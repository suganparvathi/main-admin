import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { Link } from "react-router-dom";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";





export const ViewImages = () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[10%] ">
          
            <BackButton/>
          </div>
          
        
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
          <div className="w-full h-[10%] flex justify-center items-center">
                <p className="text-2xl font-bold  text-white">View Images</p>
        </div>
        <div className="w-full h-full flex flex-col">
            
                <div className="w-full mt-4 h-[50%] flex justify-center flex-row">
                    <div className=" ml-8 w-[20%] flex justify-center items-center h-full">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.jqX-l50d9OlNkpxTLnvj4gHaLE&pid=Api&P=0 " className="w-[80%]"/>
                    </div>
                    <div className=" ml-8 w-[20%] flex justify-center items-center h-full">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.PaaHHCvVRdqzj0I5nLxM6wHaLG&pid=Api&P=0 " className="w-[80%]"/>
                    </div>
                    <div className=" ml-8 w-[20%] flex justify-center items-center h-full">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.uKqtpA4NUsnJXTRc_PDx-AHaLG&pid=Api&P=0 " className="w-[80%]"/>
                    </div>
                    <div className=" ml-8 w-[20%] flex justify-center items-center h-full">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.i2fVYZoJxj8ywGuG2cc6ygHaLG&pid=Api&P=0 " className="w-[80%]"/>
                    </div>
               
              
          </div>
          
             <div className="w-full h-[30%]">
             <div className="w-full  h-[50%] flex justify-center flex-row">
                    <div className=" ml-8 w-[20%] flex justify-center flex-col items-center h-full">
                      <p className="text-2xl font-bold text-white">New Year Gift Card</p>
                      <div className="flex mt-2 text-white flex-row">
                        <FaEye className="text-2xl"/>
                        <MdDeleteForever className="text-2xl ml-2"/>
                        </div>
                    </div>
                    <div className=" ml-8 w-[20%] flex justify-center flex-col items-center h-full">
                    <p className="text-2xl font-bold text-white">Christmas Gift Card</p>
                    <div className="flex mt-2 text-white flex-row">
                    <FaEye className="text-2xl"/>
                    <MdDeleteForever className="text-2xl"/>
                    </div>
                    </div>
                    <div className=" ml-8 w-[20%] flex justify-center flex-col items-center h-full">
                    <p className="text-2xl font-bold text-white">Halloween Gift Card</p>
                    <div className="flex mt-2 text-white flex-row">
                    <FaEye className="text-2xl"/>
                    <MdDeleteForever className="text-2xl"/>
                    </div>
                    </div>
                    <div className=" ml-8 w-[20%] flex justify-center flex-col items-center h-full">
                    <p className="text-2xl font-bold text-white">Black Friday Gift Card</p>
                      <div className="flex mt-2 text-white flex-row">
                      <FaEye className="text-2xl"/>
                      <MdDeleteForever className="text-2xl"/>
                      </div>
                    </div>
               
              
          </div>
             </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  