import React from 'react'
// import { Link } from 'react-router-dom'
import { DemoSidebar } from './DemoSidebar'
import BackButton from '../../../components/BackButton'
import DemoHomepage from './DemoHomepage'
import tw from 'tailwind-styled-components'






export const Demograph = () => {
  return (
   
    <div className="w-screen h-screen overflow-hidden flex">
    {/* <div className="w-[100%] flex-row overflow-hidden h-[100%] flex"> */}
        <div className=" w-[18%]  flex flex-col h-full bg-white">
          <div className='flex items-center  text-black w-full h-[5%] '>
             <BackButton/>
          </div>
          <div className='w-full  flex items-center h-[50%] '>
            <DemoSidebar/>
          </div>
        </div>
       
        <div className="w-[83%] h-full ">
              <DemoHomepage/>
          </div>
    {/* </div> */}

    </div>
  )
}



const Box = tw.section `
bg-black
text-black
`
