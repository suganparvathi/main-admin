import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import {BiDownload} from "react-icons//bi";





export const ViewUserHistory = () => {

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
                        <p className="p-4 ml-10 font-light">Total Time Bus Bookings :<span className="ml-4 font-bold">15</span></p>
                        <p className="p-4 ml-10 font-light flex flex-row">Trip History :<span className="ml-4 font-bold">Download</span><BiDownload className="ml-10 text-3xl"/></p>
                        <p className="p-4 ml-10 font-light">Cancelled Ticket :<span className="ml-4 font-bold">3</span></p>
                        <p className="p-4 ml-10 font-light">Refunds :<span className="ml-4 font-bold">100%</span></p>
                        <p className="p-4 ml-10 font-light">Refunds Status :<span className="ml-4 font-bold">Completed</span></p>
                    </div>
                    <div className="w-[40%] h-full flex flex-col">
                    <p className="p-4 font-light">Jopay Id :<span className="ml-4 font-bold">568BTR67</span></p>
                    <p className="p-4 font-light">KYC :<span className="ml-4 font-bold">Verified</span></p>
                    <p className="p-4 font-light">Phone Number :<span className="ml-4 font-bold">+1-789-098-4568</span></p>
                    <p className="p-4 font-light">Ecpenditure :<span className="ml-4 font-bold">$1000</span></p>

                    </div>

                </div>
           
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  