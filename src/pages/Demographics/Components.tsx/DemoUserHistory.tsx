import React, {useState, useEffect, useCallback,} from "react";
import { Link } from 'react-router-dom'
import Searchbar from '../../../components/Searchbar'
import Notifcation from '../../../components/Notification'
import { JopayAppUser } from './JopayAppUser'
import BackButton from '../../../components/BackButton'
import Overlay from "../../../components/Overlay";
import { AppUser } from "./AppUser";
import { Pilots } from "./Pilots";
import { FiFilter } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiLabel } from "react-icons/bi";


 
  const jopaymembers = [
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

const pilotsmembers = [
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

const PilotsFilter =[
    {name: "Alpahabets"},
    {name: "Id"},
    {name: "Company Number"},
  ]

const JopayFilter = [
    {name:"Alapahabets"},
    {name:"Id"},
    {name:"KYC Verified Users"},
    {name:"KYC Not Verified"},
    {name:"View History"},
    {name:"New Users"},
]

const notificationTypes = [
    { label: "Jopay App users", value: "jopay App users" },
    { label: "Pilots And Co-Pilots", value: "pilots and co-pilots" },
   
  ];
export const DemoUserHistory = () => {

    const[jopay, setJopay]= useState<string>();

    const[pilots, setPilots]= useState<string>();
    
   
   

const [showMoreOptions, setShowMoreOptions] = useState(false);
const handleShowOptions = () => {
setShowMoreOptions(!showMoreOptions);
}
 
const [showMoreOptions1, setShowMoreOptions1] = useState(false);
const handleShowOptions1 = () => {
setShowMoreOptions1(!showMoreOptions1);
}
const [showType, setShowType] = useState("Jopay App users");
 


 

    return (
        <div className="relative">
              {showMoreOptions && (
           <>
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
              <div className="absolute w-full justify-center flex h-full">
                <div className="w-[45%] h-[60%] z-20 bg-black flex-col text-white rounded-2xl">
                <p className="flex justify-center text-2xl w-full h-[10%] items-center font-bold ">Jopay User</p>
                <div className="flex flex-row w-[50%] flex justify-start items-center h-[20%]  ml-4"><img className="w-[20%] h-[80%] ml-4 rounded-full" src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"/><p className="ml-4 font-bold text-2xl">Harsha</p></div>
                <p className="flex p-4 flex-row text-2xl">Phone Number :<span className="ml-4 font-bold">+1-789-098-4568</span></p>
                <p className="flex p-4 flex-row text-2xl">Jopay Id :<span className="ml-4 font-bold">568BTR67</span></p>
                <p className="flex p-4 flex-row text-2xl">KYC :<span className="ml-4 font-bold">Verified</span><AiFillCheckCircle className="ml-4 text-green mt-2"/></p>
                <div className="w-full h-[25%] justify-center text-xl font-bold items-center flex flex-row">
                    <Link to="/view-user-history" className="w-[40%] h-[40%] items-center justify-center flex rounded-3xl drop-shadow-2xl bg-white text-black">View User History</Link>
                    <button className="w-[40%] h-[40%] ml-10  rounded-3xl  items-center justify-center flex drop-shadow-2xl bg-white text-black">Download User History</button>

                </div>
                <div></div>
                </div></div>

                </>
)}
     
     
     {showMoreOptions1 && (
           <>
           <div className="absolute z-10">
          <Overlay onClick={handleShowOptions1} />
         </div>
         <div className="absolute w-full justify-center flex h-full">
                <div className="w-[40%] h-[70%] z-20 bg-black flex-col text-white rounded-2xl">
                <p className="flex justify-center text-2xl w-full h-[10%] items-center font-bold ">Pilots And Co-Pilots</p>
                <div className="flex flex-row w-[50%] flex justify-start items-center h-[20%]  ml-4"><img className="w-[30%] h-[80%] ml-4 rounded-full" src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"/><p className="ml-4 font-bold text-2xl">Harsha</p></div>
                <p className="flex p-2  ml-4 flex-row text-xl">Phone Number :<span className="ml-4 font-bold">+1-789-098-4568</span></p>
                <p className="flex p-2 ml-4 flex-row text-xl">Currently Working Bus Company :<span className="ml-4 font-bold">OLA</span></p>
                <p className="flex p-2 ml-4 flex-row text-xl">Owner Name :<span className="ml-4 font-bold">James Stewart</span></p>
                <p className="flex p-2 ml-4 flex-row text-xl">ID :<span className="ml-4 font-bold">OLA45C45</span></p>
                <p className="flex p-2 ml-4 flex-row text-xl">Driving License Number :<span className="ml-4 font-bold">17890YT</span></p>
                <p className="flex p-2 ml-4 flex-row text-xl">KYC :<span className="ml-4 font-bold">Verified</span><AiFillCheckCircle className="ml-4 text-green mt-2"/></p>
                <div className="w-full h-[25%] justify-center text-xl font-bold  flex flex-row">
                    <Link to="/pilots-and-copilots-history" className="w-[40%] h-[40%] items-center mt-4 justify-center flex rounded-3xl drop-shadow-2xl bg-white text-black">View User History</Link>
                    <button className="w-[40%] h-[40%] ml-10  rounded-3xl mt-4  items-center justify-center flex drop-shadow-2xl bg-white text-black">Download User History</button>

                </div>
                <div></div>
                </div></div>

                </>


)}
     
     
     
     
        <div className='flex-col flex w-[96vw] h-screen'>
        <div className='flex flex-col items-center w-[100%] h-full '>
        <div className='flex flex-row w-full h-[5%]'>
            <div className='flex justify-start text-3xl font-bold w-full text-black h-full'>
                <BackButton/><p className='ml-2'> User History</p>
            </div>
          
        </div>
        <div className='flex flex-row  w-[75%] mt-10 items-center h-[15%] text-2xl'>
        <div className="p-[6px] px-8  text-2xl flex justify-center items-center w-full h-full flex flex-col shadow-md rounded-l-full bg-secondary">
            <div className="font-bold">5000</div>
            <div>Total Drivers And Co Drivers</div>
        </div>
        <div className="p-[6px] px-8 text-2xl flex flex-col justify-center items-center w-full h-full  shadow-md border-l-2 border-gray-400  bg-secondary">
        <div className="font-bold">20,000</div>
            <div>Total Drivers And Co Drivers</div> 
        </div>
        <div className="p-[6px] px-8 text-2xl flex flex-col justify-center items-center w-full h-full shadow-md border-l-2 border-gray-400  rounded-r-full bg-secondary">
        <div className="font-bold">20,000</div>
            <div>Total Drivers And Co Drivers</div> 
        </div>
        </div>
        <div className="w-[100%] h-[60%]  mt-6 flex justify-center items-center flex-col">
            <div className='flex items-center   justify-center w-[55%]  mt-4 h-[10%] text-2xl '>
             <div className="p-[6px] px-8  text-2xl flex justify-center items-center w-full h-full flex flex-row shadow-md  rounded-l-2xl">
            <div>Total number Of users</div>
            <div className="font-bold ml-4">: 27,000</div>
        </div>
           <div className="p-[6px] px-8 text-2xl flex flex-row justify-center items-center w-full h-full shadow-md border-l-2 border-gray-400  rounded-r-2xl">
        <div>KYc Verified Users</div>
            <div className="font-bold ml-4">: 10,000</div> 
        </div>
        </div> 
         <div className='flex flex-col items-center w-[95%]  h-[95%] mt-6 bg-quaternary rounded-3xl' > 
         <div className=" flex justify-center items-center  text-white mt-2 w-[70%] h-[30%] ">
                         <div className=" flex  items-center justify-center   text-3xl w-full h-full border-b-4 border-white  gap-12 p-4  ">
                             
                            <button className={`${ showType ==="Jopay App users"? " text-green underline underline-offset-8 decoration-white font-bold underline" : "text-white"}`}onClick={()=> setShowType("Jopay App users")}>Jopay App users</button>
                            <button className={`${showType ==="Pilots And Co-Pilots"? " text-green underline underline-offset-8 decoration-white font-bold underline" : "text-white "}`}onClick={()=> setShowType("Pilots And Co-Pilots")} >Pilots And Co-Pilots</button>
                            </div>
                </div>
                <div className="w-full ml-4  h-[15%] -mt-2 text-white">
                <Searchbar placeholder= "Search By Name/ID/Phone Number"/>
            </div>

            <div className="text-white relative flex flex-row  justify-center items-center w-full  h-full font-semibold ">
         
                {
                   showType ==="Jopay App users"?
                    <>
                <div className="flex flex-col  absolute w-full mt-6 h-full">
                <div className="flex flex-row items-center mt-2 text-white w-full h-[40%] font-semibold ">
                    <div className="w-[8%] h-[40%] ml-4  flex items-center">Filter By <span className="ml-4 text-2xl"><FiFilter/></span></div>
                   {
                    JopayFilter.map((j) => (
                    <button 
                    onClick={() =>{
                        console.log(j.name,"appuser")
                        setJopay(j.name)
                    }}
                    className={`w-[13%] h-[50%] ml-2 flex justify-center items-center  rounded-3xl  border border-white 
                    ${j.name ===jopay? "bg-green text-white" : "bg-white text-black"} `}>{j.name}</button>
                    )) 
                }
                </div>
               <div className="w-full flex justify-center -mt-8 items-center h-[70%]">
                    <div className="w-full flex-row  text-white flex w-[80%] h-[75%] overflow-x-scroll">
                    {jopaymembers.map(({name}) => (
                    <div className='flex items-center justify-center ml-12 flex flex-col  w-[70%] h-full'>
               <div className="w-[50px]" > <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" 
                        className="rounded-full  w-[50px] h-[50px]"onClick={handleShowOptions} /></div>
                        <p>{name}</p>
                
                    </div>
                    ))}
            </div>
            </div>
    </div>
                   </>
                    :
                    <>
                   <div className="flex flex-col items-center mt-10  w-full h-[90%]">
            <div className="flex flex-row  text-white mt-2 w-full h-full font-semibold ">
        <div className="w-[8%] h-[35%] ml-6 flex items-center">Filter By <span className="ml-4 text-2xl"><FiFilter/></span></div>
            {
                 PilotsFilter.map((p) => (
                <button 
                onClick={() =>{
                    console.log(p.name,"pilots")
                     setPilots(p.name)
                }}
                className={`w-[12%] h-[40%] ml-2 flex justify-center  hover:bg-blue-200 items-center rounded-3xl  border border-white 
                ${p.name ===pilots? "bg-green text-white" : "bg-white text-black"} `}>{p.name}</button>
                ))   
            }
            </div>
            <div className="w-full flex-row text-white items-center -mt-16 flex w-[90%] h-full  overflow-x-scroll">
                {pilotsmembers.map(({name}) => (
                <div className='flex items-center justify-center ml-12 flex flex-col  w-[70%] h-full'>
                <div className="w-[50px]"> <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[50px] h-[50px]" onClick={handleShowOptions1}/></div>
                    <p>{name}</p>
                    </div>
                ))}
        </div>
    </div> </>
                }
            </div></div>
       
        </div> 
        </div>
       </div>
      </div>
     
       
        )
    }