import React, { useCallback, useState } from "react";
import {ImDownload3} from "react-icons/im";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import {MdModeEdit} from 'react-icons/md'


const members = [
  { name : "OLA Bus"},
  { name : "Red Bus"},
  { name : "Uber Bus"},
 
]  

export const CuponHistory = () => {


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
          <div className="w-full h-full ">
            <BackButton/>
          </div>
          <div className="w-[40%] text-3xl mt-8 font-bold">
            Cupon History
          </div>
          <div className="w-full flex items-center">
          
          </div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search by Company/ID"/> </div>
            <div className="w-full h-[10%]  flex justify-center text-white font-bold ">
                <div className="flex flex-row text-white w-full h-full text-xl font-bold">
                  <div className="w-[5%] h-[50%] ml flex justify-end font-extralight text-white  items-center "><FiFilter className="text-white text-3xl ml-4"/></div>
                  <button className="w-[10%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">Company</button>
                  <button className="w-[10%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">ID</button>
                  <button className="w-[10%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">Time</button>
                  <button className="w-[10%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">Offers</button>
                  <button className="w-[10%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">Date</button>
                  <button className="w-[17%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">Ascending Order</button>
                  <button className="w-[17%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl">Descending Order</button>
                </div> 
                  
            </div>
            <div className="w-full h-full flex flex-col">
            {members.map(({name}) => (
                <div className="w-full h-[20%]  flex flex-row">
                <div className=" w-full  h-[90%] flex flex-start text-xl font-extralight text-white">
                <div className='rounded-full ml-14 mt-4 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                      <FaBus className="text-4xl  text-quaternary"/>
                      </div>
                   <div className="ml-2 text-xl mt-4">
                      <p>{name}</p>
                      <p>Cash Back Offer</p>
                      <p>Created Time 4:00 Am</p>
                      <p>Date : 8/9/2021</p>
                  </div>
                  
                </div>
          </div>
          ))}
            <div className="w-full h-full flex -mt-20 -ml-10 justify-end ">
              <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-white">
                <ImDownload3 className="text-quaternary text-3xl"/>

              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  