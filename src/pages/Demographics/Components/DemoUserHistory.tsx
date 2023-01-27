import React, {useState, useEffect, useCallback,} from "react";
import { Link } from 'react-router-dom'
import Searchbar from '../../../components/Searchbar'
import Notifcation from '../../../components/Notification'
import { JopayAppUser } from './JopayAppUser'
import BackButton from '../../../components/BackButton'
import { AxiosCall } from "../../../API/AxiosCall";
import { constants } from "../../../API/constants";



export const DemoUserHistory = () => {

    const [count, getCount] = useState<any>()

    useEffect(() => {
         const getTransactionData = async () => {
         const response = await AxiosCall (constants.userDetails.getUsersCount, "GET")
         console.log("Transactions Data", response?.data); 
         getCount(response?.data)
        };
        getTransactionData();
    } ,[])

    return (
        <div>
        <div className='flex-col flex w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[100%] h-full '>
        <div className='flex flex-row w-full h-[5%]'>
            <div className='flex justify-start text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'> User History</p>
            </div>
          
        </div>
        {count?.map((data:any) => (
            <div className='flex flex-row  w-[75%] mt-10 items-center h-[15%] text-2xl'>
        <div className="p-[6px] px-8  text-2xl justify-center items-center w-full h-full flex flex-col shadow-md rounded-l-full bg-secondary">
            <div className="font-bold">{data?.Bus}</div>
            <div>Total Drivers And Co Drivers</div>
        </div>
        <div className="p-[6px] px-8 text-2xl flex flex-col justify-center items-center w-full h-full  shadow-md border-l-2 border-gray-400  bg-secondary">
        <div className="font-bold">{data?.Driver}</div>
            <div>Users using Jojopays</div> 
        </div>
        <div className="p-[6px] px-8 text-2xl flex flex-col justify-center items-center w-full h-full shadow-md border-l-2 border-gray-400  rounded-r-full bg-secondary">
        <div className="font-bold">{data?.Company}</div>
            <div>Bus company</div> 
        </div>
        </div>
        ))}
        <div className="w-[100%] h-[60%]  mt-6 flex justify-center items-center flex-col">
            <div className='flex items-center   justify-center w-[55%]  mt-4 h-[10%] text-2xl '>
             <div className="p-[6px] px-8  text-2xl justify-center items-center w-full h-full flex flex-row shadow-md  rounded-l-2xl">
            <div>Total number Of users</div>
            <div className="font-bold ml-4">: 27,000</div>
        </div>
           <div className="p-[6px] px-8 text-2xl flex flex-row justify-center items-center w-full h-full shadow-md border-l-2 border-gray-400  rounded-r-2xl">
        <div>KYc Verified Users</div>
            <div className="font-bold ml-4">: 10,000</div> 
        </div>
        </div> 
         <div className='w-full h-[95%] flex ml-20 justify-center'> 
         <JopayAppUser  /> 
        </div> 
        </div>
       </div>
      </div>
        </div>
       
        )
    }