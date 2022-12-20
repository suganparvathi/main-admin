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
       
          <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className="absolute flex justify-center items-center w-[50%] h-full">
  
      <div className=" w-[80%] flex justify-center py-10 items-center h-[80%]">
       <div className="bg-black z-20  flex text-white flex-row rounded-2xl mr-14 justify-center  items-center w-[90%] h-full">
        <div className="w-full h-full  flex flex-col">
       <div className="h-[10%] w-full flex justify-center items-center text-2xl font-bold"><p>Pilots And Co-pilots</p></div>
       <div className="h-[15%] w-full flex flex-row ">
        <div className="ml-8"> <img src="https://tse1.mm.bing.net/th?id=OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa&pid=Api&P=0" className="w-[60px] h-[60px] rounded-full"></img>
        </div> 
        <div className="text-2xl ml-4 mt-4 font-bold">Stephen</div>
        </div>
        <p className="w-full h-[10%] text-2xl font-light ml-8">Phone Number:<span className="font-bold text-2xl"> +1-567-095-4573</span></p>
        <p className="w-full h-[10%] text-2xl font-light ml-8">Currently Working Bus Company:<span className="text-2xl font-bold ml-10">OLA</span></p>
        <p className="w-full h-[10%] text-2xl font-light ml-8">Owner Name:<span className="text-2xl font-bold ml-6">James Stewart </span></p>
        <p className="w-full h-[10%] text-2xl font-light ml-8">ID:<span className="text-2xl font-bold">OLA45C45</span></p>
        <p className="w-full h-[10%] text-2xl font-light ml-8">Driving License number:<span className="text-2xl font-bold"> 17890YT</span></p>
        <div className="w-full h-[10%] text-2xl flex flex-row font-light ml-8">Kyc<p className="font-bold text-2xl ml-[50%]">: Verified</p></div>
        <div className="w-full h-[15%] text-black justify-center flex flex-row">
            <div className="w-[40%] h-[50%] ml-6 font-semibold bg-white flex justify-center items-center  rounded-full"><p>View User History</p></div>
            <div className="w-[40%] h-[50%] ml-6 bg-white font-semibold flex items-center justify-center rounded-full"><p>Download User History</p></div>
        </div>
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
        <div className="w-[100%] h-[75%]">
          <div className='flex flex-row items-center justify-evenly w-full h-[15%] text-2xl '>
            <div className=' p-2 '>Total number Of users</div>
            <div className=' p-2 font-bold'>27,000</div>
            <div className=' p-2 '>KYc Verified Users</div>
            <div className=' p-2 font-bold'>10,000</div>
        </div> 
         <div className='w-full h-[85%] flex justify-center'> 
         <JopayAppUser  /> 
        </div> 
        </div>
       
       
       
       
       </div>
      
       
        </div>
        </div>
        </div>
        )
    }