import React, {useState, useEffect, useCallback,} from "react";
import { Link } from 'react-router-dom'
import Searchbar from '../../../components/Searchbar'
import Notifcation from '../../../components/Notification'
import { JopayAppUser } from './JopayAppUser'
import BackButton from '../../../components/BackButton'
import Overlay from "../../../components/Overlay";

export const DemoUserHistory = () => {


    const [showMoreOptions, setShowMoreOptions] = useState(false);
  

    const handleShowOptions = () => {
      setShowMoreOptions(!showMoreOptions);
      
     
    }
  
    console.log(showMoreOptions,"sugan");








    return (

        <div>

<div className="relative">
      {showMoreOptions && (
        <>
       
         {/* <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div> */}
    <div className="absolute flex justify-center bg-red-200 items-center w-[100%] h-full">
  
      <div className=" w-full flex justify-center items-center h-full">
       <div className="bg-black z-20  flex text-white text-sm flex-row mr-14 justify-center items-center w-[9%] h-[15%]">
        <div className="w-full h-full flex  justify-center items-center flex-col">
        <button>Add user</button>
        <button>Remove From Logins</button>
       </div>
       </div>
      </div>
    </div>
    </>


    )}
        
       
        
        <div className='text-black  flex-col flex w-[96vw] h-screen'>
       {/* <Searchbar placeholder= "Company Document"/> */}
       <div className='flex flex-col   items-center w-[100%] h-full '>
        <div className='flex flex-row w-full h-[10%] '>
            <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'> User History</p>
                 
            </div>
            <div className="flex justify-end items-center  w-full h-full text-white"><Notifcation/></div>
        </div>
        <div className='flex flex-row  w-full h-[15%] text-2xl'>
            <div className='flex items-center justify-center  flex-col w-full h-full'>
            <div className=' p-2  font-bold'>5000</div>
            <div className='p-2 '>Total Drivers And Co Drivers</div>
            </div>
            <div className='flex items-center justify-center flex-col w-full h-full'>
            <div className=' p-2 font-bold'>20,000</div>
            <div className=' p-2'>User User jopay</div>
            </div>
            <div className='flex items-center  justify-center flex-col w-full h-full'>
            <div className=' p-2 font-bold'>2,000</div>
            <div className=' p-2'>bus Company</div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-evenly w-full h-[15%]  text-2xl '>
            <div className=' p-2 '>Total number Of users</div>
            <div className=' p-2 font-bold'>27,000</div>
            <div className=' p-2 '>KYc Verified Users</div>
            <div className=' p-2 font-bold'>10,000</div>
        </div>
       
        <div className='w-full h-[60%] flex justify-center'> <JopayAppUser/> </div>

       </div>
       
        </div>
        </div>
        </div>
        )
    }