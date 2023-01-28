import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'
import  Homepage  from '../../components/Homepage'
import { AxiosCall } from '../../API/AxiosCall'
import { useDispatch, useSelector } from 'react-redux'
import { GET_WALLET_BALANCE } from '../../store/reducers/wallet.reducer'
import { RootState } from '../../store'


export const Demographics = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    const getCall = async () => {
      const getWalletBalance = await AxiosCall ('getWalletData', "GET")
      console.log("wallet balance", getWalletBalance?.data);
      dispatch(GET_WALLET_BALANCE(getWalletBalance?.data))
    }
    getCall();
  },[])


  return (
   
    <div className="w-screen  h-screen overflow-hidden flex">
    <div className="w-[100%] flex-row overflow-hidden h-[100%] flex">
        <div className=" w-[19%]  bg-white h-full">
            <Sidebar/>
        </div>
        <div className="w-[83%] h-full "><Homepage/></div>
    </div>
    
</div>
  )
}
