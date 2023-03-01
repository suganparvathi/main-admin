import React from 'react'
import { IoMdWallet } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { MdIncompleteCircle } from "react-icons/md";
import { Link } from 'react-router-dom';



export const DemoSidebar = () => {
    return ( 
        <nav>
        <div className='flex  text-xl flex-col  w-full h-full ml-6 mt-4 text-black'>
         
        
          <div className='flex flex-row p-3 '><IoMdWallet className=' text-2xl mb-6'/><p className='ml-2 mb-6 font-bold'>Wallet</p></div>
          <div className='flex flex-row p-3 '><ImClock className=' text-2xl'/><Link to="/demo-user-history"><p className='ml-2 '>User History</p></Link></div>
          <div className='flex flex-row p-3'><MdIncompleteCircle className=' text-2xl'/><Link to="/jopay-growth"><p className='ml-2'>Charts</p></Link></div>
          <div className='flex flex-row p-3'><MdVerifiedUser className=' text-2xl'/><Link to="/kyc-verification"><p className='ml-2'>KYC Verification</p></Link></div>

         
        </div>
    </nav>
    )
}
