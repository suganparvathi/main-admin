import React from "react";
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import WalletChart from "../../../components/WalletChart";
import JopayVault from "../../../components/JopayVault";
import JopayWallet from "../../../components/JopayWallet";



const DemoHomepage = () => {

 
  return (
    <main className=" flex flex-col w-full h-full overflow-hidden ">
        {/* header */}
        <div className="w-full flex flex-row h-[7%] bg-white">
            <div className="flex justify-start items-center w-full h-full">
                <div className="flex items-center border-2 w-[500px] border-none h-[40px] my-6 mx-3 rounded-full px-3">
               <button className="" type="submit">
                    <BsSearch className="text-[35px]  text-black"/>
                    </button>
                    <input
                    type="text"
                    placeholder="Search ..."
                    className="bg-transparent border-none text-2xl bg-transparent focus:outline-none focus:line focus:border-border-blue-500 py-2 px-2 text-black outline-none w-full"
                    />{" "}
                     
                </div>
            </div>
          
        </div>
        {/* center */}
        <div className="w-full flex flex-row  h-[35%] bg-secondary">
            <div className="w-[50%] h-full flex justify-center"><JopayWallet/></div>
         <div className="w-[50%] h-full flex justify-center"><JopayVault/></div>  
        </div>
        <div className="flex justify-center items-center w-full h-[53%] bg-secondary"><WalletChart/></div> 
    </main>
  );
};

export default DemoHomepage;
