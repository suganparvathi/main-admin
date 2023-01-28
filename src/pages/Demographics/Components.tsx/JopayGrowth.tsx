import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { PieChart } from 'react-minimal-pie-chart'
import { BsSquareFill } from "react-icons/bs";
import { FaAngleDown} from "react-icons/fa";
import MonthlyChart from "../../../components/MonthlyChart";




export const JopayGrowth = () => {

  const BusName = [
    {copilot: "Day"},
    {copilot: "Week"},
    {copilot: "Year"},
]
return ( 
    <div className="w-screen h-screen  overflow-hidden flex">
      
      <div className="w-[100%] flex-col items-center bg-white  overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[5%]">

            <BackButton/>
         
        </div>
                         {/* center div */}
        <div className="w-full  h-full flex  justify-center ">
          <div className="mt-2 w-[90%]  bg-secondary flex flex-col h-[90%]  text-black rounded-xl">
            <div className="flex flex-row w-full h-[50%] ">
            <div className="w-[50%]  flex-col items-center flex h-full ">
              <div className="w-[70%] h-[20%] flex items-center">
                <p className="text-xl font-bold">Jopay Growth</p></div>
              <div className="w-[85%] flex drop-shadow-2xl flex-row h-[70%] bg-white rounded-2xl">
                <div className="w-[60%]  flex flex-col items-center h-full ">
                  <div className="w-full mt-4 h-[60%]">
                    <PieChart
                    lineWidth={20}
                    paddingAngle={0}
                    startAngle={40}
                    data={[
                      { title: 'Jopay App Users', value: 3, color: '#24D199' },
                      { title: 'Bus Company Users', value: 1, color: '#B2DF8A' },
                      { title: 'Jopay App Users', value: 6, color: '#7338E2' },
                    ]}
                    />

                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <p className="text-2xl w-full text-bl font-semibold">This Month Growth 60%</p>
                    <p className="text-g">Jopay App growth</p>
                  </div>
                  </div>
                <div className="w-[40%] h-full flex justify-center flex-col ">
                  <div className="flex font-semibold flex-row"><span className="mt-2  text-quaternary mr-2"><BsSquareFill/></span>Jopay App Users</div>
                  <div className="flex font-semibold flex-row"><span className="mt-2 text-green mr-2"><BsSquareFill/></span>Bus Company Users</div>
                  <div className="flex font-semibold flex-row"><span className="mt-2 text-gy mr-2"><BsSquareFill/></span>commission</div>
                </div>
                </div>
            </div>
            <div className="w-[50%]  flex-col items-center flex h-full ">
            <div className="w-[70%] h-[20%] flex items-center">
                <p className="text-xl font-bold">Jopay Growth</p></div>
              <div className="w-[85%] drop-shadow-2xl flex flex-row h-[70%] bg-white rounded-2xl">
                <div className="w-[60%] flex flex-col items-center h-full ">
                  <div className="w-full mt-4 h-[60%]">
                    <PieChart
                    lineWidth={20}
                    paddingAngle={0}
                    startAngle={40}
                    data={[
                    { title: 'Jopay App Users', value: 3, color: '#24D199' },
                    { title: 'Bus Company Users', value: 1, color: '#B2DF8A' },
                    { title: 'Jopay App Users', value: 6, color: '#7338E2' },
                    ]}
                    />

                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <p className="text-2xl text-bl w-full font-semibold">This Month Growth 60%</p>
                    <p className="text-g">Jopay App growth</p>
                  </div>
                  </div>
                <div className="w-[40%] h-full flex justify-center flex-col ">
                  <div className="flex font-semibold flex-row"><span className="mt-2  text-quaternary mr-2"><BsSquareFill/></span>Jopay App Users</div>
                  <div className="flex font-semibold flex-row"><span className="mt-2 text-green mr-2"><BsSquareFill/></span>Bus Company Users</div>
                  <div className="flex font-semibold flex-row"><span className="mt-2 text-gy mr-2"><BsSquareFill/></span>commission</div>
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-row w-full h-[50%] flex justify-center">
            <div className="w-[60%] flex flex-row h-[88%] rounded-2xl mt-2 drop-shadow-2xl bg-white">
              {/* chart */}
              <div className="w-[70%] h-full flex flex-col">
                <p className=" ml-10 font-bold text-black">Monthly Wallet History</p>
                <MonthlyChart/>
                </div>
              <div className="w-[35%] h-full flex items-center flex-col ">

              <select name="Driver" id="clicking" className='w-[50%] h-8 ml-[10px] 
                            text-textblue pl-2 rounded-lg rounded-tr-[10px] focus:outline-none drop-shadow-2xl'>
                                <option >Sort By :Month</option>
                                {BusName.map(({ copilot}) => (
                                    <option className="" value={copilot}>{copilot}</option>
                                ))}
                            </select>

              
                <div className="w-full mt-10 h-[60%] "><PieChart
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
            
            </div>
            </div>

        </div>
      </div>
    </div>
        
       
        )
      }  