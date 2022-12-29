import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import Entervalue from "../../../components/Entervalue";
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import { Form } from "formik";
import * as yup from "yup";
import Overlay from "../../../components/Overlay";




export const UserSendMoney = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");

   
const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);

  return (
    <div className="relative">
       {showMoreOptions && (
        <>
         <div className="absolute z-10 bg-red-200">
         <Overlay onClick={handleShowOptions} />
       </div>
      <div className="absolute w-full flex justify-end h-full">
        <div className="w-[40%] flex justify-start flex-col h-full"><div className="w-full h-[50%]"></div>
          <div className="w-[50%] h-[45%] rounded-3xl flex z-20 items-center flex-col bg-white">
            <div className="text-black font-bold w-full flex justify-center items-center  h-[15%] text-2xl"></div>
          
            <button className="w-[80%] h-[16%] text-xl text-white font-bold bg-bl flex justify-center items-center rounded-full"><p>Wallet</p></button>
            <p className="py-4 text-xl">Or</p>
            <p className="font-bold py-2 text-2xl">UPI</p>
            <div className="flex flex-row"><p><label><input type="radio" value="option2" /></label></p>345-567-9078</div>
            <div className="flex flex-row"><p><label><input type="radio" value="option2" /></label></p>347-568-0987</div>
            <div className="flex justify-center items-center text-white font-bold w-[50%] h-[9%] mt-4 rounded-full bg-bl"><p>+Add New UPI</p></div></div></div>
      </div>
      </>
      )}
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[4%]">
         
            <BackButton />
          </div>
          <div className=" font-bold w-full  h-[5%] -mt-4 flex justify-center text-3xl">Send Money</div>
          
       
        {/* center div */}
        <div className="w-full h-full flex mt-4 justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="flex justify-center -mt-6 h-[15%]  w-full">
            <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[90px] h-[90px]"/>
            </div>
            <div className="w-full h-[15%]  text-white text-4xl font-bold flex justify-center items-center">
            Albert
            </div>
            <div className=" w-full h-[13%] flex flex-row text-2xl">
              <div className="w-[37%]  h-full "></div>
              <div className="w-full  h-full ">
              <Entervalue  placeholder="Enter Your Amount You Want To Withdraw"/>
              </div>
             </div>
             <div className="w-full h-[20%]  flex items-center justify-center">
         
            <div className="flex items-center justify-center border-2 w-[35%] text-black border-white h-[50px] my-6 mx-4 rounded-full px-3">
                <input
                type="text"
                name="Entervalue"
                placeholder="Reason...."
                className="bg-transparent border-none py-2 ml-6 text-white text-2xl outline-none w-full"
              />{" "}
             </div>
           </div>
           <div className="w-full h-[10%]  flex justify-center">
            <button className="w-[20%] h-[80%] rounded-full bg-white text-black font-bold text-2xl"onClick={ handleShowOptions}>Payment Method</button>
           </div>
           <div className="w-full h-[13%] items-center flex flex-row justify-center">
           <div className="flex  justify-center border-2 ml-[90px] w-[11%] text-black border-white h-[50px]  rounded-full ">
             <input
                type="text"
                name="Entervalue"
                placeholder="******"
                className="bg-transparent border-none py-2 ml-6 text-white text-2xl outline-none w-full"
              />{" "}
               </div>
               <p className="flex justify-center mt-2 text-white text-xl ml-2">Password</p>
               </div>
               <div className="w-full h-[20%] flex justify-center">
                <button 
                onClick={colorButton}
                className={`w-[8%] h-[40%] border-2 text-black border-white text-xl rounded-full
                ${ color? "bg-white" : "bg-green"}`}>Send</button>
               </div>
        
          </div>
        </div>
      </div>
    </div>
    </div>
    

  );
};
