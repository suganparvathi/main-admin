import React from "react";
import {RiDownload2Fill } from "react-icons/ri";
import {FaEye } from "react-icons/fa";
import {TiTick } from "react-icons/ti";
import {AiOutlineClose } from "react-icons/ai";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { Link } from 'react-router-dom';



export const pendingrequest = () => {

return ( 

    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                        {/* top-div */}
     <div className="flex  w-full h-[5%] items-center ">
       <BackButton/>
    </div>
                       {/* center div */}
      <div className="w-full h-full flex justify-center ">
        <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
          <div className="w-full h-[10%]  flex justify-center items-center text-white font-bold text-3xl">KYC Verification</div>
          <div className="w-full h-[20%]  flex  justify-center ">
          <div> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[90px] h-[90px]"/></div>
          </div>
          <div className="w-full h-full  flex   text-white">
            <div className="flex flex-start pl-4  h-full text-[27px] w-[60%]">
                <div className="w-full h-full flex-col  border-r-4 border-white">
                <p className="font-thin">Name : <span className="font-bold ">Annie</span> </p>
                <p className="mt-8 font-thin">Mobile Number : <span className="font-bold">+1-905-678-9872</span> </p>
                <p className="mt-8 font-thin">Email Id : <span className="font-bold">Info@Jopay.com</span> </p>
                <div className="mt-8  flex font-thin flex-row">
                     <p>Identification Details : </p>
                    <p className="font-bold ml-2">Driving License.pdf</p> 
                    <p className="ml-6 mt-2"><RiDownload2Fill/></p> 
                    <p className="ml-6 mt-2"><FaEye/></p> 
                </div>
                <p className="mt-8 font-thin">Address : <span className="font-bold">51,Floscent Street, Paris-34</span> </p>
                </div>
            </div>
            <div className="flex justify-center items-center  h-full w-[40%]">
                <div className="w-[60%] h-[75%] flex text-white flex-col items-center">
                    <p className="text-3xl font-bold"> Pending Request</p>
                    {/* <div className="w-full h-[50%] justify-center items-center"> */}
                    <Link to="/approve" className="w-[60%] mt-8  hover:scale-90 h-[14%] text-2xl font-bold flex items-center pl-3  rounded-2xl bg-gn">
                       <p className="flex justify-start w-full h-full items-center">Approve</p> 
                        <p className="flex justify-end w-full -ml-2 h-full justify-end items-center text-5xl "><TiTick/></p>
                       </Link>
                   
                   
                    {/* </div> */}
                       <Link to="/reject" className="w-[60%] mt-8  hover:scale-90 h-[14%] text-2xl font-bold flex items-center  pl-3 rounded-2xl bg-redText">
                        <p className="flex flex-start w-full h-full items-center">Reject </p>
                        <p className="flex flex-end w-full -ml-2 h-full justify-end items-center  text-5xl"> <AiOutlineClose/> </p>
                        </Link>
                    {/* </div> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
        )
      }  