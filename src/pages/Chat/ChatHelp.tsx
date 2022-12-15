import react from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'
import SearchLogin from '../../components/SearchLogin'
import {FaBusAlt} from "react-icons/fa";
import {FaUsers} from "react-icons/fa";
import {MdCircle} from "react-icons/md";


const members = [
    { name : "Harsha"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
    { name : "Muthu"},
   
]  


export const ChatHelp = () => {
    return (
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row w-full  h-[10%] '>
                <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'>Help</p>
                </div>
                <div className="flex justify-end items-center  w-full h-full text-white"><Notifcation/></div>
            </div>
            <div className='w-full flex flex-row  h-[90%] '>
                <div className='w-[60%] h-full'>
                    <div className=' w-full mt-4  h-[10%] '>
                    <SearchLogin placeholder='Search You Company Name/Company Id/Department'/>
                    </div>
                <div className='w-[85%] h-full flex  items-center  flex-col justify-center '>
                <div className='w-[75%] h-full flex flex-col  overflow-auto '>

                    {members.map(({name}) => (
                        <div className='w-full py-4 px-2 h-full flex flex-row '>
                            <div className='w-[20%]'>
                               
                                <div className='rounded-full drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                                <Link to="/piolts-and-co-piolts">
                                <FaBusAlt className="text-2xl text-quaternary"/>
                                </Link>

                                </div>
                            
                            
                            </div>
                            <div className='flex flex-col py-2'>
                                <p>{name}</p>
                                <p>nnhm m, cd ld d dskmkdmfkdmjkmjknh</p>
                            </div>
                        </div>
                          ))}
                </div>
                </div>
                </div>
                <div className='w-[40%] h-full'>
                    <div className='w-[90%] rounded-t-3xl flex items-center flex-col text-white h-full bg-quaternary'>
                        <div className='w-full text-2xl  font-semibold h-[15%] flex flex-col justify-center items-center'>
                            <p className='rounded-full drop-shadow-xl bg-white justify-center -mt-10 flex items-center w-[70px] h-[70px]'>
                            <FaUsers className="text-4xl text-quaternary"/>
                            </p>
                            <p>
                                All Company
                            </p>
                        </div>
                        <div className='w-[90%] h-[80%]  overflow-auto'>

                        {members.map(({name}) => (
                        <div className='w-full py-4 px-2  h-[25%] flex flex-row '>
                            <div className='w-[25%] h-full'>
                            <div className='rounded-full drop-shadow-xl bg-white  flex flex-col items-center w-[70px] h-[70px]'>
                                <MdCircle className='text-green ml-10 text-3xl'/>
                                <FaBusAlt className="text-2xl text-quaternary"/>
                               

                                </div>
                            </div>
                            <div className='flex flex-col w-[55%]  py-2'>
                                <p>{name}</p>
                                <p>Red bus</p>
                            </div>
                            <div className='flex w-[20%]  py-4  justify-end'>1:21PM</div>
                        </div>
                          ))}



                        </div>

                    </div>

                </div>

            </div>
        </div>
    )}