// import React from 'react'

// function Validation() {
//   return (
//     <div className="bg-white w-screen h-screen bg-white flex items-center justify-center">
//     <div className="w-[60%] h-[80%] shadow rounded-3xl  overflow-hidden">
//      <div className="w-full h-full flex items-center justify-center flex-col p-5 bg-quaternary bg-opacity-60">
//       hiiiii
//      </div>
//    </div>
//    </div>
//   )
// }

// export default Validation
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
import { AiFillEyeInvisible } from "react-icons/ai";

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

  const[type,setType]=useState('password');
  const[icon, setIcon]=useState('eyeoff');
  const handleToggle =() =>{
    if(type==='password'){
      setIcon('eye');
      setType("text");
    }
    else{
      setIcon('eyeoff');
      setType('password')
    }
  }

  const[type1,setType1]=useState('password');
  const[icon1, setIcon1]=useState('eyeoff');
  const handleToggle1=() =>{
    if(type1==='password'){
      setIcon1('eye');
      setType1("text");
    }
    else{
      setIcon1('eyeoff');
      setType1('password')
    }
  }

  const[type2,setType2]=useState('password');
  const[icon2, setIcon2]=useState('eyeoff');
  const handleToggle2 =() =>{
    if(type2==='password'){
      setIcon2('eye');
      setType2("text");
    }
    else{
      setIcon2('eyeoff');
      setType2('password')
    }
  }


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

const[eye,seteye]=useState(false);
const iconButton = () =>seteye(!eye);



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
                  type={type1}
                 name="NewPassword"
                 placeholder="New Password"
                
                 className="border-none text-black outline-none bg-blue  shadow-md w-96" inputContainerClassName="mb-6"/>
                 {" "}<span className="-ml-6">
                  <FaEye className="mt-3 -ml-4" type={icon1} onClick={handleToggle1}/></span>
                  </div>
                <ErrorMessage className="-mt-10" name="NewPassword" render={renderError}/>
                <div className="flex flex-row">
                <Input 
                  type={type2}
                 name="VerifyPassword"
                 placeholder="Verify Password"
                
                 className="border-none text-black outline-none bg-blue  shadow-md w-96" inputContainerClassName="mb-6"/>
                 {" "}<span className="-ml-6">
                 {eye? <FaEye className="mt-3 -ml-4" type={icon2} onClick={handleToggle2}/> : <AiFillEyeInvisible/>  } 
                 {/* {icon? <FaUserAltSlash  />  :  <FaUserPlus/>}  */}
                  </span>
                  </div>
                  <ErrorMessage name="VerifyPassword" render={renderError}/>
              

              </div>
                
             
            </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Next"
                isLoading={isLoading}
                className="bg-secondaryText text-white p-2 px-7 w-[25%] m-auto mt-8 transform transition-all hover:scale-90"
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
