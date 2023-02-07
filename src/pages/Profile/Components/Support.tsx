import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import {TiArrowUnsorted } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Filter =[
  {name: "Recent"},
  {name: "Date"},
  {name: "Month"},
  {name: "Time"},
]
const members = [
    { name : "Annie Completed Customer Query",date:"Date : 05:08:2021",time:"Time : 01:00A.M"},
    { name : "You Completed Customer Query",date:"Date : 05:08:2021",time:"Time : 01:00A.M"},
    { name : "Edward Completed Customer Query",date:"Date : 05:08:2021",time:"Time : 01:00A.M"},
   ]  

export const Support = () => {

  const [state, setState] = useState<string>();
 
  
return ( 
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%] ">
          <div className="w-full h-full flex-row flex items-center ">
            <BackButton/><p className="text-2xl font-bold">Notifucation Support</p>
          </div>
          
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
            <div className="w-full h-[10%]  flex justify-center items-center text-white font-bold text-3xl">Direct Support</div>
            <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Customer Name/Passenger/Jopay User/Ticket Id/Jopay ID"/> </div>
            <div className="w-full h-[15%]  flex justify-center items-center font-bold ">
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
                   className={`w-[10%] h-[50%] ml-2 flex  hover:scale-90 justify-center  items-center rounded-3xl
                  ${data.name === state ? "bg-green text-white" : "bg-white"}`}>{data.name}
                  </button>
                  
                    ))
                }
                </div> 
                  <div className="flex flex-end w-[15%] h-[50%] ml-2 flex justify-center text-2xl items-center text-black rounded-3xl bg-white mr-2 ">Sort By<TiArrowUnsorted/></div>
            </div>
            <div className="w-full h-[50%] overflow-y-auto  flex flex-col ">
             {members.map((a) => (
            <div className="w-full h-[50%] mb-8 flex flex-row overscroll-y-auto">
                  <div className=" w-full h-full flex flex-start text-xl font-bold text-white">
                     <div className="w-[70px] ml-4"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/></div>
                     <div className="ml-8">
                        <p>{a.name}</p>
                        <p>{a.date}</p>
                        <p>{a.time}</p>
                        
                     </div>
                  </div>
                     <div className="flex flex-end w-[18%] items-center h-full text-white">
                      <p className="border-b-2 border-white font-bold text-xl">View Full Details</p>
                    </div>
            </div>
            ))}
      

   </div>
          </div>
        </div>
      </div>
    </div>
        
       
        )
      }  