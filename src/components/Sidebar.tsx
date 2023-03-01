import React, { useCallback, useState } from "react";
import Overlay from "./Overlay";
import { MdAssignmentInd } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import{MdOutlineRule} from "react-icons/md";
import {ImUsers} from "react-icons/im";
import {FaExclamationTriangle} from "react-icons/fa";
import {FaBusAlt} from "react-icons/fa";
import {BiCoffeeTogo} from "react-icons/bi";
import {TbArrowsRandom} from "react-icons/tb";
import {FaPenSquare} from "react-icons/fa";
import {FaBuysellads} from "react-icons/fa";
import {FaIdCard} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";
import {RiChat3Line} from "react-icons/ri";
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';


export const Sidebar = () => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");

  return (
    <nav>
      <div className='relative'>
      {showMoreOptions && (
           <>
           <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div>
        <div className='absolute flex justify-center items-center w-full h-full'>
          <div className='bg-white z-20 flex drop-shadow-2xl flex-col text-xl justify-center items-center w-[65%] h-[18%]'>
            <p className=''><Link to="/direct-support">Direct Support</Link></p>
            <p className='mt-10'><Link to="/chat-help">Help</Link></p>

          </div>

        </div>
        </>


)}
      {/* <container> */}
        <div className='flex z-10  text-xl flex-col   w-full h-full ml-6  text-black'>
         
          <div className='flex flex-row font-thin p-3 -mt-2'><FaRegChartBar className=' text-2xl'/><Link to="/Demograph"><p className='ml-2'>Demographics</p></Link></div>
          <div className='flex flex-row font-thin p-3'><IoMdWallet className=' text-2xl'/><Link to="/Wallet"><p className='ml-2'>Wallet</p></Link></div>
          <div className='flex flex-row font-thin p-3'><MdOutlineRule className=' text-2xl'/><Link to="/delegate-task"><p className='ml-2'>Delegate Task</p></Link></div>
          <div className='flex flex-row font-thin p-3'
          // onClick={ handleShowOptions}
          ><RiChat3Line className=' text-2xl'/><Link to="/email-verify"><p className='ml-2' >Chat</p></Link></div>
          <div className='flex flex-row font-thin p-3'><ImUsers className=' text-2xl'/><Link to="/customer-support"><p className='ml-2'>Customer Services</p></Link></div>
          <div className='flex flex-row font-thin p-3'><FaExclamationTriangle className=' text-2xl'/><Link to="/blocking-report"><p className='ml-2'>Blocking Reports</p></Link></div>
          <div className='flex flex-row font-thin p-3'><FaBusAlt className=' text-2xl'/><Link to="/add-bus-company"><p className='ml-2'>Add Bus Company</p></Link></div>
          <div className='flex flex-row font-thin p-3'><BiCoffeeTogo className=' text-2xl'/><p className='ml-2'><Link to="/generate-cupon">Generate Cupon</Link></p></div>
          <div className='flex flex-row font-thin p-3'><TbArrowsRandom className='text-2xl'/><p className='ml-2'><Link to="/refunding">Refunding</Link></p></div>
          <div className='flex flex-row font-thin p-3'><FaPenSquare className='text-2xl'/><p className='ml-2'><Link to="/trips-history">Trips History</Link></p></div>
          <div className='flex flex-row font-thin p-3'><FaBuysellads className=' text-2xl'/><p className='ml-2'><Link to="/place-ads">Place Ads</Link></p></div>
          <div className='flex flex-row font-thin p-3'><FaIdCard className=' text-2xl'/><p className='ml-2'><Link to="/prof">Profile</Link></p></div>
          <div className='flex flex-row cursor-pointer font-thin p-3'><BiLogOut className=' text-2xl'/><Link to="/gene-cupon"><p className='ml-2'>Logout</p></Link></div>
        </div>
        </div>
       {/* </container> */}
    </nav>
  )
}


// const container = styled.div`
// flex  
// text-xl 
// flex-col
//  w-full
//   h-full 
//   ml-6 
//   mt-4
//   text-white
// `;