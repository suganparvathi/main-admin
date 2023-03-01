import React, { useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import {FaEye} from "react-icons/fa";
import Overlay from "../../../components/Overlay";

const Filter=[
  {name:"Current Password"},
  {name:"New Password"},
  {name:"Conform Password"},
  
]


export const ProfileSetting = () => {

  const[type,setType]=useState('password');
  const[icon, setIcon]=useState('eyeoff');
  const handleToggle =() =>{
    if(type==='password'){
      setIcon('eye');
      setType("text");
    }
    else{
      setIcon('eyeoff');
      setType('password')
    }
  }

  const[type1,setType1]=useState('password');
  const[icon1, setIcon1]=useState('eyeoff');
  const handleToggle1=() =>{
    if(type1==='password'){
      setIcon1('eye');
      setType1("text");
    }
    else{
      setIcon1('eyeoff');
      setType1('password')
    }
  }

  const[type2,setType2]=useState('password');
  const[icon2, setIcon2]=useState('eyeoff');
  const handleToggle2 =() =>{
    if(type2==='password'){
      setIcon2('eye');
      setType2("text");
    }
    else{
      setIcon2('eyeoff');
      setType2('password')
    }
  }


  const[color, setcolor]=useState(false);
  const colorButton =() => setcolor(!color);

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
  }
  
return ( 
  <div className='relative'>
  {showMoreOptions && (
       <>
       <div className="absolute z-10 bg-red-200">
      <Overlay onClick={handleShowOptions} />
     </div>
    <div className='absolute flex justify-center items-center w-full h-full'>
      <div className='bg-white z-20 flex text-3xl drop-shadow-2xl flex-col font-light justify-center rounded-3xl items-center w-[60%] h-[50%]'>
            <Link to="/password-success">Log Out Of All Devices</Link>
            <Link to="/prof" className='mt-10'>Keep Me Signed In</Link>
      </div>
      </div>
    </>)}

   

<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          
            <BackButton/><p className="text-2xl font-bold">Profile Setting </p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col bg-quaternary rounded-xl">
           <div className="w-full h-[15%] font-bold text-white flex justify-center items-center text-2xl">Update Profile</div>
           <div className="w-full h-[15%] text-3xl text-white ml-10 flex justify-start font-bold items-center">Changed Password</div>
           <div className="w-[70%] flex flex-col  h-[40%]">
           
            <div className="ml-10 text-white font-thin flex flex-row  justify-start items-center w-[80%] h-[30%] text-3xl">
             <p className="w-[40%]">Current Password</p>
                 <input 
                 type={type}
                name="StaffId"
                placeholder=' Current Password' 
                className="  text-2xl  bg-transparent w-[40%]  focus:outline-none text-white border-b-2" /> {" "}<span className="-ml-6">
                  <FaEye type={icon} onClick={handleToggle}/></span>
             </div>
      <div className="ml-10 text-white font-thin flex flex-row justify-start items-center w-[80%] h-[30%] text-3xl">
        <p className="w-[40%]"> New Password</p>
            <input 
                type={type1}
                name="StaffId"
                placeholder=' New Password' 
                className="  text-2xl  bg-transparent w-[40%]  focus:outline-none  text-white border-b-2" /> {" "}<span className="-ml-6">
                   <FaEye type={icon1} onClick={handleToggle1}/></span>
            </div> 
             <div className="ml-10 text-white font-thin flex flex-row justify-start items-center w-[80%] h-[30%] text-3xl"> 
             <p  className="w-[40%]">Conform Password</p>
            <input 
                type={type2}
                name="StaffId"
                placeholder='Conform Password' 
               
                className=" text-2xl  bg-transparent w-[40%]  focus:outline-none  text-white border-b-2" /> {" "}<span className="-ml-6">
                  <FaEye type={icon2} onClick={handleToggle2}/></span>
            </div>
            </div>
            <div className="w-[50%] h-[20%]  flex justify-end ">
            <button
            onClick={colorButton}
            
            className={` w-[25%] h-[40%] drop-shadow-2xl  hover:scale-90 font-bold flex justify-center text-bold text-xl 
             border-2 border-white items-center rounded-full ${color? "bg-green text-white" : "bg-white text-black"}  `}>
              <p onClick={ handleShowOptions}>Save</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
        
       
        )
      }  