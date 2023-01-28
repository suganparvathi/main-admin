import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import { ToggleButton } from "../../../components/ToggleButton";




export const TaskDedication = () => {
const [color, setcolor] = useState (false);
const colorButton = () =>setcolor(!color);
return ( 
    
<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          
            <BackButton/>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
         <div className="w-full h-[10%] font-bold flex justify-center items-center text-white text-2xl">Task Dedication</div>
         <div className="flex justify-center items-center font-bold flex-row text-2xl text-white"> <img className="rounded-full w-[70px] h-[70px]"  src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"/><p className="ml-6">Laura Parker</p></div>
         <p className="p-4 text-white text-3xl">Controls List</p>
    <div className="w-[95%] overflow-auto text-2xl text-white font-bold  h-[45%] flex flex-row">
        <div className="w-full h-full flex flex-col ">
            <p className="p-4">Manage Demographics</p>
            <p className="p-4">Manage Wallet</p>
            <p className="p-4">Manage Chat</p>
            <p className="p-4">Manage Customer Support</p>
            <p className="p-4">Manage Blocking Reports</p>
            <p className="p-4">Manage Add Bus Company</p>
            <p className="p-4">Manage Generate Cupon</p>
            <p className="p-4">Manage Refunding</p>
            <p className="p-4">Manage Trips History</p>
            <p className="p-4">Manage Place Ads</p>

        </div>
        <div className=" h-full flex flex-col">

        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>
        <ToggleButton className='p-5' isBig={false}/>

        </div>
       
    </div>
    <div className="w-full h-[20%] flex justify-center">
        <button className={`w-[10%] h-[30%] rounded-2xl text-xl bg-white ${color?  "text-white bg-green" : "text-black bg-white" }`}>Save</button>

</div>
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  