import react from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'
import SearchLogin from '../../components/SearchLogin'
import {ImUsers} from "react-icons/im";
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
const online = [
    { name : "Harsha"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
    { name : "devi"},
] 
const data = [
    {name:"Data"},
    {name:"year"},
    {name:"Data"},
    {name:"Data"},
    {name:"Data"},
    {name:"Data"},
    {name:"Data"},
]


export const CustomerSupport = () => {
    return (
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row w-full  h-[10%] '>
                <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'>Customer Support</p>
                </div>
                <div className="flex justify-end items-center  w-full h-full text-white"><Notifcation/></div>
            </div>
            <div className='w-full flex flex-row  h-[90%] '>
                <div className='w-[60%] h-full'>
                    <div className=' w-full mt-4 h-[8%] '>
                    <SearchLogin placeholder='Search By Name/Ticket Id'/>
                    </div>
                <div className='w-full flex flex-row bg-blue-200 h-[15%] '>
                    <div className='w-[20%] h-full bg-pink-200'>hii</div>
                    <div className='grid w-full h-full flex justify-start grid-cols-4'>
                    {data.map((data ) => (
                        <div className='w-[80%] h-[70%] text-green font-semibold rounded-full flex justify-center border-green border-2'>
                            <p>{data.name}</p>

                        </div>
                         ))}
                    </div>

                </div>
                <div className='w-[85%] h-[70%] flex  items-center  flex-col justify-center '>
                <div className='w-[75%] h-full flex flex-col  overflow-auto '>

                    {members.map(({name}) => (
                         <div className='w-full py-4 px-2 h-full flex flex-row '>
                         <div className='w-[20%]'>
                            
                             <div className='rounded-full drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                             <Link to="/piolts-and-co-piolts">
                             <ImUsers className="text-2xl text-quaternary"/>
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
                        <div className='w-full text-2xl  font-semibold h-[15%] flex justify-center items-center'>
                            <p>
                                Customers Online
                            </p>
                        </div>
                        <div className='w-[90%] h-[80%]  overflow-auto'>

                        {online.map(({name}) => (
                        <div className='w-full py-4 px-2  h-[25%] flex flex-row '>
                            <div className='w-[25%] h-full'>
                                
                            <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/>
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