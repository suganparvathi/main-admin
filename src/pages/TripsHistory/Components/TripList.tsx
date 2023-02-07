import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import Overlay from "../../../components/Overlay";
const members = [
  { name : "OLA Bus", data : "Number Of Transaction From OLA Bus 50"},
  { name : "Uber Bus", data : "Number Of Transaction From OLA Bus 30"},
  { name : "Red Bus", data : "Number Of Transaction From OLA Bus 50"},
 
]  



export const TripList = () => {

  const[state, setState]=useState<string>();
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
    <div className="w-[65%] -ml-20 h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-16 items-center">
            <div className='rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[110px] h-[80%]'>
              <FaBus className="text-6xl text-quaternary"/>
              </div>
             
    </div>
    
    </div>
    <div className="w-[70%] rounded-3xl text-white flex flex-row z-20  -ml-20 h-[65%] bg-black">
      <div className="w-[50%]  border-r-2  h-full">
        <p className="ml-8 mt-6 text-xl">Bus Name<span className="font-bold ml-2 text-xl">: OLA HB</span></p>
        <p className="ml-8 mt-6 text-xl">Bus Company Name<span className="font-bold ml-2 text-xl">: OLA Bus Company</span></p>
        <p className="ml-8 mt-6 text-xl">Bus Company ID<span className="font-bold ml-2 text-xl">: OLA-9807</span></p>
        <p className="ml-8 mt-6 text-xl">Bus Number<span className="font-bold ml-2 text-xl">: 245678</span></p>
        <p className="ml-8 mt-6 text-xl">License Number<span className="font-bold ml-2 text-xl">: OLAHB-270499</span></p>
        <p className="ml-8 mt-6 text-xl">Trip Type<span className="font-bold ml-2 text-xl">: Casual Trip</span></p>
        <p className="ml-8 mt-6 text-xl">Bus Type<span className="font-bold ml-2 text-xl">: Non A/c</span></p>
        <p className="ml-8 mt-6 text-xl">Sear Type<span className="font-bold ml-2 text-xl">: Normal</span></p>
      </div>
      <div className="w-[50%]  h-full">
      <Link to="/current-trips">
      <div className=" mt-2 w-[95%] h-[10%] flex justify-end text-xl">
      <button className="w-[40%]  h-full bg-white flex justify-center drop-shadow-2xl items-center 
      rounded-full font-bold text-black text-lg">Trip Completed</button>
      </div>
      </Link>
        <p className="ml-8 mt-2 text-xl">Total No of Seats :<span className="font-bold ml-2 text-xl">56</span></p>
        <p className="ml-8 mt-6 text-xl">Total No of Passengers :<span className="font-bold ml-2 text-xl">50</span></p>
        <div className=" mt-4 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[50%]">No of Passengers Paid</p>
          <span className="w-[25%] h-10 bg-white ml-[25%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">50</span>
          </div>
          <div className=" mt-4 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[55%]">No of Passengers Not Paid</p>
          <span className="w-[24%] h-10 bg-white ml-[15%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">0</span>
          </div>
          
          <div className=" mt-16 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[50%]">Total Amount</p>
          <span className="w-[25%] h-10 bg-white ml-[25%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">$1000</span>
          </div>
      </div>
    </div>
  </div>
  </>


)}




<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          
            <BackButton/><p className="text-2xl font-bold">Trips History</p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full flex  justify-center  bg-quaternary rounded-3xl">
            <div className="w-[97%] mt-6 h-[85%] bg-white rounded-3xl">
              <div className="flex flex-col">
                <p className="font-bold text-xl ml-6 mt-6 pb-8 text-black">August 1 -2021</p>
                <p className="font-light text-xl ml-6 text-black">Total Number Of Transactions From How Many Buses<span className="ml-2 font-bold">: 1000 Transactions From 5 Buses</span></p>
              </div>
            <div className="flex items-center border-2  w-[85%] border-black h-[50px] my-6 mx-3 rounded-full px-3">
                   
                    <input
                    type="text"
                    placeholder="Search By Bus Company Name/Bus ID"
                    className="bg-transparent border-none text-2xl bg-transparent focus:outline-none focus:line focus:border-border-blue-500 py-2 px-2 text-black outline-none w-full"
                    />{" "}
                     <BsSearch className="text-[25px]  text-black"/>
                </div>
          <div className="w-full h-[60%] flex flex-col overflow-y-auto ">
            {members?.map((e:any) => (
                <div className="w-full h-[60%] mb-14 flex flex-row">
                <div className=" w-full  h-[50%]  flex flex-start text-xl font-extralight text-black">
                  
                <div 
                onClick={()=>  {
                 
                  console.log(e.name,"currenttrips")
                setState(e.name)
                }}
                className='rounded-full ml-14 cursor-pointer hover:scale-90 drop-shadow-2xl bg-quaternary justify-center flex items-center w-[70px] h-[70px]'>
                      <FaBus className="text-2xl   text-white"
                        onClick={ handleShowOptions}
                      />
                </div>
              
                   <div className="ml-4  mt-4">
                      <p className="text-2xl font-bold">{e.name}</p>
                     
                  </div>
                </div>
                <div className="flex flex-end w-[65%]  items-center  h-[40%] text-black">
            <div className=" flex flex-row font-bold text-2xl">
              <p className="ml-4">{e.data}</p>
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
    </div>
    
        
       
        )
      }  