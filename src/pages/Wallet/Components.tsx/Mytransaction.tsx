import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import {FaDownload} from "react-icons/fa"
import {FaCircle} from "react-icons/fa"
import { FiFilter } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Overlay from "../../../components/Overlay";
import Searchbar from "../../../components/Searchbar";
import { Rose } from "./Rose";
import { You } from "./You";
import { Jopay } from "./Jopay";

 

const Members = [
  { name : "Rose",
    details  : "Allowance",
    amount : "$42",
    date : "Date",
    img :  "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" ,
    icon: <AiFillCaretUp className="text-redText"/>,
    value: "rose"
   
    },
  { name : "Jopay Wallet",
    details : "Payment",
    amount : "$2000",
    img: "https://tse1.mm.bing.net/th?id=OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa&pid=Api&P=0",
    icon: <AiFillCaretDown className="text-greenText"/>,
    value: "jopay"
},
  { name : "You",
  details : "Withdrawn",
  amount : "$5000",
  img: "https://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
  icon: <AiFillCaretDown className="text-greenText"/>,
  value: "you"
},
 ]
 
const Filter=[
  {name:"Data"},
  {name:"Send"},
  {name:"Received"},
  {name:"Favorites"},
  {name:"Withdrawl"},
  {name:"Deposit"},
]


export const Mytransaction = () => {

  const[state, setState] =useState<string>()  

  const [color, setcolor] = useState<boolean>(true)

  const [color1, setcolor1] = useState<boolean>(true)


  const [showMoreOptions, setShowMoreOptions] = useState(false)
  const[name, setName] =useState<string>()
  console.log(name);


  

    const handleShowOptions = () => {
      setShowMoreOptions(!showMoreOptions);
     
      
     };

     const [showType, setShowType] = useState("all");

     const renderNotificationTypes = useCallback(() => {
      switch (showType) {
        case "rose":
          return <Rose/>;
        case "jopay":
          return <Jopay/>;
          case "you":
            return <You/>;
        default:
          return null;
      }
    }, [showType]);
    

  return (
    <div className="relative">
        {showMoreOptions && (
           <> 
       <div className="absolute z-10">
      <Overlay onClick={handleShowOptions} />
      </div> 
     
     <div className="absolute w-full h-full flex justify-center">
       {renderNotificationTypes()}
        
       </div>
        </>)} 
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[5%] ">
          <div className="w-full h-full flex items-center ">
            <BackButton />
          </div>
         
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="w-full flex  items-center h-[13%] ">
              <div className="flex  flex-start ml-12 items-center justify-center  w-16 h-14 rounded-full bg-white">
                <FaDownload className="text-2xl text-quaternary"/>
                </div>
              <div className="flex justify-center mr-10 w-full text-4xl font-bold text-white h-full items-center">
                My Transaction
              </div>
             
            </div>
            <div className="ml-6 w-full h-[13%]  text-2xl">
            <Searchbar placeholder="Search By Name/Favorites/Recent"/>
            </div>
            <div className="flex flex-row items-center font-bold mt-2  w-full h-[15%]">
                <button className="w-[12%] h-[40%] text-white ml-6 flex text-2xl items-center">Filter By <span className="ml-2  text-3xl"><FiFilter className=""/></span></button>
                {
              Filter.map((data) => (
                <button 
                onClick={() =>{
                  console.log(data.name,"mytransaction")
                  setState(data.name)
                }}
                className={`w-[13%] h-[70%] ml-2 flex justify-center hover:scale-90 items-center rounded-full text-2xl border-2 border-white
                ${data.name ===state? "bg-green text-white" : "bg-white text-black"}`}>{data.name}</button>
              ))
              } 
                
            </div> 
            <div className="flex flex-row justify-center text-white w-full h-[60%]">
            <div className="h-[90%] w-[75%] overflow-y-auto ">
            {Members.map((data) => (
            <div className="w-full h-[25%]  mt-6 flex flex-row">
           
            <div className=" w-[50%] h-full flex   flex-start text-xl font-bold text-white"onClick={ handleShowOptions}>
              <img src ={data.img} alt="" className="w-[70px] hover:scale-90 cursor-pointer h-[70px] rounded-full ml-4" 
               onClick={ ()=>{
                console.log(data.name,"members")
                setName(data.name)
                setShowType(data.value)
               }}/> 
               <div className="ml-6 mt-2">
                    <p>{data.name}</p>
                    <p className="text-[14px] font-normal">{data.details}</p>
                </div>
            </div>
            <div className="w-[30%] flex items-center  text-2xl font-bold">
              <div className="w-[40%] h-full flex justify-end items-center">  {data.amount} </div>
              <div className="text-[30px] ml-4">{data.icon}</div>  
            </div>
            <div className="flex flex-end w-[20%] items-center h-full text-white">
              <div>
                <p>04:08:2021</p>
                <p className="ml-4">12:48:45</p>
              </div>
            </div>
            </div>
            ))}
            </div> 
            {/* left side */}
            <div className="w-[23%]  h-full flex justify-end -ml-[40px] ">
              <div className="w-[85%] h-[82%] drop-shadow-2xl mt-14 bg-white text-black   rounded-tl-3xl rounded-tr-3xl ">
                <div className="w-full h-[40%] font-bold text-4xl flex justify-center items-center">Note</div>
                <div className="w-full h-full text-2xl font-bold flex flex-col items-start">
                  <div className="text-black flex flex-row ml-4  "><AiFillCaretDown className=" text-[35px] text-greenText "/><span className="ml-4 ">Received</span></div>
                  <div className="text-black flex flex-row ml-4 mt-2 "><AiFillCaretUp className=" text-[35px] text-redText"/><span className="ml-4 ">Send</span></div>
                  <div className="text-black flex flex-row ml-4 mt-2"><AiFillCaretDown className=" text-[35px] text-LightPink"/><span className="ml-4 ">Withdrawl</span></div>
                </div>
              </div>
            </div>  
            </div> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
