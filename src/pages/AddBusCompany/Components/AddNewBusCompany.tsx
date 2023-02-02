import React, {useState, useEffect} from "react";
import BackButton from "../../../components/BackButton";
import {FaBusAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import * as yup from "yup";
import Input from '../../../components/Input';
import CustomForm from '../../../components/Form';
import {FiPaperclip} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { defaultAdValue } from "../../../store/reducers/CreateAds.reducer";
import { BusCompanyDetailsProps, defaultAddbusValue, UPDATE_Addbus,  } from "../../../store/reducers/AddNewBusCompany.reducer";


const validateBusCompany = yup.object().shape({
  CompanyName: yup
      .string()
      .label("CompanyName"),
  CreateCompanyPassword: yup
      .string()
      .label("CreateCompanyPassword"),
  AddBusDocument: yup 
      .string()
      .label("AddBusDocument"),
  AddOwnerName: yup  
      .string()
      .label("AddOwnerName"),
  AddBusCompanyDocument: yup
      .string()
      .label("AddBusCompanyDocument"),
  AddOwnerPhoneNumber: yup  
      .string()
      .label("AddOwnerPhoneNumber"),
  CreateCompanyLoginID: yup  
      .string()
      .label("CreateCompanyLoginID"),
  AddOwnerAddress: yup  
      .string()
      .label("AddOwnerAddress"),
  AddBusCompanyEmailID:yup
      .string()
      .label("AddBusCompanyEmailID") ,
  AddBusCompanyAddress: yup
      .string()
      .label("AddBusCompanyAddress"),
  AddOwnerPersonalID: yup
      .string()
      .label("AddOwnerPersonalID"),
  AddOwnerIdProof: yup
      .string()
      .label("AddOwnerIdProof"),         

                       
  })
  
  



export const AddNewBusCompany= () => {

  const[color, setcolor] =useState(false);
  const colorButton = () => setcolor(!color);



const[color1, setcolor1] =useState(false);
const color1Button = () => setcolor1(!color1);


   const dispatch = useDispatch();

   const addbusData = useSelector((state:RootState)=>state.addbus)

   const initialState: BusCompanyDetailsProps = defaultAddbusValue;

const handleSubmit = (values: BusCompanyDetailsProps) => {
dispatch(UPDATE_Addbus(values));



  // console.log(values);
  
}
 React.useEffect(()=>{
  console.log(addbusData,'reducerData');
 },[addbusData])


return ( 
   

<div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[4%]">
           <BackButton/>
          <div className="flex w-full font-bold text-3xl justify-center -ml-10  items-center">
          <p>Add New Bus Company</p>
          </div>
      </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center">
            <div className="w-[95%] h-[90%] mt-6 bg-quaternary  rounded-xl">
            <CustomForm
            initialValues={initialState}
            validationSchema={validateBusCompany}
            onSubmit={handleSubmit}>
            <div className="absolute ml-10 w-full h-[85%] flex flex-row">
                <div className="mt-4 w-[90%] h-full flex flex-row">
                  <div className="w-[65%] flex items-center justify-center grid grid-cols-2 h-[95%]">
                      <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="CompanyName"
                      placeholder='Company Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                     <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="CreateCompanyPassword"
                      placeholder='Create Company Password' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                      <label className="w-[90%] h-[60%] bg-white drop-shadow-2xl cursor-pointer pl-10 text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
                      Add Bus Document 
                      <Input 
                      type="file"
                      name="AddBusDocument"
                      placeholder='Add Bus Document' 
                      className="hidden text-black" /> {" "}
                    <p className='text-2xl drop-shadow-lg ml-20  text-black  '><FiPaperclip/></p></label>
                    <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddOwnerName"
                      placeholder='Add Owner Name' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                      <label className="w-[90%] h-[60%] bg-white drop-shadow-2xl cursor-pointer pl-6 text-gray-400 text-xl  flex flex-row justify-start items-center rounded-xl">
                      Add Bus Company Document 
                      <Input 
                      type="file"
                      name="AddBusCompanyDocument"
                      placeholder='Add Bus Company Document' 
                      className="hidden text-black" /> {" "}
                      <p className='text-2xl drop-shadow-lg ml-10  text-black  '><FiPaperclip/></p></label>
                      <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddOwnerPhoneNumber"
                      placeholder='Add Owner Phone Number' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                      <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input
                      type="text"
                      name="CreateCompanyLoginID"
                      placeholder='Create Company Login ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                      <div className="w-[90%] h-[60%] bg-white flex drop-shadow-2xl justify-center items-center rounded-xl">
                      <Input
                      type="text"
                      name="AddOwnerAddress"
                      placeholder='Add Owner Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}</div>
                      <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input 
                      type="text"
                      name="AddBusCompanyEmailID"
                      placeholder='Add Bus Company Email ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                      <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input
                      type="text"
                      name="AddBusCompanyAddress"
                      placeholder='Add Bus Company Address' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                      <div className="w-[90%] h-[60%] bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                      <Input
                      type="text"
                      name="AddOwnerPersonalID"
                      placeholder='Add Owner Personal ID' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "} </div>
                      <label className="w-[90%] h-[60%] bg-white drop-shadow-2xl pl-6 cursor-pointer text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
                      Add Owner Id Proof 
                      <Input
                      type="file"
                      name="AddOwnerIdProof"
                      placeholder='Add Owner Id Proof' 
                      className="hidden text-black" /> {" "}
                      <p className='text-2xl drop-shadow-lg ml-10  text-black  '><FiPaperclip/></p>
                      </label>
                    </div>
              <div className="w-[35%] h-full flex flex-col">
              <div className="w-full flex justify-evenly items-center  h-[50%]">
                <div className="w-[40%]  flex justify-center items-center h-[80%] bg-white rounded-2xl "><FaBusAlt className="text-8xl"/></div>
                <div className="w-[40%] h-[80%] flex justify-center items-center bg-white rounded-2xl "><FaUserAlt className="text-8xl"/></div>
              </div>
              <div className="w-full  flex flex-col  items-center h-[50%]">
                <div className="w-full h-[45%] flex  justify-center items-center">
                  <button 
                  onClick={colorButton}
                  className={`w-[35%] h-[40%] rounded-full  hover:scale-90 flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white text-black
                   ${ color? "text-green" : "text-white"}`}>Save</button>
                </div>
                <div className="w-full h-[35%]  flex justify-center ">
                  <button
                   onClick={color1Button}
                  className={`w-[35%] h-[50%] rounded-full  hover:scale-90 flex drop-shadow-2xl justify-center items-center border-4 text-2xl border-white
                    ${ color1? "text-red-700" : "text-white"}`}>Cancel</button>
                </div>
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