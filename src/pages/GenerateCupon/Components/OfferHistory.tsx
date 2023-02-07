import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import {MdModeEdit} from 'react-icons/md';
import {FaDownload} from 'react-icons/fa'


const members = [
  { name : "Jopay Bus", per: "50% Recharge Offer"},
  { name : "Jopay Bus", per: "15% Recharge Offer"},
  
]  

const Filter=[
  {name:"Time"},
  {name:"Offers"},
  {name:"Date"},
  {name:"Ascending Order"},
  {name:"Descending Order"},
]
export const OfferHistory= () => {

const[state,setState]=useState<string>();
const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");



return ( 
    <div className="relative">
       {showMoreOptions && (
           <>
           <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className='absolute flex mt-14 justify-center  w-full h-full'>
     <div className='bg-black z-20 flex drop-shadow-2xl  flex-col text-xl  rounded-3xl w-[60%] h-[75%]'>
      <div className="w-full h-[30%] flex flex-col text-white  items-center">
      <div className='rounded-full  drop-shadow-xl bg-white justify-center flex items-center w-[7%] mt-4 h-[95%]'>
      <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p>
      </div>
      </div>
      <div className="w-full text-white text-2xl h-[80%] flex flex-col justify-start">
        <p className="p-2 font-light ml-4">Offer Given by :<span className="font-bold ml-4">Jopay</span></p>
        <p className="p-2 font-light ml-4">Cupon Detail :<span className="font-bold ml-4">50% Offer</span></p>
        <p className="p-2 font-light ml-4">Applicable For :<span className="font-bold ml-4">All Users</span></p>
        <p className="p-2 font-light ml-4">Valid From :<span className="font-bold ml-4">8/9/2021 - 15/9/2021</span></p>
        <p className="p-2 font-light ml-4">Offer Created By :<span className="font-bold ml-4">Kate Wilson(Jopay Admin)</span></p>
        <p className="p-2 font-light ml-4">Created Date :<span className="font-bold ml-4">8/9/2021</span></p>
        <p className="p-2 font-light ml-4">Created Time :<span className="font-bold ml-4">4:00AM</span></p>
        <p className="p-2 font-light ml-4">Phone Number<span className="font-bold ml-4">+1-789-098-6754</span></p>
       
        
       
      </div>
      <div className="flex justify-end w-full h-[25%]">
        <p className="w-[7%] h-[95%] mr-4 rounded-full bg-white justify-center items-center flex "><FaDownload className="text-2xl text-quaternary"/></p>
       </div>
      </div></div>
     </>
)}


<div className="w-screen h-screen overflow-hidden flex">
<div className="w-[100%] flex-col overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex w-full h-[5%]">
         
            <BackButton/>
            </div>
          <div className="w-full h-[5%] justify-center flex  text-3xl  font-bold">
           <p className=""> Offer History</p>
          </div>
           
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search by Company/ID"/> </div>
            <div className="w-full h-[10%]  flex justify-center text-white font-bold ">
                <div className="flex flex-row text-white w-[90%] h-full text-xl font-bold">
                  <div className="w-[5%] h-[50%] ml flex justify-end font-extralight text-white  items-center "><FiFilter className="text-white text-3xl ml-4"/></div>
                  {
                    Filter.map((a)=>(
                  <button 
                  onClick={()=>{
                    console.log(a.name,"offerhistory")
                    setState(a.name)

                  }}
                  className={`w-[17%] h-[70%] ml-2 flex justify-center  hover:scale-90 border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl
                  ${a.name===state? "bg-green text-white":"bg-white text-black"}`}>{a.name}</button>
                  ))}
                  </div> 
                  
            </div>
            <div className="w-full h-[45%] overflow-y-auto flex flex-col">
            {members?.map((m:any) => (
                <div className="w-full h-[50%] mb-10 flex flex-row">
                <div className=" w-full  h-[90%] flex flex-start text-xl font-extralight text-white">
                <div className='rounded-full ml-14 mt-4 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                    <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"onClick={handleShowOptions}></p>
                      {/* <FaBus className="text-4xl  text-quaternary"/> */}
                      </div>
                   <div className="ml-2 text-xl mt-4">
                      <p>{m.name}</p>
                      <p>{m.per}</p>
                      <p>Created Time 4:00 Am</p>
                      <p>Date : 8/9/2021</p>
                  </div>
                </div>
                <div className="flex flex-end w-[15%] items-center h-full text-white">
            {/* <div className=" flex flex-row font-bold  text-3xl">
              <p className="ml-4"> <FaEye onClick={ handleShowOptions}/></p>
              <p className="ml-4"><MdModeEdit/></p>
              <p className="ml-4"> < MdDeleteForever onClick={ handleShowOptions}/> </p>
            </div> */}
         </div>
          </div>
          ))}
            </div>
             <div className="w-[97%] h-[20%] flex justify-end items-center">
             <div className='rounded-full drop-shadow-2xl bg-white justify-center flex items-center w-[80px] h-[80px]'><FaDownload className="text-2xl text-quaternary"/></div>
             </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
        
       
        )
      }  