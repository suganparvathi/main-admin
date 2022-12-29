import React from "react";
import { FaWallet } from "react-icons/fa";
import MonthlyChart from "./MonthlyChart";
import { PieChart } from 'react-minimal-pie-chart'
import { BsSquareFill } from "react-icons/bs";
import { FaAngleDown} from "react-icons/fa";


const WalletChart = () => {

  const BusName = [
    {copilot: "Day"},
    {copilot: "Week"},
    {copilot: "Year"},
]

    return (
        // <div className="h-full w-full flex justify-center items-center rounded-xl bg-white ">
           <div className="w-[70%] flex flex-row h-[85%] rounded-2xl mt-2 drop-shadow-2xl bg-white">
              {/* chart */}
              <div className="w-[70%] h-full flex flex-col">
                <p className=" ml-10 font-bold mt-4 text-black">Monthly Wallet History</p>
                <MonthlyChart/>
                </div>
              <div className="w-[35%] h-full flex items-center flex-col ">
                {/* <div className="w-full font-semibold bg-blue-200 flex flex-row  h-[20%]">
                <option className="flex flex-row">Sort By : Months <span><FaAngleDown className="mt-1 ml-2"/></span>   </option>
                {BusName.map(({ copilot}) => (
                   <option className="" value={copilot}>{copilot}</option>
                   ))}
                </div> */}

                        <select name="Driver" id="clicking" className='w-[50%] h-8 ml-[10px] 
                            text-textblue pl-2 rounded-lg rounded-tr-[10px] focus:outline-none drop-shadow-2xl'>
                                <option >Sort By :Month</option>
                                {BusName.map(({ copilot}) => (
                                    <option className="" value={copilot}>{copilot}</option>
                                ))}
                            </select>


                <div className="w-full mt-8 h-[60%] "><PieChart
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