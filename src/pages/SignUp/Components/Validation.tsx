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


const Validation = () => {


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
      <div className='text-sm -mt-4  w-full'>
        <p className='text-red-400'>{msg}</p>
      </div>

  
  return (

    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-[70%] h-[580px] bg-quaternary shadow rounded-xl overflow-hidden  bg-opacity-50 backdrop-blur">
        <div className="w-full col-span-1 flex items-center justify-center flex-col p-7">
          <h5 className="text-black font-bold text-4xl  capitalize -mt-8">
           Forgot your password?
          </h5>
        
          <div className="w-[700px] h-[70%]  bg-[#F3F3FF] px-4 mt-10 py-10 rounded-3xl shadow-md">
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="flex flex-col">
              <Input 
                 type="text"
                 name="ValidationCode"
                 placeholder="Validation Code"
                 className="border-none text-black outline-none bg-blue   shadow-md w-96" inputContainerClassName="mb-8"/>
                 <ErrorMessage name="ValidationCode" render={renderError}/>
                 <div className="flex flex-row">
                 <Input
                  type={viewCPassword ? "text" : "password"}
                 name='NewPassword'
                  placeholder='New Password'
                  className='border-none text-black outline-none shadow-md w-96'
                 inputContainerClassName="mb-8"
                />
              {viewCPassword ?
                <AiFillEyeInvisible className='text-black -ml-10 mt-3 scale-125 cursor-pointer'
                onClick={() => setViewCPassword(!viewCPassword)} 
                />
                :
                <AiFillEye className='text-black -ml-10 mt-3 scale-125 cursor-pointer' 
                onClick={() => setViewCPassword(!viewCPassword)}
                /> 
              }
             </div>
                <ErrorMessage name="NewPassword" render={renderError}/>
                <div className="flex flex-row">
                 <Input
                  type={viewSPassword1 ? "text" : "password"}
                 name='VerifyPassword'
                  placeholder='Verify Password'
                  className='border-none text-black outline-none shadow-md w-96'
                 inputContainerClassName="mb-8"
                />
              {viewSPassword1 ?
                <AiFillEyeInvisible className='text-black -ml-10 mt-3 scale-125 cursor-pointer'
                onClick={() => setViewSPassword1(!viewSPassword1)} 
                />
                :
                <AiFillEye className='text-black -ml-10 mt-3 scale-125 cursor-pointer' 
                onClick={() =>setViewSPassword1(!viewSPassword1)}
                /> 
               }
              </div>
                <ErrorMessage name="VerifyPassword" render={renderError}/>
                 </div>
                </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Next"
                isLoading={isLoading}
                className="bg-secondaryText text-white p-2 px-7 w-[25%] m-auto mt-6 transform transition-all hover:scale-90"
              />
            </div>
          </CustomForm>
         
            </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Validation;
