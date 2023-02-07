import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { Link } from 'react-router-dom';
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import {MdModeEdit} from 'react-icons/md'
import { ToggleButton } from "../../../components/ToggleButton";
import Overlay from "../../../components/Overlay";

const Filter =[
  {name: "Name"},
  {name: "Mail Id"},
  {name: "Emp.ID"},
  {name: "Create Date"},
  {name: "Month"},
  {name: "Date"},
]
const members = [
    { name : "Elizabeth Victoria"},
    { name : "Edward Kenway"},
    { name : "Lisa Annie"},
   ]  
   
export const ViewMember = () => {
   
 const [state, setState] = useState<string>();
 
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
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
  <div className="absolute w-full flex-col   flex items-center h-full">
    <div className="w-[65%] -ml-20 h-[20%] z-30  rounded-3xl">
    <div className="w-full h-full  flex flex-col mt-16 items-center">
       <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full drop-shadow-2xl  bg-white justify-center flex items-center w-[110px] h-[80%]"/>
      <div className="w-full flex justify-center text-2xl font-bold items-center h-[40%]">Elizabeth Victoria</div>        
    </div>
    
    </div>
    <div className="w-[65%] rounded-3xl text-black flex justify-center items-center flex-row z-20  -ml-20 h-[65%] bg-white">
      <div className="w-[85%]  border-r-2 border-black h-[60%]">
       
        <p className="ml-8 mt-6 text-2xl">Employee Phone Number :<span className="font-bold ml-2 text-2xl"> +1-897-097-6789</span></p>
        <p className="ml-8 mt-6 text-2xl">Employee Code :<span className="font-bold ml-2 text-2xl">TYPOLA78</span></p>
        <p className="ml-8 mt-6 text-2xl">Employee Address<span className="font-bold ml-2 text-2xl"> Florescence Street, CA-2, USA-1</span></p>
        <p className="ml-8 mt-6 text-2xl">Employee Designation :<span className="font-bold ml-2 text-2xl">Admin Panel Task Operator</span></p>
        <p className="ml-8 mt-6 text-2xl">Company Name :<span className="font-bold ml-2 text-2xl">JOPAY</span></p>
        <p className="ml-8 mt-6 text-2xl">Company ID<span className="font-bold ml-2 text-2xl">JOPAY-908</span></p>
      </div>
      <div className="w-[45%] flex flex-col  text-2xl justify-center h-full">
      <p className="ml-10  ">Login ID :<span className="ml-2 font-bold">JOPAY-908</span></p>
      <p className="ml-10 mt-6">Password :<span className="ml-2 font-bold">LB_2710</span></p>
      </div>
    </div>
  </div>
  </>


)}

    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%] ">
          <div className="w-full h-full flex-row flex items-center ">
            <BackButton/><p className="text-2xl font-bold">View Memberst</p>
          </div>
          
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[7%]  text-white text-xl"><Searchbar placeholder= "Search By Name/Mail ID/Employee Id/Phone Number"/> </div>
            <div className="w-full h-[15%]   flex justify-center items-center font-bold ">
                <div className="flex flex-row items-center text-black w-full h-full text-2xl font-bold ">
                  <button 
                  className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl text-white "><FiFilter className="text-text"/>Filter</button>
                  {
                    Filter.map((data) =>(
                   <button 
                   onClick={() =>{
                   console.log(data.name, "verify")
                   setState(data.name)
                   }}
                   className={`w-[14%] h-[50%] ml-2  hover:scale-90 flex justify-center  items-center rounded-3xl
                  ${data.name === state ? "bg-green text-white" : "bg-white"}`}>{data.name}
                  </button>
                  
                    ))
                }
                </div> 
                  
            </div>
            <div className="w-full h-[50%] overflow-y-auto flex  flex-col ">
             {members.map((a) => (
            <div className="w-full h-[50%] mb-6 flex flex-row">
                  <div className=" w-full h-full flex flex-start text-xl font-bold text-white">
                     <div className="w-[70px] ml-4 mt-6"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/></div>
                     <div className="ml-4 text-2xl mt-8">
                        <p>{a.name}</p>
                     <div className=" flex flex-row mt-4 text-2xl font-bold">
                        <p className="ml-2 cursor-pointer  hover:scale-90"onClick={ handleShowOptions}> <FaEye /> </p>      
                        <p className="ml-4 cursor-pointer  hover:scale-90"> < MdDeleteForever /> </p>
                        <p className="ml-4 cursor-pointer  hover:scale-90"><Link to="/edit-member"><MdModeEdit/></Link></p>
                     </div>
                    </div>
                  </div>
                     <div className="flex flex-end w-[18%] items-center h-full text-white">
                      <div className=" flex flex-row cursor-pointer font-bold text-xl">
                      <ToggleButton className='' isBig={false}/>
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