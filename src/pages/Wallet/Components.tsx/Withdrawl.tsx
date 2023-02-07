import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import Entervalue from "../../../components/Entervalue";
import Overlay from "../../../components/Overlay";


export const Withdrawl = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  
  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");
   const [color,setcolor] = useState(false);
   const colorButton = () => setcolor(!color);

  return (
    
    <div className="relative">
      {showMoreOptions && (
        <>
         <div className="absolute z-10 ">
         <Overlay onClick={handleShowOptions} />
       </div>
      <div className="absolute w-full flex justify-end h-full">
        <div className="w-[40%] flex justify-start flex-col h-full"><div className="w-full h-[30%]"></div>
          <div className="w-[50%] h-[65%] rounded-3xl flex z-20 items-center flex-col bg-white">
            <div className="text-black font-bold w-full flex justify-center items-center  h-[20%] text-2xl">Payment Method</div>
            <button className="w-[80%] h-[12%] text-xl text-white font-bold bg-bl flex justify-center items-center rounded-full"><p>Credit Card</p></button>
            <p className="py-4 text-xl">Or</p>
            <button className="w-[80%] h-[12%] text-xl text-white font-bold bg-bl flex justify-center items-center rounded-full"><p>Debit Card</p></button>
            <p className="py-2 text-xl">Or</p>
            <p className="font-bold text-2xl">UPI</p>
            <div className="flex flex-row"><p><label><input type="radio" value="option2" /></label></p>345-567-9078</div>
            <div className="flex flex-row"><p><label><input type="radio" value="option2" /></label></p>347-568-0987</div>
            <div className="flex justify-center items-center text-white font-bold w-[50%] h-[8%] mt-4 rounded-full bg-bl"><p>+Add New UPI</p></div></div></div>
      </div>
      </>
      )}
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[4%] ">
          
            <BackButton />
          
          <div className=" w-full h-[5%] -ml-16 -mt-2 flex justify-center font-bold text-3xl">Withdrawl</div>
          
        </div>
        {/* center div */}
        <div className="w-full h-full mt-4 flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="flex justify-center -mt-8 h-[15%]  w-full">
            <img src="https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg" className="rounded-full w-[90px] h-[90px]"/>
            </div>
            <div className="w-full h-[15%]  text-white text-4xl font-bold flex justify-center items-center">
              Kate Wilson(You)
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
            <button className="w-[20%] h-[80%] rounded-full bg-white hover:scale-90 text-black font-bold text-2xl" onClick={ handleShowOptions}>Payment Method</button>
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
                className={`w-[10%] h-[40%] border-2 hover:scale-90 border-white text-xl rounded-full 
                ${  color? "bg-green text-white" : "bg-white text-black"}`}>Withdraw</button>
               </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
