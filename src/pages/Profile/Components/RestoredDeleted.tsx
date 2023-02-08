import React from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";



export const RestoredDeleted = () => {

return ( 

    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                        {/* top-div */}
     <div className="flex  w-full h-[5%] ">
        <BackButton/>
    </div>
                       {/* center div */}
        <div className="w-full h-full flex justify-center ">
        <div className="mt-4 w-[90%] h-full flex justify-center items-center bg-quaternary rounded-xl">
      
            <Link to="/empty-bin" className="w-[60%] h-[60%] bg-white text-[40px] font-light flex flex-col justify-center items-center rounded-2xl">
                <p className="font-bold">Restored Successfully </p>
              

               
                </Link>
          
                </div>
            </div>
          </div>
         

        </div>

     
      
        )
      }  