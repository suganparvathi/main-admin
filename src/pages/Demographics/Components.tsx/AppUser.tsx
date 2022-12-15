import React, {useState, useEffect, useCallback,} from "react";
import { FiFilter } from "react-icons/fi";

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


export const AppUser =() => {

    // const [showMoreDetails, setShowMoreDetails] = useState (false);

    // const handleShowDetails = () =>{
    //     setShowMoreDetails(!showMoreDetails);
    // }

    // console.log(showMoreDetails,"AppUser");

    const [bank, setBank] = useState(1)

    console.log(bank);



    return(  
        <div>

        {/* <div className="relative">
            {showMoreDetails &&(
                <>
                <div className="absolute z-10 bg-red-200">

                </div>
                </>
            )} */}



    <div className="flex flex-col  absolute w-full h-full">
                <div className="flex flex-row items-center  text-white w-full h-[40%] font-semibold ">
                    
                
                    <div className="w-[8%] h-[40%] ml-4  flex items-center">Filter By <span className="ml-4 text-2xl"><FiFilter/></span></div>
                    <div className="w-[11%] h-[50%] ml-2 flex justify-center items-center rounded-3xl  border border-white">Alapahabets</div>
                    <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl  border border-white">Id</div>
                    <div className="w-[13%] h-[50%] ml-2 flex justify-center items-center rounded-3xl  border border-white">KYC Verified Users</div>
                    <div className="w-[13%] h-[50%] ml-2 flex justify-center items-center rounded-3xl  border border-white">KYC Not Verified</div>
                    <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl  border border-white">View History</div>
                    <div className="w-[10%] h-[50%] ml-2 flex justify-center items-center rounded-3xl  border border-white">New users</div>

                </div>
               


                    <div className="w-full flex justify-center items-center h-[70%]">

                <div className="w-full flex-row  text-white flex w-[80%] h-[75%] overflow-x-scroll">
                    {members.map(({name}) => (
                    <div className='flex items-center justify-center ml-12 flex flex-col  w-[70%] h-full'>
               
                        <div className="w-[50px]"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[50px] h-[50px]"/></div>
                        <p>{name}</p>
                
                    </div>
                    ))}
            </div>
            </div>
    </div>
   
    
     </div>

    )
}