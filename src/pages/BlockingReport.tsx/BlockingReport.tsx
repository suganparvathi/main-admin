import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../../components/Searchbar'
import BackButton from '../../components/BackButton'

const members = [
    {
        img: "https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0",
        name:"Martha",
      
      },
      {
        img: "https://yt3.ggpht.com/a/AATXAJzXiEdSCcKS1qvyGprSQuizIbCmuHfMgZ5p=s900-c-k-c0xffffffff-no-rj-mo",
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
                             <img src={data.img} className='rounded-full  hover:scale-90 w-[70px] h-[70px]'/>
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
