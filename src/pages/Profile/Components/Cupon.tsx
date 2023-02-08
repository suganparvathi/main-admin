import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import { FaBus } from "react-icons/fa";
import {TiArrowUnsorted } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Filter =[
  {name: "Recent"},
  {name: "Date"},
  {name: "Month"},
  {name: "Time"},
]
const members = [
    { name : "Alfred Used Cash Back Offer Cupon (OLA Bus Company Driver)",date:"Date : 04:08:2021",time:"Time : 11:00 A.M", 
    img:"https://tse4.mm.bing.net/th?id=OIP.fqOUPgxfEXOmfLQ6QHS73wAAAA&pid=Api&P=0"},
    { name : "Andrew Used 20% Shopping Offer Cupon (Jopay User)",date:"Date : 05:08:2021",time:"Time : 11:00 A.M",
    img:"https://tse4.mm.bing.net/th?id=OIP.fqOUPgxfEXOmfLQ6QHS73wAAAA&pid=Api&P=0"},
    { name : "Kaira Used Black Friday Offer Cupon (OLA Bus Passenger)",date:"Date : 05:08:2021",time:"Time : 11:00 A.M",
    img:"https://tse4.mm.bing.net/th?id=OIP.slzUvax1b9LiqpdJTi2H0wHaHa&pid=Api&P=0"},
   ]  

export const Cupon = () => {

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
            <div className="w-full h-[10%]  flex justify-center items-center text-white font-bold text-3xl">Cupon</div>
            <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Name/ Ticket Id / Cupon Id / Jopay Id / Driver ID / Bus Company"/> </div>
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
                   className={`w-[10%] h-[50%] ml-2 flex justify-center  items-center rounded-3xl
                  ${data.name === state ? "bg-green text-white" : "bg-white"}`}>{data.name}
                  </button>
                  
                    ))
                }
                </div> 
                  <div className="flex flex-end w-[15%] h-[50%] ml-2 flex justify-center text-2xl items-center text-black rounded-3xl bg-white mr-2 ">Sort By<TiArrowUnsorted/></div>
            </div>
            <div className="w-full h-full flex  flex-col ">
             {members.map((a) => (
            <div className="w-full h-[17%] flex flex-row">
                  <div className=" w-full h-full flex flex-start text-xl font-bold text-white">
                     <div className="w-[80%] ml-4 flex flex-row">
                    {/* <p className="rounded-full bg-white w-[70px] flex justify-center items-center text-2xl text-quaternary h-[70px]"><FaBus/></p></div> */}
                    <img src ={a.img} alt="" className="w-[70px] h-[70px] rounded-full ml-4"/>
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
            </div>
            ))}
      

   </div>
          </div>
        </div>
      </div>
    </div>
        
       
        )
      }  