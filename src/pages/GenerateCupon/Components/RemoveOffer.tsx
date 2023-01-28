import React, { useCallback, useState } from "react";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Overlay from "../../../components/Overlay";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import {MdModeEdit} from 'react-icons/md'


const members = [
  { name : "OLA Bus", per: "50% Recharge Offer"},
  { name : "OLA Bus", per: "15% Recharge Offer"},
  
]  

const Filter=[
  {name:"Time"},
  {name:"Offers"},
  {name:"Date"},
  {name:"Ascending Order"},
  {name:"Descending Order"},
]

export const RemoveOffer = () => {
  const[state,setState]=useState<string>();

const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");

   const [showMoreOptions1, setShowMoreOptions1] = useState(false);
  const handleShowOptions1 = () => {
     setShowMoreOptions1(!showMoreOptions1);
     
    }

return ( 
    <div className="relative">
       {showMoreOptions && (
           <>
           <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className='absolute flex mt-14 justify-center items-center w-full h-full'>
     <div className='bg-black z-20 flex drop-shadow-2xl  flex-col text-xl  rounded-3xl w-[60%] h-[65%]'>
      <div className="w-full h-[40%] flex flex-col text-white justify-center items-center">
      <div className='rounded-full  drop-shadow-xl bg-white justify-center flex items-center w-[12%] h-[60%]'>
      <FaBus className="text-4xl text-quaternary"/>
      </div>
      <p className="font-bold text-4xl mt-2">OLA Bus</p>
      </div>
      <div className="w-full text-white font-bold text-4xl h-[25%] flex justify-center items-center">
        Are You Sure You Want To Delete
      </div>
      <div className="w-full flex flex-row justify-evenly items-center text-4xl font-bold text-white h-[20%]">
        
        <p className=""><Link to="/deleted-successfully">Yes</Link></p>
        <p className="">No</p>

      </div></div></div>
     </>
)}

{showMoreOptions1 && (
           <>
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions1} />
         </div>
  <div className="absolute w-[90%] flex-col   flex items-center h-full">
    <div className="w-[55%]  h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-16 items-center">
      <div className='rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[110px] h-[80%]'>
      <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p></div>
              </div></div>
    <div className="w-[55%] rounded-3xl text-white flex flex-col justify-center text-2xl items-start z-20  h-[55%] bg-black">
      <p className="flex font-light flex-row p-4 ml-4 ">Offer Given by : <span className="ml-4 font-bold">Jopay</span></p>
      <p className="flex font-light flex-row p-4 ml-4">Cupon Detail : <span className="ml-4 font-bold">Purchase Card</span></p>
      <p className="flex font-light flex-row p-4 ml-4">Applicable For : <span className="ml-4 font-bold">All Users</span></p>
      <p className="flex font-light flex-row p-4 ml-4">Valid From : <span className="ml-4 font-bold">8/0/2021 - 15/9/2021</span></p>
    </div>
  </div>
  </>
)}




<div className="w-screen h-screen overflow-hidden  flex">
      <div className="w-[100%] flex-col overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex w-full h-[5%]">
         
            <BackButton/>
            </div>
          <div className="w-full h-[5%] justify-center flex  text-3xl  font-bold">
           <p className=""> Remove Offer</p>
          </div>
          
       
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search your Bus Company/Bus ID/Number"/> </div>
            <div className="w-full h-[10%]  flex justify-center text-white font-bold ">
                <div className="flex flex-row text-white w-[90%] h-full text-xl font-bold">
                  <div className="w-[5%] h-[50%] ml flex justify-end font-extralight text-white  items-center "><FiFilter className="text-white text-3xl ml-4"/></div>
                  {
                    Filter.map((a)=>(
                  <button
                  onClick={()=>{
                    console.log(a.name,"removeOffer")
                    setState(a.name)
                  }
                  } 
                  className={`w-[17%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl
                  ${a.name===state? "bg-green text-white" : "bg-white text-black"}`}>{a.name}</button>
                    ))  
                }
                  </div> 
                  
            </div>
            <div className="w-full h-full flex flex-col">
            {members?.map((m:any) => (
                <div className="w-full h-[22%]  flex flex-row">
                <div className=" w-full  h-[90%] flex flex-start text-xl font-extralight text-white">
                <div className='rounded-full ml-14 mt-4 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                    <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p>
                      {/* <FaBus className="text-4xl  text-quaternary"/> */}
                      </div>
                   <div className="ml-2 text-xl mt-4">
                      <p>{m.name}</p>
                      <p>{m.per}</p>
                      <p>Created Time 4:00 Am</p>
                      <p>Date : 8/9/2021</p>
                  </div>
                </div>
                <div className="flex flex-end w-[15%] items-center h-full text-white">
            <div className=" flex flex-row font-bold  text-3xl">
              <p className="ml-4"> <FaEye onClick={ handleShowOptions1}/></p>
              <p className="ml-4"><MdModeEdit/></p>
              <p className="ml-4"> < MdDeleteForever onClick={ handleShowOptions}/> </p>
            </div>
         </div>
          </div>
          ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        
       
        )
      }  