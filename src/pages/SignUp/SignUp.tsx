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

const validationSchema = yup.object().shape({
  FirstName: yup
    .string()
    .required("First Name is required")
    .label("Firsts Name"),
  LastName: yup
    .string()
    .required("Last Name is required")
    .label("Last Name"),
  MailId: yup 
    .string()
    .required("Mail Id is required")
    .label("Mail Id"),
  PhoneNumber: yup
    .string()
    .required("Phone Number is required")
    .label("Phone Number"),
  companyId: yup  
    .string()
    .required("Company Id is required")
    .label("Company Id"),
 
  
});


interface SignUpProps {
  FirstName: string;
  LastName:string;
  MailId: string;
  PhoneNumber: string;
  companyId: string;
 
}


const initialState: SignUpProps = ({
  FirstName: "",
  LastName:"",
  MailId: "",
  PhoneNumber: "",
  companyId: "",
 
});



const SignUp = () => {

  const dispatch = useDispatch();


  
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState<any>()
  const [storeValue, setStoreValue] = useState<any>()
  const [error, setError] = useState<string>("error")
  

  // useEffect(() => {
  //   const checkUpload = async (values: SignUpProps) => {
  //     setStoreValue(values)
  //     }
  //     // checkUpload();
  //     }, [])
      
  const handleSubmit = async (values: SignUpProps) => {
      setIsLoading(true);
      console.log(values);
    //   try{
    //     // const Response = await axios.post(constants.auth.register, values)
    //     const respose = await axios.post(constants.auth.register, values)
    //     .then( resp => {
    //       if(resp?.status === 200 && resp?.data?.error){
    //         setError(resp?.data?.error)
    //         console.log(error, "not worked")
    //       }
    //       else {
    //         setLogin(true);
    //         setUserId(resp); 
    //         setError("error");
    //         console.log("worked");    
    //       }
    //     });
    //     setIsLoading(false);
    // }catch(err){
    //   // console.log(err,"hiii");
    //   setIsLoading(false)
    // }

  };
console.log("USERIID", userId?.data);

const SignupData = [
  {name: "FirstName", placeholder:"First Name"},
  {name: "LastName", placeholder:"Last Name"},
  {name: "MailId", placeholder:"Mail Id"},
  {name: "PhoneNumber", placeholder:"Phone Number"},
  {name: "companyId", placeholder:"Company Id"},
 
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
          <div className="w-[980px] h-full bg-quaternary px-4 py-10 rounded-lg rounded-3xl shadow-md">
          <CustomForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2  gap-1 mt-10  ml-14">
                {SignupData.map((data) => (
                  <div>
                    <Input
                    type="text"
                    name={data.name}
                    placeholder={data.placeholder}
                    className="border-none text-black outline-none bg-blue   shadow-md w-96"
                    inputContainerClassName="mb-6"
                    />
                    <ErrorMessage name={data.name} render={renderError}/>
                </div>
                  ))}
             
            </div>
            <div className="w-full flex justify-end">
              <Button
                type="submit"
                title="Next"
                isLoading={isLoading}
                className="bg-secondaryText text-white p-2 px-9 w-36 m-auto mt-6 transform transition-all hover:scale-95"
              />
            </div>
          </CustomForm>
          {error === "error" ?  
          null
          : 
          <p className="text-red-200 w-full text-center mt-2">{`${error} already exist`}</p>
        }
            </div>
          :
          <div className="w-[500px] h-[10px] bg-white  rounded-lg shadow-md">
            {/* {/ <CreateUser jojoUserId={userId} /> /} */}
           </div>  
          
          }
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
