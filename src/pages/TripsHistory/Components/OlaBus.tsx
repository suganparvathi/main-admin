import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import {MdModeEdit} from 'react-icons/md'
import Overlay from "../../../components/Overlay";



const members = [
  { name : "OLA HB - NO : 245678", data : "In Trip"},
  { name : "OLA TB - NO : 245678", data : "In Trip"},
  { name : "OLA TB - NO : 245678", data : "In Trip"},
 
 
]  


export const OlaBus= () => {

  const[state, setState]=useState<string>();

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");

return ( 
    
<div className="relative">
{showMoreOptions && (
           <>
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
  <div className="absolute w-[90%] flex-col   flex items-center h-full">
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
      
        <Link  className=" mt-2 w-[95%] h-[10%] flex z-10 justify-end text-xl" to={"/customer-support"}>
     
      <p className="w-[40%]  h-full bg-white flex justify-center drop-shadow-2xl items-center 
      rounded-full font-bold text-black text-lg">Live Transaction</p>
      </Link>
    
      
        <p className="ml-8 mt-2 text-xl">Total No of Seats :<span className="font-bold ml-2 text-xl">56</span></p>
        <p className="ml-8 mt-6 text-xl">Total No of Passengers :<span className="font-bold ml-2 text-xl">50</span></p>
        <div className=" mt-4 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[50%]">No of Passengers Paid</p>
          <span className="w-[25%] h-10 bg-white ml-[25%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">20</span>
          </div>
          <div className=" mt-4 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[55%]">No of Passengers Not Paid</p>
          <span className="w-[24%] h-10 bg-white ml-[15%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">20</span>
          </div>
          <div className=" mt-4 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[55%]">No of Passengers Select Destination:</p>
          <span className="w-[24%] h-10 bg-white ml-[15%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">20</span>
          </div>
          <div className=" mt-4 w-[95%] flex flex-row text-xl">
          <p className="ml-8 w-[55%]">No of Passengers Not Select Destination:</p>
          <span className="w-[24%] h-10 bg-white ml-[15%] flex justify-center drop-shadow-2xl items-center rounded-full font-bold text-black text-xl">20</span>
          </div>
          <div className=" mt-4 w-[95%] flex flex-row text-xl">
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
       <div className="flex  w-full h-[5%] ">
         
            <BackButton/><p className="text-2xl font-bold">Trip List</p>
         
         
        </div>
                         {/* center div */}
        <div className="w-full h-full mt-2 flex justify-center ">
          <div className="mt-4 w-[95%] h-full bg-quaternary rounded-xl">
            <div className="w-full flex flex-col justify-center items-center">
            <div className='rounded-full drop-shadow-2xl -mt-14 bg-white justify-center flex items-center w-[110px] h-[110px]'>
              <FaBus className="text-4xl text-quaternary"/>
              </div>
            <div className="w-full h-[25%] mt-2 flex  justify-center text-white text-3xl font-bold items-center">OLA Bus Company</div>
            </div>
          <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Bus Company  Name/Bus ID"/> </div>
          <div className="w-full h-[85%] flex flex-col">
            {members?.map((e:any) => (
                <div className="w-full h-[20%]  flex flex-row">
                <div className=" w-full  h-[40%]  flex flex-start text-xl font-extralight text-white">
                  
                <div 
                onClick={()=>  {
                 
                  console.log(e.name,"currenttrips")
                setState(e.name)
                }}
                className='rounded-full ml-14 cursor-pointer drop-shadow-2xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                      <FaBus className="text-2xl   text-quaternary"
                       onClick={ handleShowOptions}
                      />
                </div>
              
                   <div className="ml-4  mt-6">
                      <p className="text-3xl font-bold">{e.name}</p>
                     
                  </div>
                </div>
                <div className="flex flex-end w-[20%]  items-center  h-[40%] text-white">
            <div className=" flex flex-row font-bold text-3xl">
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
    
        
       
        )
      }  