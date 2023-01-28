import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link, useNavigate } from "react-router-dom";
import { BsBadgeAdFill } from "react-icons/bs";
import {FiPaperclip} from "react-icons/fi";
import CustomForm from "../../../components/Form";
import { Form } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";
import { CreateAdsDetailsProps, defaultAdValue, CREATE_AD } from "../../../store/reducers/CreateAds.reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";


const validateCreateAds = yup.object().shape({
  AttachBanner: yup
      .string()
      .label("AttachBanner"),
  EnterAdName: yup
      .string()
      .label("EnterAdName"),
  AttachYourAdURL: yup 
      .string()
      .label("AttachYourAdURL"),
  EnterAdDisplayTime: yup  
      .string()
      .label("EnterAdDisplayTime"),
})

 
export const CreateAds = () => {
  const dispatch = useDispatch();
  const history = useNavigate()
  const adData = useSelector((state:RootState)=>state.ad)
  const initialState:CreateAdsDetailsProps = defaultAdValue;


const handleSubmit = async (values: CreateAdsDetailsProps) => {
await  dispatch(CREATE_AD(values));
history("/edit-ad");
}

React.useEffect(()=>{
  console.log(adData,'reducerData');
},[adData])

return ( 
    
<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          <BackButton/><p className="text-2xl font-bold">Place Ads</p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
          <CustomForm
            initialValues={initialState}
            validationSchema={validateCreateAds}
            onSubmit={handleSubmit}>
              <div className="w-full h-full flex flex-col absolute">
            <div className=" w-full flex justify-center items-center text-6xl text-white font-light h-[15%]">Create Ad</div>
            <div className="w-full h-[75%] flex flex-row">
              <div className="w-[40%] h-[70%] flex items-center">
                <div className="w-[50%] h-[70%] flex flex-col bg-white ml-10 flex justify-center items-center rounded-[40px]">
                  <BsBadgeAdFill className="text-5xl"/>
                  <p className="h-[30%] text-black mt-4 text-2xl">Attach Banner</p>
                  <label>
                  <Input
                  type="file"
                  name="AttachBanner"
                  placeholder='Attach Banner' 
                  className="hidden"/> 
                  <p className='text-2xl drop-shadow-lg cursor-pointer'> <FiPaperclip/></p>
                  </label>
                </div>
                </div>
              <div className="w-[55%] flex flex-col h-full">
              <div className="w-[75%] h-[15%] bg-white mt-4 drop-shadow-2xl flex justify-center items-center rounded-xl">
                <Input 
                type="text"
                name="EnterAdName"
                placeholder='Enter Ad Name' 
                className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none text-black border-none" /> {" "}
              </div>

              <div className="w-[75%] h-[15%] mt-14 bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <Input 
                type="text"
                name="AttachYourAdURL"
                placeholder='Attach your Ad URL' 
                className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none text-black border-none" /> {" "}
              </div>
              <div className="w-[75%] h-[15%] mt-10 bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <Input 
                type="text"
                name="EnterAdDisplayTime"
                placeholder='Enter Ad Display Time' 
                className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none text-black border-none" /> {" "}
              </div>
              <button className="w-[27%] mt-12 drop-shadow-2xl rounded-3xl h-[15%] font-bold text-3xl bg-green text-white">Create Ad</button>

              </div>
            </div>
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
    </div>
        )
      }  