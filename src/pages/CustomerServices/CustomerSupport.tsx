import react, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import SearchLogin from '../../components/SearchLogin'
import {ImUsers} from "react-icons/im";
import { FiFilter } from "react-icons/fi";
import {MdCircle} from "react-icons/md";
const members = [
    { name : "Harsha(#546B7)"},
    { name : "Muthu(#785V8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
    { name : "Muthu(#456Y8)"},
   
] 
const paid = [
    { name : "Paid"},
    { name : "Unpaid"},
    
] 
const Filter = [
    {name:"Data"},
    {name:"year"},
    {name:"Recent"},
    {name:"Ticket Id"},
    {name:"Montly"},
    {name:"paid Customer"},
    {name:"unpaid"},
]


export const CustomerSupport = () => {
    const[state,setState]=useState<string>();
    return (
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row w-full  h-[10%] '>
                <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-[10%]'>
                <BackButton/><p className='ml-2'>Customer Support</p>
                </div>
                
            </div>
            <div className='w-full flex flex-row  h-[90%] '>
                <div className='w-[60%] h-full'>
                    <div className=' w-full mt-4 h-[8%] '>
                    <SearchLogin placeholder='Search By Name/Ticket Id'/>
                    </div>
                <div className='w-full flex flex-row h-[15%] '>
                    <div className='w-[20%] h-full flex  justify-end items-center flex-row'>
                        <p className='font-semibold text-quaternary text-lg'>Filter By</p><FiFilter className="ml-2 text-quaternary text-2xl"/>
                    </div>
                    <div className=' w-[75%] h-full grid grid-cols-4  flex flex-col justify-start'>
                        {
                            Filter.map((a) =>(
                    <button 
                    onClick={()=>{
                        console.log(a.name,"CustomerSupport")
                        setState(a.name)
                    }
                    }
                    className={`w-[90%] h-[80%] border-green font-semibold  hover:scale-90  m-2 flex items-center justify-center rounded-full border
                        ${a.name===state? "bg-green text-black" : "bg-white text-green"}`}><p>{a.name}</p></button>
                            ))
                        }                 
                       
                    </div>
                    </div>
                <div className='w-[95%]  h-[70%] flex  items-center  flex-col justify-center '>
                <div className='w-[90%] h-full flex flex-col   overflow-auto '>

                    {members.map(({name}) => (
                         <div className='w-full py-4 px-2 h-full flex flex-row '>
                         <div className=' w-[15%]'>
                            
                             <div className='rounded-full drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                             <Link to="/piolts-and-co-piolts">
                             <ImUsers className="text-2xl  hover:scale-90 text-quaternary"/>
                             </Link>
                             </div>
                         </div>
                         <div className='flex text-lg w-full flex-col pl-2 py-2'>
                             <p>{name}</p>
                             <p>nnhm m, cd ld d dskmkdmfkdmjkmjknh</p>
                         </div>
                         {/* {paid.map(({name}) => ( */}
                         <div className='flex w-[30%] font-semibold text-xl flex flex-col py-4 text-green items-end justify-end'>
                           
                            <p>paid</p>
                            </div>
                            {/* ))} */}
                     </div>
                          ))}
                </div>
                </div>
                </div>
                <div className='w-[40%] h-full'>
                    <div className='w-[90%] rounded-t-3xl flex items-center flex-col text-white h-full bg-quaternary'>
                        <div className='w-full text-2xl  font-semibold h-[15%] flex justify-center items-center'>
                            <p>
                              Live Chats
                            </p>
                        </div>
                        <div className='w-[90%] h-[80%]  overflow-auto'>

                        {members.map(({name}) => (
                        <div className='w-full py-4 px-2  h-[25%] flex flex-row '>
                            <div className='w-[25%] h-full'>
                                
                            <div className='rounded-full drop-shadow-xl bg-white  flex flex-col items-center w-[70px] h-[70px]'>
                                <MdCircle className='text-green ml-10 text-3xl'/>
                                <ImUsers className="text-2xl  text-quaternary"/>
                               

                                </div>
                            </div>
                            <div className='flex flex-col w-[55%]  py-2'>
                                <p>{name}</p>
                                <p>Red bus</p>
                            </div>
                            <div className='flex w-[20%] flex flex-col py-4 items-end justify-end'>
                            <p>1:21PM</p>
                            <p>paid</p>
                            </div>
                        </div>
                          ))}



                        </div>

                    </div>

                </div>

            </div>
        </div>
    )}