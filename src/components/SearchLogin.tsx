import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
// import CustomForm from '../../../components/Form';
// import Input from '../../../components/Input';
import CustomForm from './Form';
import Input from './Input';

import * as yup from "yup";


const validateSearchLogin = yup.object().shape({
  SeacrchLogin: yup
      .string()
      .label("Seacrchlogin"),
  })
    
    interface SearchLoginDetailsProps{
      Searchbar: string;
      
    }          

interface DemoProps {
    placeholder: string
    
}
const SearchLogin = ({
    placeholder = "",
}:DemoProps) => {
   
  const initialState: SearchLoginDetailsProps = {
    Searchbar: "",
  }
  const handleSubmit = (values: SearchLoginDetailsProps) => {
    console.log(values);
    
  }  
 

    return (
      <CustomForm
      initialValues={initialState}
      validationSchema={validateSearchLogin}
      onSubmit={handleSubmit}>
        <div className="flex justify-center items-center ml-[9%]  border-[3px] w-[80%] text-black border-quaternary h-[45px] rounded-full px-3">
                <input
                type="text"
                name="Searchbar"
                placeholder={ placeholder}
                className="bg-transparent border-none py-2 px-2 text-black text-2xl outline-none w-full"
              />{" "}
              <BsSearch className="text-black  text-2xl font-bold"/>
             
            </div>
            </CustomForm>
        );
      };
      
      export default SearchLogin;
      