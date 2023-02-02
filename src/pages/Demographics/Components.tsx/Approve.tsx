import React from "react";
import BackButton from "../../../components/BackButton";



export const Approve = () => {

return ( 

    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                        {/* top-div */}
     <div className="flex  items-center w-full h-[5%] ">
       <BackButton/>
     </div>
                       {/* center div */}
      <div className="w-full h-full flex justify-center ">
        <div className="mt-4 w-[90%] h-full flex justify-center items-center bg-quaternary rounded-xl">
            <div className="w-[60%] h-[50%] bg-white flex justify-center items-center rounded-2xl">
                <p className="text-[50px] font-bold">KYC Verified Successfully</p>

                </div>
          
                </div>
            </div>
          </div>
         

        </div>

     
      
        )
      }  