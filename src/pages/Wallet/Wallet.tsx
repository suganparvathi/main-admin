import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import { RootState } from '../../store'

export const Wallet = () => {

    const walletBalc:any = useSelector((state: RootState) => state.wallet)

  return (
    <div className="w-screen  h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
    {/* top-div */}
     <div className="flex  w-full h-[5%] ">
        <BackButton/>
        </div>
       
      {/* center div */}
      <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-row   bg-quaternary rounded-xl">
            <div className='w-[60%] h-full '>
              <div className='w-[60%] p-8 h-[80%]  font-thin text-4xl text-white  '>
                <div className='underline ml-4 decoration-2 underline-offset-[10px] mt-14'><Link to="/my-transaction">My Transactions </Link></div>
                <div className='underline ml-4 decoration-2 underline-offset-[7px] mt-14'><Link to="/wallet-withdrawl">Withdrawl</Link></div>
                <div className='underline ml-4 decoration-2 underline-offset-[7px] mt-14'><Link to="/send-money">Send</Link></div>
                <div className='underline ml-4 decoration-2 underline-offset-[7px] mt-14'><Link to="/schedule-send">Bus Transaction</Link></div>
                <div className='underline ml-4 decoration-2 underline-offset-[7px] mt-14'><Link to="/bus-transaction">Schedule Send</Link></div>
              </div>
            </div>
            <div className='w-[40%]  text-white flex justify-center h-full'>
              <div className='w-full h-[80%] flex flex-col items-center'>
                <div className=' w-full  items-center flex justify-center h-[50%]'>
                <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[30%] h-[60%]"/>
                </div>
                <div className='font-bold text-6xl'>Kate Wilson</div>
                <div className='font-bold mt-12 text-5xl'>${walletBalc.balance.wallet}</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
