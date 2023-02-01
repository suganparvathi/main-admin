import React from 'react'
import { HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
 
 function ForgotPassword() {
  
   return (
    <div className="bg-white w-screen h-screen bg-white flex items-center justify-center">
      <div className="w-[60%] h-[80%] shadow rounded-3xl  overflow-hidden">
       <div className="w-full h-full flex items-center justify-center flex-col p-5 bg-quaternary bg-opacity-60">
        
        <div className='bg-white h-[80%] flex items-center flex-col w-[80%]'>
        <HiLockClosed className='flex text-7xl  mt-4'/>
        <p className='text-5xl mt-4 font-bold'>Forgot Password?</p>
        <p className='mt-8'>You can reset your password here.</p>
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
                className="mt-6 w-[60%] text-white text-2xl rounded-xl h-[15%] bg-tertiaryText"
              />
          </div>
        </div>
     </div>
     </div>
   )
 }
 
 export default ForgotPassword;