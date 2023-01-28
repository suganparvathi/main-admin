import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'







export const GeneCupon = () => {
  return (
    <div className="w-screen  h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                        {/* top-div */}
     <div className="flex  w-full h-[8%] ">
           <BackButton/>
       
        
      </div>
                       {/* center div */}
      <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-row   bg-quaternary rounded-xl">
            <div className='w-[60%] h-full'>
              <div className='w-[75%] pl-20 h-[80%] flex justify-center items-start flex-col  font-thin text-4xl text-white  '>
                
                <div className='underline decoration-2 underline-offset-[10px] ml-6 mt-2'><Link to="/SendCuponToCustomer">Send Cupon To Customer</Link></div>
                <div className='underline decoration-2 underline-offset-[10px] ml-6 mt-14'><Link to="/offer-history">View Cupon History</Link></div>
                
              </div>
            </div>
            <div className='w-[40%]  text-white flex justify-center h-full'>
              <div className='w-full h-[85%] flex flex-col items-center'>
                <div className=' w-full  items-center flex justify-center h-[50%]'>
                <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full drop-shadow-2xl w-[30%] h-[60%]" />
                </div>
                <div className='font-bold text-6xl'>Kate Wilson</div>
                <div className='font-bold mt-12 text-5xl'>$10,000 </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
