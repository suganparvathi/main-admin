import React, { useState } from 'react'
import { BsCurrencyDollar } from "react-icons/bs";

import CustomForm from './Form';
import Input from './Input';

import * as yup from "yup";


const validateSearchbar = yup.object().shape({
  Seacrchbar: yup
      .string()
      .label("Entervlue"),
  })
    
    interface EntervalueDetailsProps{
        Entervalue: string;
      
    }          

interface DemoProps {
    placeholder: string
    
}
const Entervalue = ({
    placeholder = "",
}:DemoProps) => {
   
  const initialState: EntervalueDetailsProps = {
    Entervalue: "",
  }
  const handleSubmit = (values: EntervalueDetailsProps) => {
    console.log(values);
    
  }  
 

    return (
      <CustomForm
      initialValues={initialState}
      validationSchema={validateSearchbar}
      onSubmit={handleSubmit}>
        <div className="flex items-center justify-center border-2 w-[62%] text-black border-white h-[65px] my-6 mx-4 rounded-full px-3">
        <BsCurrencyDollar className="text-white ml-2  text-4xl "/>
                <input
                type="text"
                name="Entervalue"
                placeholder={ placeholder}
                className="bg-transparent border-none py-2 ml-6 text-white text-2xl outline-none w-full"
              />{" "}
             
             
            </div>
            </CustomForm>
        );
      };
      
      export default Entervalue;
      