import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
// import constants from "../../API/constants";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signup-hero-image.png";
import Button from "../../../components/Button";
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import { useDispatch } from "react-redux";
// import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";
import { LOGIN_SUCCESS } from "../../../store/reducers/auth.reducer";
import {BiUpload} from 'react-icons/bi'
// import { CreateUser } from "./components/CreateUser";
// import axios from "../../API/axios";
import { Axios } from "axios";
import { ErrorMessage } from "formik";
import { FaEye } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const validationSchema = yup.object().shape({
  ValidationCode: yup
    .string()
    .required("Validation Code is required")
    .label("Validation Code"),
  NewPassword: yup
    .string()
    .required("New Password is required")
    .label("New Password"),
  VerifyPassword: yup 
    .string()
    .required("Verify Password is required")
    .label("Verify Password"),
  
});


interface ValidationProps {
  ValidationCode: string;
  NewPassword:string;
  VerifyPassword: string;
  
}


const initialState: ValidationProps  = ({
  ValidationCode: "",
  NewPassword:"",
  VerifyPassword: "",
 
 
});


const EmailVerify = () => {


  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState<any>()
  const [storeValue, setStoreValue] = useState<any>()
  const [error, setError] = useState<string>("error")
  
      
  const handleSubmit = async (values: ValidationProps ) => {
      setIsLoading(true);
      console.log(values);
    

  };
console.log("USERIID", userId?.data);

const[viewCPassword,setViewCPassword]=useState(false);

const[viewSPassword1,setViewSPassword1]=useState(false);


 const renderError = (msg:string) => 
      <div className='text-sm  w-full'>
        <p className='text-red-400'>{msg}</p>
      </div>

  
  return (

    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-[70%] h-[580px] bg-quaternary shadow rounded-xl overflow-hidden  bg-opacity-50 backdrop-blur">
        <div className="w-full col-span-1 flex items-center justify-center flex-col p-7">
          <h5 className="text-black font-bold text-4xl  capitalize -mt-10">
         Verification
          </h5>
          <p className="mt-4">Enter Your OTP code number</p>
        
      <div className="w-[700px] h-[70%]  px-4 mt-10 py-10 rounded-3xl ">
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full h-full ml-20 ">
            
                <div className="flex  flex-row w-full h-[50%] ">
              <Input 
                 type="text"
                 name="ValidationCode"
                 placeholder="Email Validation Code"
                 className="border-none text-black outline-none bg-blue   shadow-md w-96" inputContainerClassName="mb-6"/>
                 <Button
               
                title="Verify"
                className=" w-[20%] text-white ml-10 p-2 hover:scale-90 text-sm rounded-xl h-[65%] bg-tertiaryText"
              
                 />
                 </div>
                
                  <ErrorMessage name="ValidationCode" render={renderError}/>
                  <div className="flex flex-row w-full h-[5%] font-bold">
         Didn't receive an OTP? <p className=" text-blue-600 cursor-pointer ml-4">RESEND CODE</p>
        </div>
                  <div className="flex flex-row w-full  mt-6 h-[50%]">
                  <Input 
                 type="text"
                 name="ValidationCode"
                 placeholder="Phone Validation Code"
                 className="border-none text-black outline-none bg-blue   shadow-md w-96" inputContainerClassName="mb-6"/>
                  <Button
               
                title="Verify"
                className=" w-[20%] text-white ml-10 p-2  hover:scale-90 text-sm rounded-xl h-[65%] bg-tertiaryText"
             
                 />
                 </div>
                 
                 <ErrorMessage name="ValidationCode" render={renderError}/>
                 <div className="flex  flex-row w-full h-[5%]  font-bold">
         Didn't receive an OTP? <p className=" text-blue-600 cursor-pointer ml-4">RESEND CODE</p>
        </div>
               
                </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Next"
                isLoading={isLoading}
                className="bg-secondaryText text-white text-2xl p-2 px-7 w-[30%] m-auto mt-6 transform transition-all hover:scale-90"
              />
            </div>
          </CustomForm>
         
            </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default EmailVerify;
