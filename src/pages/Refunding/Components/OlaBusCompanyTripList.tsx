import React, { useCallback, useState,useEffect } from "react";
import BackButton from "../../../components/BackButton";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import {FaEye} from 'react-icons/fa';
import Countdown from "../../../components/Countdown";
import Overlay from "../../../components/Overlay";



const members = [
  { name : "OLA Bus (OLA-8796)", data : "2 Refunds From 1 Bus"},
  { name : "OLA Bus (OLA-4567)", data : "1 Refunds From 1 Bus"},
 
] 

const Trip=[
  {date:" 28th Aug - 30th Aug" },
  {date:" 6th Aug - 8th Sept" },
  {date:" 10th Aug - 10th Sept" },
]
const No=[
  {name:" Total No of Passengers : ", no:"50" },
  {name:"No. Of People Paid Amount: ", no:"50"  },
  {name:" No.Of Peaple Cancelld Ticket : ", no:"2"  },
]

export const OlaBusCompanyTripList = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
         setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }

return ( 
   
  <div className="relative">  
  {showMoreOptions && (
           <>
           <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div>
  <div className="absolute w-[90%] flex-col  flex items-center h-full">
    
    <div className="w-[70%] rounded-3xl text-white flex flex-row z-20 items-center   -ml-20 h-[75%] bg-black">
      <div className="w-[50%]  border-r-2  h-[70%]">
       
        <p className="ml-8 mt-2 text-xl">Status :<span className="font-bold ml-2 text-xl">Trip Starts At 28th August 2021</span></p>
        <p className="ml-8 mt-2 text-xl">Passenger Name :<span className="font-bold ml-2 text-xl">Abby</span></p>
        <p className="ml-8 mt-2 text-xl">Passenger Mob :<span className="font-bold ml-2 text-xl">+1-879-456-7890</span></p>
        <p className="ml-8 mt-2 text-xl">Ticket ID :<span className="font-bold ml-2 text-xl">#OLA_9078</span></p>
        <p className="ml-8 mt-2 text-xl">Seat(S) Booked : 2<span className="font-bold ml-2 text-xl">2</span></p>
        <p className="ml-8 mt-2 text-xl">Seat(s) ID : <span className="font-bold ml-2 text-xl">A1,A2</span></p>
        <p className="ml-8 mt-2 text-xl">Passenger(S) :<span className="font-bold ml-2 text-xl">2</span></p>
        <p className="ml-8 mt-2 text-xl">From - To :<span className="font-bold ml-2 text-xl">North Road to West Road</span></p>
        <p className="ml-8 mt-2 text-xl">From - To :<span className="font-bold ml-2 text-xl">28th Aug - 30th Aug</span></p>
        <p className="ml-8 mt-2 text-xl">Status :<span className="font-bold ml-2 text-xl">Paid</span></p>
        <p className="ml-8 mt-2 text-xl">Ticket Status :<span className="font-bold ml-2 text-xl">Cancelled</span></p>
      </div>
      <div className="w-[50%]  h-full">
     
      <div className=" mt-2 w-[95%] h-[10%] flex justify-start font-bold -ml-14 text-5xl">
     <p>Details</p>
      </div>
      
        <p className="ml-8 mt-10 text-xl">Number Of Ticket Cancelled :<span className="font-bold ml-2 text-xl">2</span></p>
        <p className="ml-8 mt-6 text-xl">Cancelled Before :<span className="font-bold ml-2 text-xl">2 Days</span></p>
        <p className="ml-8 mt-6 text-xl">Cancelled Time :<span className="font-bold ml-2 text-xl">4:00Am</span></p>
        <p className="ml-8 mt-6 text-xl">Cancelled Date :<span className="font-bold ml-2 text-xl">26th August 2021</span></p>
        <p className="ml-8 mt-6 text-xl">Amount Refund :<span className="font-bold ml-2 text-xl">100%</span></p>
        
      </div>
    </div>
  </div>
  </>


)}


<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%]">
          
            <BackButton/><p className="text-2xl font-bold">Trip List</p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full  bg-quaternary rounded-xl">
            <div className="w-full h-[15%] flex justify-center text-white text-5xl font-light items-center">OLa Bus Company</div>
            <div className="flex flex-row w-full h-[85%]">
            <div className="w-[65%] h-full">
                <div className=" flex   flex-row h-[35%]">
                 
                  <div className="w-[60%]  h-full flex flex-col">
                  <div className="w-[90%] flex items-center drop-shadow-2xl h-[40%] ml-6 rounded-3xl bg-white">
                    <p className="flex text-3xl ml-4 font-bold w-[50%]">{date}</p>
                    <p className="flex justify-center text-3xl font-bold w-[50%]">  {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}</p>
                  </div>
                  
                  <div className="w-[90%] ml-6 h-[40%] mt-4 rounded-3xl text-5xl flex drop-shadow-2xl justify-center font-bold items-center text-ww bg-black ">
                  <Countdown hours={1} minutes={20} seconds={40}/><span className="ml-2">AM/PM</span>
                  </div>
                  </div>
                  <div className="flex  w-[40%] h-full text-xl flex-col">
                  <div className="h-[40%] flex text-white font-bold items-center">Trip Staring Time And Date</div>
                  <div className="h-[40%] flex text-white font-bold  items-center">Countdown</div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 h-[35%] w-[50%]">
                {
                No.map((a)=>(
                  <p className="ml-6  w-full  text-white text-xl font-light 
                  h-full  ">{a.name} <span className="font-bold">{a.no}</span></p>
                 
                  ))}
                  <div className="ml-6 text-white text-xl flex flex-row font-light">Refunds : <span className="font-bold ml-2">2</span><span className="text-2xl ml-10"><FaEye   onClick={ handleShowOptions}/></span></div>
                </div>
            </div>
          <div className="w-[35%] mr-6 rounded-t-[50px] flex-col flex  bg-white h-full">
            <div className="w-full h-[10%] font-bold text-xl text-black flex justify-center items-center">Trip List</div>
              {
                Trip.map((a)=>(
                  <div className="w-full h-[20%]  flex-col flex justify-center items-center">
            <div className="w-[90%] h-[60%]  flex flex-row font-light text-xl text-black flex justify-start items-center">
              From - To :<span className="font-bold ml-2 ">North Road</span> <span className="font-light w-[6%] ml-2">To</span>
              <span className="font-bold">West Road</span>
             </div>
             <div className="w-[90%] h-[60%]  border-b-2 border-black  flex flex-row font-light text-xl text-black flex justify-start">From - To :
             <span className="font-bold ml-2">{a.date}</span></div>
              </div>
              
              ))}
            
          </div>

            </div>
         </div>
        </div>
      </div>
    </div>
    </div>
          
       
        )
      }  