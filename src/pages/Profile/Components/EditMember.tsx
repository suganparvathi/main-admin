import React, {useState, useEffect} from "react";
import BackButton from "../../../components/BackButton";
import {FaBusAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import * as yup from "yup";
import Input from '../../../components/Input';
import CustomForm from '../../../components/Form';

const validateEditNewMember = yup.object().shape({
  EditEmployeeName: yup
      .string()
      .label("EditEmployeeName"),
  EditPhoneNumber: yup
      .string()
      .label("EditPhoneNumber"),
  AdditionalPhoneNumber: yup 
      .string()
      .label("AdditionalPhoneNumber"),
  EditEmployeeAddress: yup  
      .string()
      .label("EditEmployeeAddress"),
  EditEmployeeDesignation: yup
      .string()
      .label("EditEmployeeDesignation"),
   EditCompanyName: yup  
      .string()
      .label("EditCompanyName"),
   EditPassword: yup  
      .string()
      .label("EditPassword"),
                            
  })
  
  interface EditNewMemberDetailsProps{
    EditEmployeeName: string;
    EditPhoneNumber: string;
    EditEmployeeAddress: string;
    EditEmployeeDesignation: string;
    EditCompanyName: string;
    AddCompanyID: string;
    EditPassword: string;
   
  }



export const EditMember= () => {

  const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);

const[color1, setcolor1] =useState(false);
const color1Button = () => setcolor1(!color1);

const initialState:  EditNewMemberDetailsProps = {
    EditEmployeeName: "",
    EditPhoneNumber: "",
  EditEmployeeAddress: "",
  EditEmployeeDesignation: "",
  EditCompanyName: "",
  AddCompanyID: "",
  EditPassword: "",
 
 
}
const handleSubmit = (values: EditNewMemberDetailsProps) => {
console.log(values);

}


return ( 
   
<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[4%]">
           <BackButton/>
          
          <div className="flex w-full font-bold text-3xl justify-center -ml-10  items-center">
          <p>Edit Member</p>
          </div>
          </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-[95%]  bg-quaternary rounded-xl">
          <CustomForm
            initialValues={initialState}
            validationSchema={validateEditNewMember}
            onSubmit={handleSubmit}>
            <div className="absolute w-full  h-[85%] flex flex-row">
            <div className="w-[60%] ml-10 mt-6 grid grid-rows-5 grid-flow-col   h-[95%]">
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditEmployeeName"
                      placeholder='Edit Employee Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                  <div className="w-[93%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditPhoneNumber"
                      placeholder='Edit Phone NUmber' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                 <div className="w-[93%] h-[60%] bg-white drop-shadow-2xl  rounded-xl">
                      <Input 
                      type="text"
                      name="AdditionalPhoneNumber"
                      placeholder='Additional Phone Number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl mt-4 pl-20 leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                 <div className="w-[93%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditEmployeeAddress"
                      placeholder='Edit Employee Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                <div className="w-[93%] h-[60%] bg-white drop-shadow-2xl rounded-xl">
                      <Input 
                      type="text"
                      name="EditEmployeeDesignation"
                      placeholder='Edit Employee Designation' 
                      className="w-full rounded-sm h-full  text-xl flex justify-center mt-4 pl-20 items-center leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                 <div className="w-[93%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditCompanyName"
                      placeholder='Edit Company Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                 <div className="w-[93%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditPassword"
                      placeholder='Edit Password' 
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
   
    
        
       
        )
      }  