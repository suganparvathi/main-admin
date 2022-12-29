import React, { useCallback, useState } from "react";
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'
import {FaBusAlt} from "react-icons/fa";
import{MdRadio} from "react-icons/md";
import Overlay from "../../components/Overlay";


const productCategories = [
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Albert'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Amy'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Ellie'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Mary'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Bruce'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : ' Leo'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Annie'
    },
    {
        image:  <img src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Clara'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Milo'
    },
    {
        image:  <img src="https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Kristin'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Annie'
    },
    {
        image:  <img src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Clara'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Milo'
    },
    {
        image:  <img src="https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Kristin'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Annie'
    },
    {
        image:  <img src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Clara'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Milo'
    },
    {
        image:  <img src="https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Kristin'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[65px] h-[65px]"/>,
        name : 'Annie'
    }

   

]




export const BusCompanyWallet = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
  

    const handleShowOptions = () => {
      setShowMoreOptions(!showMoreOptions);
      
     }
     console.log(showMoreOptions,"sugan");


    return (

                // Layout
        <div className='relative'>
              {showMoreOptions && (
           <>
             <div className="absolute z-10">
            <Overlay onClick={handleShowOptions} />
            </div> 
            <div className=' absolute  w-[70%] h-[100%] flex-col flex justify-start'>
               <div className='w-full h-[45%]'></div> 
               <div className='w-full h-[55%] flex justify-center'>
                <div className='w-[60%] h-[80%] z-20 rounded-3xl flex items-center flex-col bg-opacity-80 backdrop-blur bg-black'>
                    <div className='w-full h-[20%] flex justify-center flex-row text-xl items-center'>
                        <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className='w-[55px] h-[55px] rounded-full'/>
                        <p className='text-quaternary font-bold ml-2'>Ola Bus Company</p>
                    </div>
                    <div className='w-[90%] h-[70%]  flex flex-row'>
                        <div className='w-[50%] h-full flex text-xl font-bold text-quaternary justify-start flex-col'>
                            <p className='m-4'>Name</p>
                            <p className='m-4'>Designation</p>
                            <p className='m-4'>Driver Id</p>
                            <p className='m-4'>Jopay Id</p>
                        </div>
                        <div className='w-[50%] h-full flex text-xl font-bold text-quaternary items-end flex-col'>
                            <p className='m-4'>Adam Russel</p>
                            <p className='m-4'>Ola Bus Driver</p>
                            <p className='m-4'>#567T6</p>
                            <p className='m-4'>#977T6</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            </>)}
        <div className='text-black  flex-col flex w-full h-screen'>
            <div className='flex flex-row justify-start items-center text-3xl font-bold w-full text-black  h-[10%] '>
               
                <BackButton/><p className='ml-2'>Bus Company</p>
                
               
            </div>
            <div className='flex w-full h-[10%] justify-center text-3xl font-bold items-center '><p>Main Wallet Balance $10,000</p></div>
            <div className="w-full h-[90%]  flex justify-center ">
            <div className=" w-[90%] h-full flex flex-col  bg-quaternary rounded-t-3xl">
                <div className='w-full h-[15%] flex justify-center  flex-row'>
                    <div className='rounded-full drop-shadow-xl mt-2  bg-white justify-center flex items-center w-[65px] h-[65px] rounded-full '>
                    <FaBusAlt className="text-3xl text-quaternary"/>
                    </div>
                    <div className='flex flex-col w-[18%] m-2'>
                        <p className='font-bold text-2xl text-white'>Ola Bus(#456T9)</p>
                        <p className='w-[100%] h-[25%] mt-2 rounded-full bg-white'></p>
                    </div>
                </div>
                <div className=' w-full h-[20%] border-b-2 border-grey-200'>
                    <div className=' flex text-white justify-around  items-center flex-row w-[40%] h-full'>
                        <div className='flex flex-row justify-center items-center'>
                        <div className='rounded-full drop-shadow-xl mt-2  bg-white justify-center flex items-center w-[65px] h-[65px] rounded-full '>
                        <MdRadio className="text-3xl text-quaternary"/>
                        </div>
                        <p className='ml-2 text-2xl font-bold'>You</p>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                        <div className='rounded-full drop-shadow-xl mt-2  bg-white justify-center flex items-center w-[65px] h-[65px] rounded-full '>
                        <FaBusAlt className="text-3xl text-quaternary"/>
                        </div>
                        <p className='ml-2 text-2xl font-bold'>Owner</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[65%] flex flex-row'>
                    <div className='w-[60%] h-full'>
                        <div className='w-[95%] h-full'>
                            <div className='w-full h-[10%] flex justify-center items-center'>
                                <p className='text-2xl font-bold text-white'>Active Drivers And Co Drivers</p>
                            </div>
                            <div className='w-[100%] h-[100%]'>
                                <div className="w-[95%] h-[80%]  flex justify-center mt-4 grid grid-cols-4 gap-6 overflow-auto">
                                    {productCategories.map((productCategories ) => (
                                    <div className=" w-full flex flex-row  cursor-pointer text-xl text-white  flex justify-center items-center h-full">
                                    <p onClick={ handleShowOptions}> {productCategories.image}</p>
                                    <p className='ml-2'>{productCategories.name}</p>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] h-full bg-white rounded-t-3xl  border-r-2 border-grey-800'>
                        <div className='w-full h-[20%] flex justify-center items-center'>
                            <p className='text-2xl font-bold'>InActive Drivers And Co Drivers</p>
                        </div>
                        <div className='w-[95%] h-[70%]'>
                        <div className="w-full h-full flex justify-center  flex-col  overflow-auto">
                                    {productCategories.map((productCategories ) => (
                                    <div className=" w-full flex flex-row mt-8 pl-10 text-xl flex justify-start items-center h-full">
                                    <p><Link to="/user-send-money"> {productCategories.image} </Link></p>
                                    <p className='ml-2 text-black text-sm'>{productCategories.name}</p>
                                    </div>
                                    ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

              
           
        
    )}