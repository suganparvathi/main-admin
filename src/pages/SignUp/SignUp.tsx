import React, { useEffect, useState } from "react";
import * as yup from "yup";
import {FaUserAlt} from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import heroImage from "../../assets/images/signin-hero-image.png";
import CustomForm from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../../store/reducers/auth.reducer";
import { constants } from "../../API/constants";
import axios from "../../API/axios";
import { RootState } from "../../store";


const validateCreateMember = yup.object().shape({
  AddEmployeeName: yup
      .string()
      .label("AddEmployeeName"),
  AddEmployeeDesignation: yup
      .string()
      .label("AddEmployeeDesignation"),
  AddPhoneNumber: yup 
      .string()
      .label("AddPhoneNumber"),
  AddCompanyName: yup  
      .string()
      .label("AddCompanyName"),
  AdditionalPhoneNumber: yup
      .string()
      .label("AdditionalPhoneNumber"),
  AddCompanyID: yup  
      .string()
      .label("AddCompanyID"),
  AddEmployeeCode: yup  
      .string()
      .label("AddEmployeeCode"),
  AddLoginID: yup  
      .string()
      .label("AddLoginID"),
  EmployeeAddress:yup
      .string()
      .label("EmployeeAddress") ,
  AddPassword: yup
      .string()
      .label("AddPassword"),
                              
  })
  interface  CreateMemberDetailsProps{
    AddEmployeeName: string;
    AddEmployeeDesignation: string;
    AddPhoneNumber: string;
    AddCompanyName: string;
    AdditionalPhoneNumber: string;
    AddCompanyID: string;
    AddEmployeeCode: string;
    AddLoginID: string;
    EmployeeAddress: string;
    AddPassword: string;
  }
  
  

export const SignUp= () => {

  const initialState: CreateMemberDetailsProps = {
    AddEmployeeName: "",
    AddEmployeeDesignation: "",
    AddPhoneNumber: "",
    AddCompanyName: "",
    AdditionalPhoneNumber: "",
    AddCompanyID: "",
    AddEmployeeCode: "",
    AddLoginID: "",
    EmployeeAddress: "",
    AddPassword: "",
   
  }

  const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);

const[color1, setcolor1] =useState(false);
const color1Button = () => setcolor1(!color1);


const handleSubmit = (values:  CreateMemberDetailsProps) => {
console.log(values);

}
// const dispatch = useDispatch();

// const  creatememberData = useSelector((state:RootState)=>state.createmember)

// const initialState: CreateMemberDetailsProps = defaultCreateMemberValue;

// const handleSubmit = (values: CreateMemberDetailsProps) => {
// dispatch( UPDATE_CREATEMEMBER(values));

// // console.log(values);

// }
// React.useEffect(()=>{
// console.log(creatememberData,'reducerData');
// },[creatememberData])

  return (
    <div className="w-screen h-screen overflow-hidden flex">
    <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        
    {/* <div className="flex w-full font-bold text-3xl justify-center -ml-10  items-center">
          <p>Create New Member</p>
          </div> */}
       
      <div className="w-full h-full flex justify-center ">
          <div className="mt-10 w-[90%] h-[95%]  bg-quaternary rounded-xl">
          <CustomForm
            initialValues={initialState}
            validationSchema={validateCreateMember}
            onSubmit={handleSubmit}>
            <div className="absolute w-full  h-[85%] flex flex-row">
            <div className="w-[60%] ml-10 flex items-center justify-center mt-12 grid grid-cols-2  flex-row  h-[95%]">
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddEmployeeName"
                      placeholder='Add Employee Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddEmployeeDesignation"
                      placeholder='Add Employee Designation' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                 <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddPhoneNumber"
                      placeholder='Add Phone Number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                 <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddCompanyName"
                      placeholder='Add Company Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AdditionalPhoneNumber"
                      placeholder='Additional Phone Number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                 <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddCompanyID"
                      placeholder='Add Company ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                 <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddEmployeeCode"
                      placeholder='Add Employee Code' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                 <div className="w-[90%] h-[60%] bg-white flex drop-shadow-2xl justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddLoginID"
                      placeholder='Add Login ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                 <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EmployeeAddress"
                      placeholder='Employee Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddPassword"
                      placeholder='Add Password' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
               </div>
             <div className="w-[35%] h-full flex flex-col">
              <div className="w-full flex justify-evenly items-center  h-[45%]">
                <div className="w-[40%] h-[75%] flex justify-center items-center bg-white rounded-full"><FaUserAlt className="text-8xl"/></div>
              </div>
              <div className="w-full  flex flex-col   h-[50%]">

                <div className="w-full h-[30%] flex justify-center ">
                  <button 
                  onClick={colorButton}
                  className={`w-[35%] h-[60%] rounded-full flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white text-white
                   ${ color? "text-green" : "text-white"}`}>Save</button>
                </div>
                <div className="w-full h-[35%]  flex justify-center ">
                  <button
                   onClick={color1Button}
                  className={`w-[35%] h-[50%] rounded-full flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white
                    ${ color1? "text-red-700" : "text-white"}`}>Cancel</button>
                </div>
              </div>
            </div>
        </div>
          </CustomForm>
          </div>
      </div>
          
        </div>
      </div>
    
  );
}

export default SignUp;
