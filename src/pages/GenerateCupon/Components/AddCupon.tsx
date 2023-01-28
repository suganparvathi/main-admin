import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import { Form } from "formik";
import * as yup from "yup";
import Overlay from "../../../components/Overlay";
import { FaBus } from "react-icons/fa";
import {FiPaperclip} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { AddCuponDetailsProps, defaultAddCuponValue, UPDATE_ADDCUPON } from "../../../store/reducers/AddCupon.reducer";

const validateAddCupon = yup.object().shape({
  CuponType: yup
      .string()
      .label("CuponType"),
  Applicable: yup
      .string()
      .label("Applicable"),
  AddBannerImage: yup 
      .string()
      .label("AddBannerImage"),
  ValidFrom: yup  
      .string()
      .label("ValidFrom"),
  ValidTo: yup
      .string()
      .label("ValidTo"),
  Company: yup  
      .string()
      .label("Company"),
                            
  })
  
  // interface AddCuponDetailsProps{
  //   CuponType: string;
  //   Applicable: string;
  //   AddBannerImage: string;
  //   ValidFrom: string;
  //   ValidTo: string;
  //   Company: string;
   
   
  // }




export const AddCupon= () => {
  
//   const initialState:  AddCuponDetailsProps = {
//     CuponType: "",
//     Applicable: "",
//     AddBannerImage: "",
//     ValidFrom: "",
//     ValidTo: "",
//     Company: "",

// }
// const handleSubmit = (values: AddCuponDetailsProps) => {
// console.log(values);

// }
 

   const[color,setcolor]=useState(false);
   const colorButton = () =>setcolor(!color);
   const dispatch = useDispatch();

   const addcuponData = useSelector((state:RootState)=>state.addcupon)

   const initialState: AddCuponDetailsProps =  defaultAddCuponValue;

const handleSubmit = (values: AddCuponDetailsProps) => {
dispatch( UPDATE_ADDCUPON(values));



  // console.log(values);
  
}
 React.useEffect(()=>{
  console.log( addcuponData,'reducerData');
 },[ addcuponData])


  return (
    
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[7%]">
          <div className="w-full h-full  flex items-center ">
            <BackButton />
          </div>
          <div className='rounded-full drop-shadow-xl bg-white justify-center flex items-center w-[20%] h-[140px]'>
                <FaBus className="text-7xl text-quaternary"/>
            </div>
        <div className="w-full h-full flex items-center">
           
          </div>
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="flex justify-center -mt-14 h-[15%]  w-full">
          
            </div>
            <CustomForm
            initialValues={initialState}
            validationSchema={validateAddCupon}
            onSubmit={handleSubmit}>
              <div className="w-full h-full flex absolute flex-col">
            <div className="w-full flex flex-row h-[60%]">
                <div className="w-[45%] h-full flex flex-col justify-center items-center">
                    <div className="w-full flex justify-center items-center h-[30%]">
                    <div className="w-[75%] h-[60%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
                      <Input 
                      type="text"
                      name="CuponType"
                      placeholder='Cupon Type '
                      className="ml-3 w-full rounded-sm   text-2xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 
                </div>
                    </div>
                    <div className="w-full flex justify-center items-center h-[30%]">
                    <div className="w-[75%] h-[60%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
                     <Input 
                      type="text"
                      name="Applicable"
                      placeholder='Applicable For (Need to discuss)' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                  </div>
                </div>
                    
                   
                   <div className="w-full flex justify-center items-center h-[30%]">
                <label className="w-[75%] h-[60%] bg-white drop-shadow-2xl cursor-pointer pl-6 text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
                Add Banner Image
                      {/* <label> */}
                      <Input 
                      type="file"
                      name="AddBannerImage"
                      placeholder='Add Banner Image' 
                      className="hidden text-black" /> {" "}
                    <p className='text-2xl drop-shadow-lg ml-10  text-black  '><FiPaperclip/></p></label>
                  
                {/* </div> */}
                </div> 

                </div>
                <div className="w-[50%] flex flex-col items-center justify-center h-[70%]">
                    <div className="w-full h-[50%] flex justify-center flex-row items-center">
                    <div className="w-[40%] h-[50%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
                
                     
                      <Input 
                      type="Date"
                      name="ValidFrom"
                      placeholder='Valid From' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                  </div>
               

                <div className="w-[40%] h-[50%] ml-6 bg-white drop-shadow-2xl flex  items-center rounded-xl">
              
                     
                      <Input 
                      type="Date"
                      name="ValidTo"
                      placeholder='Valid to' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                  </div>
                </div>
               
                    <div className="w-full h-[50%] flex justify-center items-center">
                    <div className="w-[80%] h-[60%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
               
                     <Input 
                      type="text"
                      name="Company"
                      placeholder='Offer Given by Which Company' 
                      className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                      focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                  </div>
                </div>
               
                </div>
                 </div>
            <div className="w-full  h-[20%] flex justify-center">
                <div 
                onClick={colorButton}
                className={`w-[20%] text-3xl drop-shadow-2xl font-bold rounded-2xl justify-center h-[60%] flex  items-center  
                ${color? "bg-green text-white" : "bg-white text-black"}`}>
                    <button>Generate Cupon</button></div>

            </div>
            </div>
            </CustomForm>
            </div>
        </div>
      </div>
    </div>
   
  );
};
