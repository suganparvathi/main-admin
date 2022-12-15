import react from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'
import SearchLogin from '../../components/SearchLogin'

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


export const DirectSupport = () => {
    return (
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row w-full  h-[10%] '>
                <div className='flex justify-start items-center text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'>Direct Support</p>
                </div>
                <div className="flex justify-end items-center  w-full h-full text-white"><Notifcation/></div>
            </div>
            <div className='w-full flex flex-row  h-[90%] '>
                <div className='w-[60%] h-full'>
                    <div className=' w-full mt-4 h-[10%] '>
                    <SearchLogin placeholder='Search You Customer/Ticket Id'/>
                    </div>
                <div className='w-[85%] h-full flex  items-center  flex-col justify-center '>
                <div className='w-[75%] h-full flex flex-col  overflow-auto '>

                    {members.map(({name}) => (
                        <div className='w-full py-4 px-2 h-full flex flex-row '>
                            <div className='w-[20%]'><Link to="/direct-support-chat">
                            <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/>
                            </Link>
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

                        {members.map(({name}) => (
                        <div className='w-full py-4 px-2  h-[25%] flex flex-row '>
                            <div className='w-[25%] h-full'>
                                
                            <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/>
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