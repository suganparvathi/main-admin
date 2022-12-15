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



export const Pilots =() => {
    
    return(
        


        <div className="flex flex-col items-center  w-full h-full  ">
        <div className="flex flex-row items-center text-white w-full h-full font-semibold ">
        
            <div className="w-[8%] h-[40%] ml-6 flex items-center">Filter By <span className="ml-4 text-2xl"><FiFilter/></span></div>
            <button className="w-[13%] h-[40%] ml-2 flex justify-center items-center rounded-3xl  border border-white">Alapahabets</button>
            <div className="w-[13%] h-[40%] ml-2 flex justify-center items-center rounded-3xl  border border-white">Id</div>
            <div className="w-[13%] h-[40%] ml-2 flex justify-center items-center rounded-3xl  border border-white">Company Number</div>
           

        </div>  



        <div className="w-full flex-row text-white items-center flex w-[90%] h-full  overflow-x-scroll">
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



