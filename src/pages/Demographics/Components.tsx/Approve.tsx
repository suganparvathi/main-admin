<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {RiDownload2Fill } from "react-icons/ri";
import {FaEye } from "react-icons/fa";
import {TiTick } from "react-icons/ti";
import {AiOutlineClose } from "react-icons/ai";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { useNavigate } from "react-router-dom";
=======
import React from "react";
import BackButton from "../../../components/BackButton";
>>>>>>> b730254ca741a0e986ea8b09e24f3a2f3d29537b



export const Approve = () => {

  const [page,setPage] = useState<boolean>(false)

  console.log(page, "page is changed");
  const navigate = useNavigate()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(true)
      navigate("/kyc-verification")
    }, 5000);
    return () => clearTimeout(timer)
  }, [])

return ( 

    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                        {/* top-div */}
<<<<<<< HEAD
     <div className="flex  w-full h-[12%] ">
        <div className="w-full h-full flex items-center ">
          <BackButton/>
        </div>
       
      </div>
      {/* center div */}
=======
     <div className="flex  items-center w-full h-[5%] ">
       <BackButton/>
     </div>
                       {/* center div */}
>>>>>>> b730254ca741a0e986ea8b09e24f3a2f3d29537b
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