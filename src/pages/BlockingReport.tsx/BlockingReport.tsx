import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../../components/Searchbar'
import Notifcation from '../../components/Notification'
import BackButton from '../../components/BackButton'

const members = [
    {
        img: <img src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0" className="rounded-full w-[70px] h-[70px]"/>,
        name:"Martha",
      
      },
      {
        img: <img src="https://yt3.ggpht.com/a/AATXAJzXiEdSCcKS1qvyGprSQuizIbCmuHfMgZ5p=s900-c-k-c0xffffffff-no-rj-mo" className="rounded-full w-[70px] h-[70px]"/>,
        name:"Edward Shaw",
       
      },
      {
        img: <img src="https://tse3.mm.bing.net/th?id=OIF.bCW4gKlSfNpc0lrkxPNIyg&pid=Api&P=0" className="rounded-full w-[70px] h-[70px]"/>,
        name:"Michella",
       
      },
      {
        img: <img src="https://sp-images.summitpost.org/1057780.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=ce1d4b9c67f75459e13fcde3abf4fe3e" className="rounded-full w-[70px] h-[70px]"/>,
        name:"sugan",
       
      },
]  

export const BlockingReport = () => {
  return (
   
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[10%]">
         
            <BackButton/>
          
         
        </div>
                         {/* center div */}
        <div className="w-full h-full flex  justify-center">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Customer Name/Customer ID"/> </div>
            <div className="w-[100%] h-[100%] flex justify-center text-white font-bold">
            <div className='w-[90%]  h-[60%] flex  items-center  flex-col justify-center '>
                <div className='w-[90%] h-[80%] flex flex-col  overflow-auto '>

                    {members.map((data) => (
                         <div className='w-full py-4 px-2 h-full  flex flex-row '>
                         <div className='flex flex-col w-[10%]'>
                         <Link to="/user-blocking-report">
                             <div>{data.img}</div>
                        </Link>
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
        
  )
}
