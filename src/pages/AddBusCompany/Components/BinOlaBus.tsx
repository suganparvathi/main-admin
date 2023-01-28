import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import { FaBus } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";



export const BinOlaBus = () => {


  return (
   
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center overflow-hidden h-[100%] flex">
      <div className="absolute w-[90%] flex-col   flex items-center h-full">
    <div className="w-[65%] -ml-20 h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-20 items-center">
            <div className='rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[90px] h-[60%]'>
              <FaBus className="text-4xl text-quaternary"/>
              </div>
              </div>
              </div>
    
    <div className="w-[80%] rounded-3xl text-white flex flex-col z-20  -ml-20 h-[70%] bg-black">
        <div className="w-full h-[20%] flex  text-2xl justify-center items-center font-bold">
            OLA BUS
        </div>
        <div className="flex flex-row">
      <div className="w-[50%]  border-r-2 justify-center items-center h-[90%]">
        <p className="ml-8 mt-4 text-xl">Company Name<span className="font-bold ml-2 text-xl">: OLA Bus</span></p>
        <p className="ml-8 mt-4 text-xl">Total Number Of Buses<span className="font-bold ml-2 text-xl">: 10</span></p>
        <p className="ml-8 mt-4 flex flex-row text-xl">Bus Document<span className="font-bold ml-2 text-xl">: Submitted</span><p className="ml-20 text-2xl"><HiOutlineDownload/></p></p>
        <p className="ml-8 mt-4 flex flex-row text-xl">Bus Company Document<span className="font-bold ml-2 text-xl">: Submitted</span><p className="ml-20 text-2xl"><HiOutlineDownload/></p></p>
        <p className="ml-8 mt-4 text-xl">Company Login ID<span className="font-bold ml-2 text-xl">: TYUOLA123</span></p>
        <p className="ml-8 mt-4 text-xl">Company Password<span className="font-bold ml-2 text-xl">: HAAADSSNM</span></p>
        <p className="ml-8 mt-4 text-xl">Owner Name<span className="font-bold ml-2 text-xl">: James Stewwart</span></p>
        <p className="ml-8 mt-4 text-xl">Phone Number<span className="font-bold ml-2 text-xl">: +1-675-904-8904</span></p>
      </div>
      <div className="w-[50%]  h-[30%]">

        <p className="ml-8 mt-4 text-xl">Owner Address <span className="font-bold ml-2 text-xl">5,Florance Street,CA-1,USA.</span></p>
        <p className="ml-8 mt-4 text-xl">Bus Company Address<span className="font-bold ml-2 text-xl">: 8,Florance Street,USA</span></p>
        <p className="ml-8 mt-4 text-xl">Profile Verified By<span className="font-bold ml-2 text-xl">: Jopay Admin (You)</span></p>
        <p className="ml-8 mt-4 text-xl">Posted By<span className="font-bold ml-2 text-xl">: Jopay Admin (You)</span></p>
        <p className="ml-8 mt-4 text-xl">Created Date<span className="font-bold ml-2 text-xl">: 4th August 2021 </span></p>
        <p className="ml-8 mt-4  text-xl">Created Time<span className="font-bold ml-2 text-xl">: 6:00 Am</span></p>
        <p className="ml-8 mt-4 text-xl">Bus Company Mail ID<span className="font-bold ml-2 text-xl">: Info@OlaBus.com</span></p>
        <p className="ml-8 mt-4 text-xl">Bus Company Owner ID<span className="font-bold ml-2 text-xl">: Stewart97@gmail.com</span></p>
          <div className=" mt-2 w-[95%] flex flex-row justify-end text-xl">
          <p className="mr-10 border-b-2">Download History</p>
          <p className="text-2xl"><HiOutlineDownload/></p>
          </div>
      </div>
      </div> </div> </div>  </div>  </div>
  );
};
