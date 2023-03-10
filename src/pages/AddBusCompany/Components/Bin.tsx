import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import {TbArrowsRandom} from 'react-icons/tb';
import { BinOlaBus } from "./BinOlaBus";


const members = [
  { name : "OLA Bus(#456TYP)"},
  { name : "Red Bus(#456TYP)"},
  { name : "Uber Bus(#456TYP)"},
 
]  

const Filter=[
  {name:"Bus Name"},
  {name:"Bus ID"},
  {name:"Date"},
  {name:"Month"},

]
export const Bin = () => {

  const [state, setState]=useState<string>();
const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");

   const [showMoreOptions1, setShowMoreOptions1] = useState(false);
  const handleShowOptions1 = () => {
    setShowMoreOptions1(!showMoreOptions1);
    }
    const [showMoreOptions2, setShowMoreOptions2] = useState(false);
  const handleShowOptions2 = () => {
    setShowMoreOptions2(!showMoreOptions2);
    }


return ( 
    <div className="relative">
       {showMoreOptions && (
           <>
           <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className='absolute flex mt-14 justify-center items-center w-full h-[80%]'>
     <div className='bg-black z-20 flex drop-shadow-2xl  flex-col text-xl  rounded-3xl w-[70%] h-[90%]'>
      <div className="w-full h-[40%] flex flex-col text-white justify-center items-center">
      <div className='rounded-full  drop-shadow-xl bg-white justify-center flex items-center w-[8%] h-[45%]'>
      <FaBus className="text-4xl text-quaternary"/>
      </div>
      <p className="font-bold text-4xl mt-2">OLA Bus</p>
      </div>
      <div className="w-full text-white font-extralight text-4xl h-[25%] flex flex-col justify-center items-center">
        <p className="h-20">Are You Sure You Want To permanently Delete</p>
        <p className="mr-4 h-10">If You Delete This You Can't Able To Restore This Data?</p>
      </div>
      <div className="w-full flex flex-row justify-evenly items-center text-4xl font-bold text-white h-[20%]">
        
        <p className=" hover:scale-90"><Link to="/deleted-successfully">Yes</Link></p>
        <p className=" hover:scale-90">No</p>

      </div></div></div>
     </>
)}
{showMoreOptions2 && (
           <>
           <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions2} />
         </div>
     <div className='absolute flex  justify-center items-center w-full h-full'>
     <BinOlaBus/>
    </div>
     </>)}

       {showMoreOptions1 && (
           <>
           <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions1} />
         </div>
    <div className='absolute flex mt-14 justify-center items-center w-full h-full'>
     <div className='bg-black z-20 flex drop-shadow-2xl  flex-col text-xl  rounded-3xl w-[60%] h-[65%]'>
      <div className="w-full h-[40%] flex flex-col text-white justify-center items-center">
      <div className='rounded-full  drop-shadow-xl bg-white justify-center flex items-center w-[12%] h-[60%]'>
      <FaBus className="text-4xl text-quaternary"/>
      </div>
      <p className="font-bold text-4xl mt-2">OLA Bus</p>
      </div>
      <div className="w-full text-white font-light text-4xl h-[25%] flex justify-center items-center">
        Are You Sure You Want To Restore
      </div>
      <div className="w-full flex flex-row justify-evenly items-center text-4xl font-bold text-white h-[20%]">
        
        <p className=" hover:scale-90"><Link to="/deleted-successfully">Yes</Link></p>
        <p className=" hover:scale-90">No</p>

      </div></div></div>
     </>
)}




<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[12%] ">
          <BackButton/>
          <div className="text-black text-4xl flex justify-center items-center w-[90%] h-full mt-6 font-bold">Bin</div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search your Bus Company/Bus ID/Number"/> </div>
            <div className="w-full h-[10%]  flex justify-center text-white font-bold ">
                <div className="flex flex-row text-black w-full h-full text-2xl font-bold">
                  <div className="w-[10%] h-[50%] ml-2 flex justify-end font-extralight text-white  items-center ">Filter<FiFilter className="text-white ml-4"/></div>
                  {
                    Filter.map((data) =>(
                  <button 
                  onClick={() =>{
                    console.log(data.name,"appuser")
                    setState(data.name)
                }}
                  className={`w-[13%] h-[60%] ml-2 flex justify-center  hover:scale-90 drop-shadow-2xl font-extralight items-center rounded-3xl bg-white  ${data.name ===state? "bg-green text-white" : "bg-white text-black"} `}>{data.name}</button>
                  )) 
                }
                  </div> 
            </div>
            <div className="w-full h-[50%] overflow-y-auto flex flex-col">
            {members.map(({name}) => (
                <div className="w-full h-[50%] mb-10  flex flex-row">
                <div className=" w-full mt-6 h-full flex flex-start text-xl font-bold text-white">
                <div className='rounded-full ml-14 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                      <FaBus className="text-2xl text-quaternary"/>
                      </div>
                   <div className="ml-2 text-2xl mt-4">
                      <p>{name}</p>
                  </div>
                </div>
                <div className="flex flex-end w-[10%] items-center h-full text-white">
            <div className=" flex flex-row font-bold  text-3xl">
              <p className="mr-2  hover:scale-90"><TbArrowsRandom onClick={ handleShowOptions1}/></p>
              <p className="mr-2  hover:scale-90"> < MdDeleteForever onClick={ handleShowOptions} /> </p>
              <p className="mr-2  hover:scale-90"> <FaEye onClick={ handleShowOptions2} /> </p>
             </div>
         </div>
          </div>
          ))}
             </div>
          </div>
        </div>
      </div>
    </div>
    </div>
          )
      }  