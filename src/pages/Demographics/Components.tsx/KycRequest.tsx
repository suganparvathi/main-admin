import React, { useEffect, useState } from "react";
import {MdDeleteForever } from "react-icons/md";
import {FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "../../../API/axios";
import { constants } from "../../../API/constants";
import { useDispatch } from "react-redux";
import { STORE_NAME } from "../../../store/reducers/storeName";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";


export const KycRequest = () => {


   const auth = useSelector((state: RootState) => state.storeName);
   console.log(auth, "reducers is workingjshvadbhb");
  



   const [request, setRequest] = useState<any>();
   const [name, setName] = useState<any>();

useEffect(() => {
  const GetCompanyData = async () => {
    const response = await axios.get(constants.userDetails.getProfileData);
    console.log(response?.data, "bus list");
    setRequest(response?.data);
  }
  GetCompanyData();
}, [])

const navigate = useNavigate();
const dispatch = useDispatch();
  
const storeData = (d:any) => {
   console.log("ijioj", d?.jojoId);
   if(d?.Verified === "no"){
      dispatch(STORE_NAME(d))
      navigate("/pending-request");
   } return null;
}

const deleteData = async (d:any) => {
   setName(d?.jojoId)
   const response = await axios.post(constants.kyc.deleteRequest, d)
   if(response?.status === 200){
      navigate("/kyc-verification")
      console.log(response, "hjbjhkb");
   }  
};

return ( 
   <div className="w-full h-[50%] flex flex-col overflow-y-auto overflow-x-hidden">
         {request?.map((data:any) => (
               <>
            <div className="w-full h-[20%] mt-10 flex flex-row">
                  <div className=" w-full  flex flex-start text-xl font-bold text-white">
                     <div className="w-[70px] ml-4"> 
                     <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[60px]"/>
                     </div>
                     <div className="ml-8">
                        <p>{data?.companyName}</p>
                        <p>KYC Applied Date: {data?.createdAr}</p>
                        <p>Time: 11:00 A.M</p>
                     </div>
                  </div>
                  {data?.Verified === "no" ? 
                     <div className="flex flex-end w-[18%] items-center h-full text-white">
                        <p className="border-b-2 border-white font-bold text-xl cursor-pointer" key={data?.jojoId} onClick={() => storeData(data)}>Request Pending</p>
                     </div>
               :
            <div className="flex flex-end w-[10%] items-center h-full text-white">
              <div className=" flex flex-row font-bold  text-2xl">
                <p className="ml-2"> <FaEye/> </p>
                <p className="ml-2" onClick={() => deleteData(data)}><MdDeleteForever /> </p>
               </div>
           </div>
            }
      </div>
      </>
            ))}

   </div>
        )
      }  