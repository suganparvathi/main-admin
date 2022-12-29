
import React, { useCallback, useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import Overlay from "./Overlay";
const Notifcation = () => {

    const [showMoreOptions, setShowMoreOptions] = useState(false);
  

    const handleShowOptions = () => {
      setShowMoreOptions(!showMoreOptions);
      
     }
     console.log(showMoreOptions,"sugan");

    return (
        <div>
         <div className='relative'>
      {showMoreOptions && (
           <>
           <div className="absolute z-10 bg-red-200">
          <Overlay onClick={handleShowOptions} />
         </div>
        <div className='absolute flex justify-center items-center w-full h-full'>
          <div className='bg-black z-20 flex drop-shadow-2xl flex-col text-xl justify-center items-center w-full h-full'>
            <p className=''></p>
            {/* <p className='mt-10'>heloowwwww</p> */}

          </div>

        </div>
        </>


)}



            <div className="flex justify-end items-center text-black w-full hh-full">
            <div className="mr-4 text-2xl"><IoMdNotificationsOutline/></div>
            <div className="flex flex-row mr-4">
                <p className="mr-2 text-2xl"><FaUserCircle/></p>
                <p>Kete Wilson</p>
            </div>
            <div className="mr-6 text-2xl"onClick={ handleShowOptions}><FaAngleDown/></div>
        </div>
        </div>
         </div>

        );
    };
    
    export default Notifcation;