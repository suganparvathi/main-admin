import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import {BiDownload} from "react-icons//bi";





export const  PilotsAndCoPilotsHistory= () => {

return ( 
    
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%] items-center  flex-row ">
         <BackButton/><p className="text-2xl font-bold">User History</p>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex mt-2 justify-center ">
          <div className="mt-4 w-[95%] h-full bg-quaternary rounded-xl">
            <div className="flex flex-col w-full items-center text-white h-[30%]">
                <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="w-[10%] mt-2 rounded-full h-[70%]"/>
                <p className="mt-2 text-5xl font-bold">Harsha</p></div>
                <div className="flex flex-row w-full text-white text-2xl h-full">
                    <div className="w-[60%] flex flex-col h-full">
                        <p className="p-4 ml-10 font-light">Total Number Of Trips :<span className="ml-4 font-bold">15</span></p>
                        <p className="p-4 ml-10 font-light flex flex-row">Trip History :<span className="ml-4 font-bold">Download</span><BiDownload className="ml-10 text-3xl"/></p>
                        <p className="p-4 ml-10 font-light">Currently Working Bus Company :<span className="ml-4 font-bold">OLA</span></p>
                        <p className="p-4 ml-10 font-light">Owner Name :<span className="ml-4 font-bold">James Stewart</span></p>
                        <p className="p-4 ml-10 font-light">ID :<span className="ml-4 font-bold">OLA45C45</span></p>
                        <p className="p-4 ml-10 font-light">Driving License Number :<span className="ml-4 font-bold">17890YT</span></p>
                    </div>
                    <div className="w-[40%] h-full flex flex-col">
                    <p className="p-4 font-light">KYC :<span className="ml-4 font-bold">Verified</span></p>
                    <p className="p-4 font-light">Driving License No :<span className="ml-4 font-bold">17890YT</span></p>
                    <p className="p-4 flex flex-row font-light">Driving License Verification :<span className="ml-4 font-bold">Verified</span><BiDownload className="ml-10 text-3xl"/></p>

                    </div>

                </div>
           
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  