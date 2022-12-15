import React from "react";
import { Link } from 'react-router-dom'
// import routes from "../../data/routes";
import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

import { BsSearch } from "react-icons/bs";
import JopayVault from "./JopayVault";
import JopayWallet from "./JopayWallet";
import WalletChart from "./WalletChart";
import Notifcation from "./Notification";


const Dashboard = () => {
 

  return (
    <main className=" flex flex-col w-full h-full overflow-hidden ">
        {/* header */}
        <div className="w-full  flex flex-row h-[12%] bg-white">
            <div className="flex justify-start items-center w-full h-full">
                <div className="flex items-center border-2 w-[500px] border-none h-[40px] my-6 mx-3 rounded-full px-3">
                    <BsSearch className="text-[35px] text-black"/>
                    <input
                    type="text"
                    placeholder="Search ..."
                    className="bg-transparent border-none text-2xl bg-transparent focus:outline-none focus:line focus:border-border-blue-500 py-2 px-2 text-black outline-none w-full"
                    />{" "}
                </div>
            </div>
            <div className="flex justify-end items-center  w-full h-full">
               <Notifcation/>
            </div>
        </div>
        {/* center */}
        <div className="w-full flex flex-row  h-[35%] bg-[#F3F3FF]">
            <div className="w-[50%] h-full flex justify-center"><JopayWallet/></div>
         <div className="w-[50%] h-full flex justify-center"><JopayVault/></div>  
        </div>
        <div className="flex justify-center items-center w-full h-[53%] bg-secondary"><WalletChart/></div> 
    </main>
  );
};

export default Dashboard;
