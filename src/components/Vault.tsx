import React from 'react'
// import links from '../data/links'

// icon
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


export const Sidebar = () => {
  return (
    <nav>
        <div className='flex  text-xl flex-col w-full h-full ml-6 mt-4 text-black'>
         
          <div className='flex flex-row p-3'><FaRegChartBar className=' text-2xl'/><Link to="/wallet"><p className='ml-2'>Demographics</p></Link></div>
          <div className='flex flex-row p-3'><IoMdWallet className=' text-2xl'/><p className='ml-2'>Wallet</p></div>
          <div className='flex flex-row p-3'><MdOutlineRule className=' text-2xl'/><p className='ml-2'>Delegate Task</p></div>
          <div className='flex flex-row p-3'><RiChat3Line className=' text-2xl'/><p className='ml-2'>Chat</p></div>
          <div className='flex flex-row p-3'><ImUsers className=' text-2xl'/><p className='ml-2'>Customer Services</p></div>
          <div className='flex flex-row p-3'><FaExclamationTriangle className=' text-2xl'/><p className='ml-2'>Blocking Reports</p></div>
          <div className='flex flex-row p-3'><FaBusAlt className=' text-2xl'/><p className='ml-2'>Add Bus Company</p></div>
          <div className='flex flex-row p-3'><BiCoffeeTogo className=' text-2xl'/><p className='ml-2'>Generate Cupon</p></div>
          <div className='flex flex-row p-3'><TbArrowsRandom className='text-2xl'/><p className='ml-2'>Refunding</p></div>
          <div className='flex flex-row p-3'><FaPenSquare className='text-2xl'/><p className='ml-2'>Trips History</p></div>
          <div className='flex flex-row p-3'><FaBuysellads className=' text-2xl'/><p className='ml-2'>Place Ads</p></div>
          <div className='flex flex-row p-3'><FaIdCard className=' text-2xl'/><p className='ml-2'>Profile</p></div>
          <div className='flex flex-row p-3'><BiLogOut className=' text-2xl'/><p className='ml-2'>Logout</p></div>
          

         
        </div>
    </nav>
  )
}
