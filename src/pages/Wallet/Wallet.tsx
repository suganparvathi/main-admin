import React from 'react'
import { Link } from 'react-router-dom'
// import { WalletSidebar } from './Components.tsx/WalletSidebar'
import BackButton from '../../components/BackButton'
import Notifcation from '../../components/Notification'






export const Wallet = () => {
  return (
    <div className="w-screen  h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
    {/* top-div */}
     <div className="flex  w-full h-[12%] ">
        <div className="w-full h-full flex items-center">
          <BackButton/>
        </div>
        <div className="w-full h-full flex items-center">
          <Notifcation/>
        </div>
      </div>
      {/* center div */}
      <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-row   bg-quaternary rounded-xl">
            <div className='w-[60%] h-full '>
              <div className='w-[60%] p-8 h-[80%]  font-thin text-4xl text-white  '>
                <div className='underline mt-14'><Link to="/my-transaction">My Transactions </Link></div>
                <div className='underline mt-14'><Link to="/wallet-withdrawl">Withdrawl</Link></div>
                <div className='underline mt-14'><Link to="/send-money">Send</Link></div>
                <div className='underline mt-14'>Bus Transaction</div>
                <div className='underline mt-14'>Schedule Send</div>
              </div>
            </div>
            <div className='w-[40%]  text-white flex justify-center h-full'>
              <div className='w-full h-[80%] flex flex-col items-center'>
                <div className=' w-full  items-center flex justify-center h-[50%]'>
                <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[30%] h-[60%]" />
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
