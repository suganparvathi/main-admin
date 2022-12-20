import React from "react";
import { FaWallet } from "react-icons/fa";
import MonthlyChart from "./MonthlyChart";
import { PieChart } from 'react-minimal-pie-chart'
import { BsSquareFill } from "react-icons/bs";
import { FaAngleDown} from "react-icons/fa";


const WalletChart = () => {
    return (
        // <div className="h-full w-full flex justify-center items-center rounded-xl bg-white ">
           <div className="w-[70%] flex flex-row h-[85%] rounded-2xl mt-2 drop-shadow-2xl bg-white">
              {/* chart */}
              <div className="w-[70%] h-full flex flex-col">
                <p className=" ml-10 font-bold mt-4 text-black">Monthly Wallet History</p>
                <MonthlyChart/>
                </div>
              <div className="w-[35%] h-full flex items-center flex-col ">
                <div className="wfull font-semibold  h-[20%]">
                  <p className="flex flex-row">Sort By : Months <span><FaAngleDown className="mt-1 ml-2"/></span></p>
                </div>
                <div className="w-full h-[60%] "><PieChart
                    lineWidth={20}
                    paddingAngle={0}
                    startAngle={40}
                    data={[
                    { title: 'TotalDays', value: 2, color: '#24D199' },
                    { title: 'LeaveTaken', value: 8, color: '#7338E2' },
                   
                    ]}
                    /></div>
                <div className="flex flex-row font-semibold space-x-4">
                  <p className="flex flex-row"><BsSquareFill className="mt-2 text-quaternary mr-2 "/><span>profit</span></p>
                  <p className="flex flex-row"><BsSquareFill className="mt-2 text-green mr-2"/><span>Ecpenditure</span></p>
                </div>
              </div>
            </div>

        //    </div>
       
        );
    };
    
    export default WalletChart;