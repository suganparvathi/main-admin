import React, { useCallback, useState } from "react";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";
import {BsFillBellFill} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import {AiOutlineBars} from "react-icons/ai";
import Overlay from "../../components/Overlay";





export const Prof = () => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  }
  

return ( 
 
  <div className='relative'>
  {showMoreOptions && (
       <>
       <div className="absolute z-10 bg-red-200">
      <Overlay onClick={handleShowOptions} />
     </div>
    <div className='absolute   w-full h-full'><div className="w-full h-[60%]"/>
    <div className="w-full h-[40%] flex flex-row"><div className="  w-[60%] h-full"/>
      <div className="w-[40%] flex justify-center items-center h-full">
        <div className="w-[30%] h-[50%] z-20 drop-shadow-2xl flex flex-col justify-center items-center rounded-2xl bg-white">
        <Link to="/view-member" className="mt-2">View Member List</Link>
          <Link to="/create-member" className="mt-2">create Member</Link>
          <Link to="/recycle-bin" className="mt-2"> Recycle Bin</Link>
        </div>
      </div>
    </div></div>
    </>)}
    
<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
           <BackButton/><p className="text-2xl font-bold">Your Profile</p>
          </div>
           
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className="w-full text-white h-[50%] flex flex-col justify-center items-center">
              <p className="font-bold text-xl mt-6">Your Profile Details</p>
              <img src="https://tse4.mm.bing.net/th?id=OIP.Q_vZZcSYOaPMcxnXMQQ99QHaE8&pid=Api&P=0" className="w-[150px] mt-4 h-[150px] rounded-full"/>
              <p className="font-bold text-3xl mt-4">Kate Wilson</p>
            </div>
            <div className="w-full  flex flex-row h-[40%]">
              <div className="flex justify-start text-xl text-white flex-col w-[90%] h-full">
                <p className="p-4">Employee ID :<span className="font-bold ml-2">TYPOLA546</span></p>
                <p className="p-4">Name :<span className="font-bold ml-2">Kate Wilson</span></p>
                <p className="p-4">Phone Number :<span className="font-bold ml-2">+1-908-876-8905</span></p>
                <p className="p-4">Designation :<span className="font-bold ml-2">Admin Of Jopay</span></p>
              </div>
              <div className="flex items-center h-full text-xl w-[10%] flex-col">
                <Link to="/notification-center">
                <button className="rounded-full h-[50px] w-[50px] bg-white text-quaternary flex justify-center drop-shadow-2xl items-center mt-6"><BsFillBellFill/></button>
                </Link>
                <Link to="/profile-setting">
                <button className="rounded-full h-[50px] w-[50px] bg-white text-quaternary flex justify-center drop-shadow-2xl items-center mt-6 "><AiOutlineSetting/></button>
                </Link>
                <button
                onClick={ handleShowOptions}
                className="rounded-full h-[50px] w-[50px] bg-white text-quaternary flex justify-center drop-shadow-2xl items-center mt-6"><AiOutlineBars/></button>
              </div>
            </div>
            </div>  
        
          </div>
        </div>
      </div>
    </div>
    
        
       
        )
      }  