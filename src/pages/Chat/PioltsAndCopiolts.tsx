import react from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'
import { HiDotsVertical} from "react-icons/hi";
import BuscompanyChat from './BuscompanyChat';
import { BsSearch} from "react-icons/bs";
import { FaCamera} from "react-icons/fa";
import {IoIosColorPalette} from "react-icons/io";
import {HiUserCircle} from "react-icons/hi";
import {TbCurrencyDollar} from "react-icons/tb";
import {FaBusAlt} from "react-icons/fa";
import{MdRadio} from "react-icons/md";



export const PioltsAndCopiolts = () => {
    return (
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row w-full  h-[10%] '>
                <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'>All Piolts And Co-Piolts</p>
                </div>
                <div className="flex justify-end items-center  w-full h-full text-white"><Notifcation/></div>
            </div>
            <div className="w-full h-[90%] bg-yellow flex justify-center ">
            <div className="mt-4 w-[90%] h-full flex flex-col  bg-quaternary rounded-3xl">
                <div className='w-full h-[30%] flex-col  flex items-center'>
                    <div className='flex flex-row w-full justify-center items-center h-[60%] '>
                        <div className='flex justify-center w-full items-center'>
                        <Link to="/bus-company-wallet">
                        <div className='rounded-full ml-20 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                        <FaBusAlt className="text-2xl text-quaternary"/>
                        </div>
                        </Link>  
                        </div>
                        <div className='flex justify-end flex-col m-4 '>
                            <div className='flex flex-row'>
                            <div className='rounded-full drop-shadow-xl  bg-white justify-center flex flex-row items-center w-10 h-10 rounded-full '>
                            <MdRadio className="text-xl text-quaternary"/>
                            </div>
                            <p className='mt-2 font-bold'>You</p>
                            </div>
                            <div className='flex flex-row'>
                            <div className='rounded-full drop-shadow-xl mt-2  bg-white justify-center flex items-center w-10 h-10 rounded-full '>
                            <FaBusAlt className="text-xl text-quaternary"/>
                            </div>
                            <p className='mt-4 font-bold'>Owner</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-4xl  text-white font-bold'>OLA Bus Company</p>
                        <p className='text-sm  ml-14 text-white mt-2 font-bold'>All Drivers And Co- Drivers</p>
                    </div>
                </div>
                                    {/* chat  */}
                <div className='w-full flex justify-center  h-[50%]'>
                <div className="w-full   overflow-y-auto overflow-x-hidden p-5 pt-7 flex flex-col">
                    <BuscompanyChat/>
                </div>
                </div>
                <div className='w-full h-[50%]  flex justify-center'>
                <div className='flex items-center border-4 w-[90%] text-black border-white h-[45px] my-6 mx-3 rounded-full px-3'>
                    <input
                    type="text"
                    name="message"
                    placeholder="Type here....."
                    className="bg-transparent border-none py-2 px-2 text-white text-2xl outline-none w-full"
                    />{" "}
                    <FaCamera className="text-white  text-2xl font-bold"/>
                    <IoIosColorPalette className="text-white ml-4  text-2xl font-bold"/>
                    <HiUserCircle className="text-white ml-4 text-2xl font-bold"/>
                    <TbCurrencyDollar className="text-white ml-4 text-2xl font-bold"/>
                    <p className="text-white  text-sm ml-2 font-bold">UPI</p>
                </div>
                </div>
            </div>
            </div>
        </div>

              
           
        
    )}