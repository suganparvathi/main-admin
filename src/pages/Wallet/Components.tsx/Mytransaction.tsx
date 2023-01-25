import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import {FaDownload} from "react-icons/fa"
import {FaCircle} from "react-icons/fa"
import { FiFilter } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Overlay from "../../../components/Overlay";
import Searchbar from "../../../components/Searchbar";
import axios from "../../../API/axios";
import { AxiosCall } from "../../../API/AxiosCall";

 interface TransactionProps{
   Members?: string
  }

const Members = [
  { name : "Rose",
    details  : "Allowance",
    amount : "$42",
    date : "Date",
    img :  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[60px]"/>,
    icon: <AiFillCaretUp className="text-redText"/>
   
    },
  { name : "Jopay Wallet",
    details : "Payment",
    amount : "$2000",
    img: <img src="https://tse1.mm.bing.net/th?id=OIP.ysdd9pBlwnNdnxQoC8y4KQHaHa&pid=Api&P=0" className="rounded-full w-[70px] h-[70px]"/>,
    icon: <AiFillCaretDown className="text-greenText"/>
},
  { name : "You",
  details : "Withdrawn",
  amount : "$5000",
  img: <img src="https://www.venmond.com/demo/vendroid/img/avatar/big.jpg" className="rounded-full w-[70px] h-[70px]"/>,
  icon: <AiFillCaretDown className="text-greenText"/>

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

  const[state, setState] =useState<string>();

  const [members, setMembers] = useState("5")
  const handleChange = (e: any) => {
        const a = e.target.value
        setMembers(a)        
     console.log(a);
};

const [transactions, setTransactions] = useState<any>()


useEffect(() => {
 const getTransactionData = async () => {
  const response = await AxiosCall ('transactions', "GET")
  console.log("Transactions Data", response?.data); 
  setTransactions(response?.data)
 };
 getTransactionData(); 
},[])



 const [color, setcolor] = useState(true)
const [color1, setcolor1] = useState(true)


    

  return (
    <div className="relative">
        {/* {showMoreOptions && (
           <>
      <div className="absolute z-10">
      <Overlay onClick={handleShowOptions} />
      </div> 
      <div className="absolute w-[70%] h-full flex justify-center">
        <div className="w-[60%] h-full flex mt-10 justify-center items-center">
          <div className="w-[80%] h-[70%] rounded-3xl z-20 bg-opacity-30 backdrop-blur bg-[#2A2A2B]">hi</div>
        </div>

      </div>
       </>)} */}
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[5%] ">
          <div className="w-full h-full flex items-center ">
            <BackButton />
          </div>
          {/* <div className="w-full h-full flex items-center">
            <Notifcation />
          </div> */}
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
                className={`w-[13%] h-[70%] ml-2 flex justify-center items-center rounded-full text-2xl border-2 border-white
                ${data.name ===state? "bg-green text-white" : "bg-white text-black"}`}>{data.name}</button>
              ))
              } 
                
            </div> 
            <div className="flex flex-row items-center text-white w-full h-[60%]">
            <div className="h-full w-[75%]">
            {transactions?.map((data:any) => (
            <div className="w-full h-[20%]  mt-6 flex flex-row">
            <div className=" w-[50%] h-full flex   flex-start text-xl font-bold text-white">
              <div className="w-[70px]  ml-4" onChange={handleChange} > 
                <img src={data?.image} alt="" />
              </div>
               <div className="ml-6 mt-2">
                    <p>{data?.senderName}</p>
                    <p className="text-[14px] font-normal">{data?.details}</p>
                </div>
            </div>
            <div className="w-[30%] flex items-center  text-2xl font-bold">
              <div className="w-[40%] h-full flex justify-end items-center">  {data?.amount} </div>
              <div className="text-[30px] ml-4">{data?.icon}</div>  
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
