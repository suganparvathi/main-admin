import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
// import constants from "../../API/constants";

import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signup-hero-image.png";
import Button from "../../components/Button";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";

import {BiUpload} from 'react-icons/bi'
// import { CreateUser } from "./components/CreateUser";
import axios from "../../API/axios";
import { ErrorMessage } from "formik";
import { constants } from "../../API/constants";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .label("Firsts Name"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .label("Last Name"),
  mailId: yup 
    .string()
    .email("Enter a Valid Email id")
    .required("Mail Id is required")
    .label("Mail Id"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .label("Phone Number"),  
});

const passwordValidate = yup.object().shape({
  otp: yup.string().required("Please enter your OTP").label("otp"),
  password: yup.string()
  .required("Enter Password")
    .min(8, "Password must be 8 characters long")
    .matches(/[a-z]+/, "One lowercase required")
    .matches(/[A-Z]+/, "One Uppercase required")
    .matches(/[@$!%*#?&]+/, "One special character required")
    .matches(/\d+/, "One number required")
    .label("password"),
  confirmPassword: yup.string()
    .required("Please type password once again")
    .oneOf([yup.ref("password"), null], "Password must match")
    .label("confirmPassword")
})


interface SignUpProps {
  firstName: string;
  lastName:string;
  mailId: string;
  phoneNumber: string;
 
}


const initialState: SignUpProps = ({
  firstName: "",
  lastName:"",
  mailId: "",
  phoneNumber: "",
});

const initialPassword = ({
  otp: "",
  password: "",
  confirmPassword: "",
})



const SignUp = () => {

  const dispatch = useDispatch();


  
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState<any>()
  const [storeValue, setStoreValue] = useState<any>()
  const [error, setError] = useState<string>("error")
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [viewCPassword, setViewCPassword] = useState<boolean>(false);
  

  const handleSubmit = async (values: SignUpProps) => {
      setIsLoading(true);
      setLogin(true);
      try{
        const respose = await axios.post(constants.auth.register, values)
        .then( resp => {
          if(resp?.status === 200 && resp?.data?.error){
            setError(resp?.data?.error)
            console.log(error, "not worked")
          }
          else {
            setUserId(resp); 
            setError("error");
            console.log("worked");    
          }
        });
        setIsLoading(false);
    }catch(err){
      console.log(err,"hiii");
      setIsLoading(false)
    }
  };

 const handleRegister = async(values:any) => {
  // const response = await axios.post(constants.auth.registerCred)
  console.log(values, 'khuhhvg');
  
  }

const SignupData = [
  {name: "firstName", placeholder:"First Name"},
  {name: "lastName", placeholder:"Last Name"},
  {name: "mailId", placeholder:"Mail Id"},
  {name: "phoneNumber", placeholder:"Phone Number"},
 
]

 const renderError = (msg:string) => 
      <div className='text-sm  w-full'>
        <p className='text-red-400'>{msg}</p>
      </div>

  
  return (

    <div className="bg-white w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center w-[90%] h-[500px]  bg-[#F3F3FF] shadow rounded-xl overflow-hidden  bg-opacity-50 backdrop-blur">
        <div className="w-full col-span-1 flex items-center justify-center flex-col p-7">
          <h5 className="text-black font-bold text-3xl capitalize mb-5">
            Welcome To JoJoPay Family
          </h5>
          {!login ?
          <div className="w-[980px] h-full bg-quaternary px-4 py-10 rounded-3xl shadow-md">
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2  gap-1 mt-10  ml-14">
                {SignupData.map((data:any) => (
                  <div>
                    <Input
                    type="text"
                    name={data.name}
                    placeholder={data.placeholder}
                    className="border-none text-black outline-none bg-blue   shadow-md w-96 mt-4"
                    />
                    <ErrorMessage name={data.name} render={renderError}/>
                </div>
                  ))}
            </div>
            <h1 className="w-full flex justify-center">
              {error === "error" ? null :
              `{${error} Already exists}`
              }
            </h1>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Next"
                className="bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-6 transform transition-all hover:scale-95"
              />
            </div>
          </CustomForm>
            </div>
          :
          <div className="flex justify-center items-center w-[980px] h-full bg-quaternary px-4 py-10 rounded-3xl shadow-md">
            <CustomForm
            initialValues={initialPassword}
            validationSchema={passwordValidate}
            onSubmit={handleRegister}
            >
                <Input
                type="text"
                name="otp"
                placeholder="Please enter your OTP"
                className="border-none text-black outline-none bg-blue   shadow-md w-96 mt-4" />
                <div className="flex items-center">
                <Input
                type={viewPassword? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border-none text-black outline-none bg-blue   shadow-md w-96 mt-4" />
                {viewPassword ?
                <AiFillEyeInvisible className='text-black mt-3 -ml-10 scale-125 cursor-pointer'
                onClick={() => setViewPassword(!viewPassword)} 
                />
                :
                <AiFillEye className='text-black -ml-10 mt-3 scale-125 cursor-pointer' 
                onClick={() => setViewPassword(!viewPassword)}
                /> 
              }
                </div>
                <div className="flex items-center">
                <Input
                type={viewCPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                className="border-none text-black outline-none bg-blue   shadow-md w-96 mt-4" />
                {viewCPassword ?
                <AiFillEyeInvisible className='text-black mt-3 -ml-10 scale-125 cursor-pointer'
                onClick={() => setViewCPassword(!viewCPassword)} 
                />
                :
                <AiFillEye className='text-black -ml-10 mt-3 scale-125 cursor-pointer' 
                onClick={() => setViewCPassword(!viewCPassword)}
                /> 
              } 
              </div>
              <div className="w-full flex justify-center">
              <Button
              type="submit"
              title="Register"
              isLoading={isLoading}
              className="bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-6 transform transition-all hover:scale-95" />
              </div>
            </CustomForm>
           </div>  
          
          }
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
