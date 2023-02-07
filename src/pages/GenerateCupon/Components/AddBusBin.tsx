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
import {TbArrowsRandom} from 'react-icons/tb';



// const members = [
//   { name : "OLA Bus", per: "50% Recharge Offer"},
//   { name : "OLA Bus", per: "15% Recharge Offer"},
  
// ]  

const Filter=[
  {name:"Time"},
  {name:"Offers"},
  {name:"Date"},
  {name:"Ascending Order"},
  {name:"Descending Order"},
]

export const AddBusBin= () => {

  const[state,setState]=useState<string>();

const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");
   const [showMoreOptions2, setShowMoreOptions2] = useState(false);
  const handleShowOptions2 = () => {
     setShowMoreOptions2(!showMoreOptions2);
     
    }


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
      <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p></div></div></div>
    <div className="w-[55%] rounded-3xl text-white flex flex-col justify-center text-2xl items-start z-20  h-[55%] bg-black">
      <p className="flex font-light flex-row p-4 ml-4 ">Offer Given by : <span className="ml-4 font-bold">Jopay</span></p>
      <p className="flex font-light flex-row p-4 ml-4">Cupon Detail : <span className="ml-4 font-bold">Purchase Card</span></p>
      <p className="flex font-light flex-row p-4 ml-4">Applicable For : <span className="ml-4 font-bold">All Users</span></p>
      <p className="flex font-light flex-row p-4 ml-4">Valid From : <span className="ml-4 font-bold">8/0/2021 - 15/9/2021</span></p>
    </div>
  </div>
  </>
)}

{showMoreOptions2 && (
           <>
           <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions2} />
         </div>
         <div className="absolute w-[90%] flex-col   flex items-center h-full">
    <div className="w-[55%]  h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-16 items-center">
      <div className='rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[110px] h-[80%]'>
      <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p></div></div></div>
    <div className="w-[55%] rounded-3xl text-white flex flex-col justify-center items-center  items-start z-20  h-[55%] bg-black">
      <p className="text-2xl">Do You Want To Restore this offer ?</p>
      <div className="flex text-2xl font-bold flex-col">
        <p className="mt-8">Yes</p>
        <p className="mt-4">NO</p>
      </div>
    </div>
  </div>
     </>)}


<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full  h-[4%]">
          <BackButton/>
            </div>
          <div className="w-full h-[7%] flex  justify-center items-center text-3xl font-bold">
           <p className="">Bin</p>
          </div>
          
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search by Company/ ID"/> </div>
            <div className="w-full h-[10%]  flex justify-center text-white font-bold ">
                <div className="flex flex-row text-white w-[90%] h-full text-xl font-bold">
                  <div className="w-[5%] h-[50%] ml flex justify-end font-extralight text-white  items-center "><FiFilter className="text-white text-3xl ml-4"/></div>
                {
                  Filter.map((a)=>(
                  <button 
                  onClick={()=>{
                    console.log(a.name,"bin")
                    setState(a.name)

                  }}
                  className={`w-[17%] h-[70%] ml-2 flex justify-center  hover:scale-90 border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl
                  ${a.name===state? "bg-green text-white" : "bg-white text-black"}`}>{a.name}</button>
                ))}
                  </div> 
                  
            </div>
            <div className="w-full h-full flex flex-col">
            
                <div className="w-full h-[22%]  flex flex-row">
                <div className=" w-full  h-[90%] flex flex-start text-xl font-extralight text-white">
                <div className='rounded-full ml-14 mt-4 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                    <p className="bg-auto bg-logo bg-no-repeat bg-center bg-cover rounded-lg w-12 h-10"></p>
                      </div>
                   <div className="ml-2 text-xl mt-4">
                      <p>OLA Bus</p>
                      <p>50% Recharge Offer</p>
                      <p>Created Time 4:00 Am</p>
                      <p>Date : 8/9/2021</p>
                  </div>
                </div>
                <div className="flex flex-end w-[15%] items-center h-full text-white">
            <div className=" flex flex-row font-bold  text-3xl">
              <p className="ml-4"> <FaEye onClick={ handleShowOptions}/></p>
              <p className="ml-4"><TbArrowsRandom/></p>
              <p className="ml-4"> < MdDeleteForever onClick={ handleShowOptions2}/> </p>
            </div>
         </div>
          </div>

          <div className="w-full h-[30%] mt-14 flex flex-row">
                <div className=" w-full  h-[90%] flex flex-start text-xl font-extralight text-white">
                <div className='rounded-full ml-14 mt-4 drop-shadow-xl bg-white justify-center flex items-center w-[70px] h-[70px]'>
                      <FaBus className="text-4xl  text-quaternary"/>
                      </div>
                   <div className="ml-2 text-xl mt-4">
                      <p>OLA Bus</p>
                      <p>Cash Back Offer</p>
                      <p>Created Time 4:00 Am</p>
                      <p>Date : 8/9/2021</p>
                  </div>
                </div>
                <div className="flex flex-end w-[15%] items-center h-full text-white">
            <div className=" flex flex-row font-bold  text-3xl">
              <p className="ml-4  hover:scale-90"> <FaEye onClick={ handleShowOptions}/></p>
              <p className="ml-4  hover:scale-90"><TbArrowsRandom/></p>
              <p className="ml-4  hover:scale-90"> < MdDeleteForever onClick={ handleShowOptions2}/> </p>
            </div>
         </div>
          </div>
        
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        
       
        )
      }  