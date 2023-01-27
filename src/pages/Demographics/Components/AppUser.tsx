import React, {useState, useEffect, useCallback,} from "react";
import { FiFilter } from "react-icons/fi";
import Overlay from "../../../components/Overlay";
import { DemoUserHistory } from "./DemoUserHistory";

const members = [
    { name : "Harsha"},
    { name : "Muthu"},
    { name : "Bin"},
    { name : "Adnrew"},
    { name : "Stephen"},
    { name : "Marc"},
    { name : "Muthu"},
    { name : "Adnrew"},
    { name : "Stephen"},
    { name : "Marc"},
    { name : "Muthu"},
    { name : "Adnrew"},
    { name : "Stephen"},
    { name : "Marc"},
    { name : "Muthu"},
    { name : "Adnrew"},
    { name : "Stephen"},
    { name : "Marc"},
    { name : "Muthu"},
    { name : "Adnrew"},
]

const Filter = [
    {name:"Alapahabets"},
    {name:"Id"},
    {name:"KYC Verified Users"},
    {name:"KYC Not Verified"},
    {name:"View History"},
    {name:"New Users"},
]


export const AppUser =() => {
const[state, setState]= useState<string>();
   



    return(  
        <div>
            <div className="flex flex-col  absolute w-full mt-6 h-full">
                <div className="flex flex-row items-center mt-2 text-white w-full h-[40%] font-semibold ">
                    <div className="w-[8%] h-[40%] ml-4  flex items-center">Filter By <span className="ml-4 text-2xl"><FiFilter/></span></div>
                   {
                    Filter.map((data) => (
                    <button 
                    onClick={() =>{
                        console.log(data.name,"appuser")
                        setState(data.name)
                    }}
                    className={`w-[13%] h-[50%] ml-2 flex justify-center items-center  rounded-3xl  border border-white 
                    ${data.name ===state? "bg-green text-white" : "bg-white text-black"} `}>{data.name}</button>
                    )) 
                }
                </div>
               


                    <div className="w-full flex justify-center -mt-8 items-center h-[70%]">

                <div className="w-full flex-row  text-white flex w-[80%] h-[75%] overflow-x-scroll">
                    {members.map(({name}) => (
                    <div className='flex items-center justify-center ml-12 flex flex-col  w-[70%] h-full'>
               
                        <div className="w-[50px]" > <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[50px] h-[50px]"/></div>
                        <p>{name}</p>
                
                    </div>
                    ))}
            </div>
            </div>
    </div>
   
    
     </div>
    //  </div>

    )
}