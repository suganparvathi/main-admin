import React, {useState, useEffect} from "react";
import BackButton from "../../../components/BackButton";
import {FaBusAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import * as yup from "yup";
import Input from '../../../components/Input';
import CustomForm from '../../../components/Form';
import {FiPaperclip} from "react-icons/fi";

const validateEditBusCompany = yup.object().shape({
  EditCompanyName: yup
      .string()
      .label("EditCompanyName"),
  EditOwnerName: yup
      .string()
      .label("EditOwnerName"),
  AddBusCompany: yup 
      .string()
      .label("AddBusCompany"),
  EditOwnerPhoneNumber: yup  
      .string()
      .label("EditOwnerPhoneNumber"),
  AddBusCompanyDocument: yup
      .string()
      .label("AddBusCompanyDocument"),
  EditOwnerAddress: yup  
      .string()
      .label("EditOwnerAddress"),
  UpdateCompanyPassword: yup  
      .string()
      .label("UpdateCompanyPassword"),
  EditBusCompanyAddress: yup  
      .string()
      .label("EditBusCompanyAddress"),
  EditBusCompanyMailID:yup
      .string()
      .label("EditBusCompanyMailID") ,
  EditOwnerPersonalID: yup
      .string()
      .label("EditOwnerPersonalID"),
  EditOwnerIDProof: yup
      .string()
      .label("EditOwnerIDProof"),
         
                       
  })
  
  interface EditBusCompanyDetailsProps{
    EditCompanyName: string;
    EditOwnerName: string;
    AddBusCompany: string;
    EditOwnerPhoneNumber: string;
    AddBusCompanyDocument: string;
    EditOwnerAddress: string;
    UpdateCompanyPassword: string;
    EditBusCompanyAddress: string;
    EditBusCompanyMailID: string;
    EditOwnerPersonalID: string;
    EditOwnerIDProof: string;
    

  }






export const EditBus= () => {
  
  const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);

const[color1, setcolor1] =useState(false);
const color1Button = () => setcolor1(!color1);

  

const initialState: EditBusCompanyDetailsProps = {
  EditCompanyName: "",
  EditOwnerName: "",
  AddBusCompany: "",
  EditOwnerPhoneNumber: "",
  AddBusCompanyDocument: "",
  EditOwnerAddress: "",
  UpdateCompanyPassword: "",
  EditBusCompanyAddress: "",
  EditBusCompanyMailID: "",
  EditOwnerPersonalID: "",
  EditOwnerIDProof: "",
}
const handleSubmit = (values: EditBusCompanyDetailsProps) => {
console.log(values);

}

return ( 
   





<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[4%]">
           <BackButton/>
          <div className="flex w-full font-bold text-3xl justify-center -ml-10  items-center">
          <p>Edit Bus Company</p>
          </div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-[95%]  bg-quaternary rounded-xl">
          <CustomForm
            initialValues={initialState}
            validationSchema={validateEditBusCompany}
            onSubmit={handleSubmit}>
              <div className=" absolute w-full h-[90%] flex flex-row">  
                <div className="w-[60%] flex flex-row  h-full">
              <div className="w-full ml-10 flex items-center  flex-col text-black justify-center grid grid-cols-2 h-[95%]">
                <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                     <Input 
                      type="text"
                      name="EditCompanyName"
                      placeholder='Edit Company Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditOwnerName"
                      placeholder='Edit Owner Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                  <label className="w-[90%] h-[60%] bg-white drop-shadow-2xl  cursor-pointer pl-6 text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
                      Add Bus Company
                      <Input 
                      type="file"
                      name="AddBusCompany"
                      placeholder='Add Bus Company' 
                      className="hidden text-black" /> {" "}
                      <p className='text-2xl drop-shadow-lg ml-10  text-black'><FiPaperclip/></p></label>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditOwnerPhoneNumber"
                      placeholder='Edit Owner Phone Number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                  <label className="w-[90%] h-[60%] bg-white drop-shadow-2xl cursor-pointer pl-6 text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
                       Add Bus Company Document
                       <Input 
                      type="file"
                      name="AddBusCompanyDocument"
                      placeholder='Add Bus Company Document' 
                      className="hidden text-black" /> {" "}
                      <p className='text-2xl drop-shadow-lg ml-10  text-black '><FiPaperclip/></p> </label>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditOwnerAddress"
                      placeholder='Edit Owner Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="UpdateCompanyPassword"
                      placeholder='Update Company Password' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                   <div className="w-[90%] h-[60%] bg-white flex drop-shadow-2xl justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditBusCompanyAddress"
                      placeholder='Edit Bus Company Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditBusCompanyMailID"
                      placeholder='Edit Bus Company Mail ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                  <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="EditOwnerPersonalID"
                      placeholder='Edit Owner Personal ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                  <label className="w-full h-[60%] ml-[40%]  bg-white cursor-pointer drop-shadow-2xl pl-6 text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
                      Edit Owner ID Proof
                      <Input 
                      type="file"
                      name="EditOwnerIDProof"
                      placeholder='Edit Owner ID Proof' 
                      className="hidden text-black" /> {" "}
                      <p className='text-2xl drop-shadow-lg ml-10  text-black'><FiPaperclip/></p></label>
              </div>
            </div>
            <div className="w-[30%] h-full flex flex-col">
              <div className="w-full flex justify-evenly items-center  h-[50%]">
                <div className="w-[40%]  flex justify-center items-center h-[80%] bg-white rounded-2xl "><FaBusAlt className="text-8xl"/></div>
                <div className="w-[40%] h-[80%] flex justify-center items-center bg-white rounded-2xl "><FaUserAlt className="text-8xl"/></div>
              </div>
              <div className="w-full  flex flex-col  items-center h-[50%]">
                <div className="w-full h-[45%] flex  justify-center items-center">
                  <button 
                  onClick={colorButton}
                  className={`w-[35%] h-[40%]  hover:scale-90 rounded-full flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white text-white
                   ${ color? "text-green" : "text-white"}`}>Update</button>
                </div>
                <div className="w-full h-[35%]  flex justify-center ">
                  <button
                   onClick={color1Button}
                  className={`w-[35%] h-[50%]  hover:scale-90 rounded-full flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white
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