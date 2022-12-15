import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'

import  Homepage  from '../../components/Homepage'


export const Demographics = () => {
  return (
   
    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-row overflow-hidden h-[100%] flex">
        <div className=" w-[19%] h-full bg-white">
            <Sidebar/>
        </div>
        <div className="w-[83%] h-full "><Homepage/></div>
    </div>
    
</div>
  )
}
