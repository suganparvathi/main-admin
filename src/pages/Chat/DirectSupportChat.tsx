import react from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'
import { HiDotsVertical} from "react-icons/hi";
import Chat from './Chat';
import { BsSearch} from "react-icons/bs";
import { FaCamera} from "react-icons/fa";
import {IoIosColorPalette} from "react-icons/io";
import {HiUserCircle} from "react-icons/hi";
import {TbCurrencyDollar} from "react-icons/tb";



export const DirectSupportChat = () => {
    return (
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row w-full  h-[10%] '>
                <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'>Direct Support</p>
                </div>
                <div className="flex justify-end items-center  w-full h-full text-white"><Notifcation/></div>
            </div>
            <div className="w-full h-[90%] flex justify-center ">
            <div className="mt-4 w-[90%] h-full flex flex-col  bg-quaternary rounded-3xl">
                <div className='w-full h-[22%] flex-col  justify-center flex items-center'>
                    <div className='w-full h-[30%]  flex flex-row'>
                        <div  className='flex justify-center mt-4 w-full h-full items-center'>
                            <img src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg" className="rounded-full w-[80px] h-[80px]" />
                        </div>
                        <div className='flex justify-end m-4 text-2xl text-white'>
                            <HiDotsVertical/>
                        </div>
                     </div>
                    <p className='text-4xl mr-10 mt-10 text-white font-bold'>Michell</p>
                </div>
                                    {/* chat  */}
                <div className='w-full flex justify-center h-[55%]'>
                <div className="w-full   overflow-y-auto overflow-x-hidden p-5 pt-7 flex flex-col">
                    <Chat/>
                </div>
                </div>
                <div className='w-full h-full flex justify-center'>
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