import React, { useCallback, useState } from "react";
import { Link } from 'react-router-dom'
import Searchbar from '../../components/Searchbar'
import BackButton from '../../components/BackButton'
import Overlay from '../../components/Overlay'

const members = [
    {
        img: "https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0",
        name:"kumar",
      
      },
      {
        img:"https://yt3.ggpht.com/a/AATXAJzXiEdSCcKS1qvyGprSQuizIbCmuHfMgZ5p=s900-c-k-c0xffffffff-no-rj-mo",
        name:"Edward Shaw",
       
      },
      {
        img: "https://tse3.mm.bing.net/th?id=OIF.bCW4gKlSfNpc0lrkxPNIyg&pid=Api&P=0",
        name:"Michella",
       
      },
      {
        img: "https://sp-images.summitpost.org/1057780.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=ce1d4b9c67f75459e13fcde3abf4fe3e",
        name:"sugan",
       
      },
]  

export const UserBlockingReport = () => {

    const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   
  }

  console.log(showMoreOptions,"sugan");
  
  return (
    <div className='relative'>
          {showMoreOptions && (
             <>
              <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
        <div className='absolute w-[90%] h-full flex-col flex'>
            <div className='w-full  h-[50%]'></div>
                <div className='w-full h-[90%] flex justify-end'>
                    <div className='w-[90%] h-full flex justify-center'>
                        <div className='w-[50%] h-[80%] flex flex-col text-white rounded-3xl z-20 opacity-90 bg-black'>
                            <div className='w-full h-[20%] text-3xl flex items-center font-bold'><p className='ml-4'>Martha BlockList Franklin</p></div>
                            <div className='w-full h-[35%] flex flex-row items-center'>
                            <div className='ml-6'><img src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0" className="rounded-full w-[70px] h-[70px]"/></div>
                            <p className='text-2xl font-bold ml-4'>Franklin</p></div>
                           <div className='w-full ml-4 text-2xl font-bold h-[20%]'> <p>Customer Id : Franklin-101299</p></div>
                            <div className='w-full ml-4 text-2xl font-bold h-[20%]'> <p>Blocked Date : 5/7/2021</p></div>
                            <div className='w-full ml-4 text-2xl font-bold h-[20%]'><p>Blocked Time : 6:00 A.M</p></div>

                        </div>
                    </div>

            </div>
            </div>
            </>


)}
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[10%]">
         
            <BackButton/>
        
          
        </div>
                         {/* center div */}
        <div className="w-full h-full flex flex-col items-center">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className='w-full h-[15%] flex items-center flex-col'>
                <div className='-mt-10'>
                <img src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0" 
                className="rounded-full w-[70px] h-[70px]"/></div>
                <p className='text-5xl py-2 font-bold text-white'>Martha BlockList</p>
            </div>
            <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Customer Name/Customer ID"/> </div>
            <div className="w-full h-[70%] flex justify-center items-center text-white font-bold">
            <div className='w-[85%]  h-[90%] flex items-center flex-col '>
                <div className='w-[90%] h-[80%] flex flex-col overflow-auto '>

                    {members.map((data) => (
                         <div className='w-full py-4 px-2 h-full  flex flex-row '>
                         <div className='flex flex-col w-[15%]'>
                       
                             <img src={data.img} onClick={ handleShowOptions} className="rounded-full w-[70px] h-[70px]"/>
                    
                        </div>
                         <div className='flex text-lg w-full pl-2 py-6'>
                             <p>{data.name}</p>
                           
                         </div>
                       
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
  )
}
