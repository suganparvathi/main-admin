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
// import Notifcation from "./Notification";
import MonthlyChart from "./MonthlyChart";
import { PieChart } from 'react-minimal-pie-chart'
import { BsSquareFill } from "react-icons/bs";



const Dashboard = () => {
 

  return (
    <main className=" flex flex-col w-full h-full overflow-hidden ">
        {/* header */}
        <div className="w-full  flex flex-row h-[6%]">
            <div className="flex justify-start items-center w-[60%] h-full">
                <div className="flex items-center border-2 w-full border-none h-[40px] my-6 mx-3 rounded-full px-3">
                    <BsSearch className="text-[25px]   text-black"/>
                    <input
                    type="text"
                    placeholder="Search ..."
                    className="bg-transparent border-none text-2xl bg-transparent focus:outline-none focus:line focus:border-border-blue-500 py-2 px-2 text-black outline-none w-full"
                    />{" "}
                </div>
            </div>
            {/* <div className="flex justify-end items-center  w-full h-full">
               <Notifcation/>
            </div> */}
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
