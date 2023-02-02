import React, { useCallback, useState } from "react";
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Overlay from "../../../components/Overlay";
 
 function EmailVerify() {
    const[state,setState]=useState<string>();
    const [showMoreOptions, setShowMoreOptions] = useState(false);
  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);}
  
   return (
    <div className="relative">
        {showMoreOptions && (
           <>
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
  <div className="absolute w-[90%] flex-col   flex items-center h-full">
    <div className="w-[55%]  h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-16 items-center">
      <div className='rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[110px] h-[80%]'>
             </div></div></div>
   
  </div>
  </>
)}


    <div className="bg-white w-screen h-screen bg-white flex items-center justify-center">
      <div className="w-[70%] h-[80%] shadow rounded-3xl  overflow-hidden">
       <div className="w-full h-full flex items-center justify-center flex-col p-5 bg-quaternary bg-opacity-60">
        
        <div className='bg-white h-[80%] flex items-center flex-col w-[80%]'>
        <MdEmail className='flex text-7xl  mt-4'/>
        <p className='text-5xl mt-4 font-bold'>Enter Your Mail Id</p>
        {/* <p className='mt-8'>You can reset your password here.</p> */}
        <div className="bg-white px-8 w-[60%] h-[20%] py-4 rounded-lg rounded-2xl">
              <input
                type="mail"
                name="Mail Id"
                placeholder="Mail Id"
                className="border-none text-black pl-2 bg-gray outline-none h-full shadow-lg w-96"/>
        </div>
      
            <Button
                link="/validation-password"
                title="Next"
                className="mt-6 w-[50%] text-white  hover:scale-90 text-2xl rounded-xl h-[15%] bg-tertiaryText"
                onClick={ handleShowOptions} />
          </div>
        </div>
     </div>
     </div>
     </div>
   )
 }
 
 export default EmailVerify;