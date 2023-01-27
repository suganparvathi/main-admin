import React, {useState, useEffect, useCallback,} from "react";
import { FiFilter } from "react-icons/fi";


const members = [

    { name : "Stephen"},
    { name : "Marc"},
    { name : "Muthu"},
    { name : "Adnrew"},
    { name : "Stephen"},
    { name : "Marc"},
    { name : "Muthu"},
    { name : "Adnrew"},
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

const Filter =[
    {name: "Alpahabets"},
    {name: "Id"},
    {name: "Company Number"},
  ]

export const Pilots =() => {
    const [state, setState] = useState<string>();
    
    return(
        


        <div className="flex flex-col items-center mt-10  w-full h-[90%]">
        <div className="flex flex-row  text-white mt-2 w-full h-full font-semibold ">
        
            <div className="w-[8%] h-[35%] ml-6 flex items-center">Filter By <span className="ml-4 text-2xl"><FiFilter/></span></div>
            
            {
            Filter.map((data) => (
            <button 
            onClick={() =>{
                console.log(data.name,"pilots")
                setState(data.name)
            }}
            className={`w-[12%] h-[40%] ml-2 flex justify-center  hover:bg-blue-200 items-center rounded-3xl  border border-white 
            ${data.name ===state? "bg-green text-white" : "bg-white text-black"} `}>{data.name}</button>
            ))   
        }

        </div>  



        <div className="w-full flex-row text-white items-center -mt-16 flex w-[90%] h-full  overflow-x-scroll">
            {members.map(({name}) => (
            <div className='flex items-center justify-center ml-12 flex flex-col  w-[70%] h-full'>
       
                <div className="w-[50px]"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[50px] h-[50px]"/></div>
                <p>{name}</p>
        
            </div>
            ))}
    </div>
</div>


    )
}



