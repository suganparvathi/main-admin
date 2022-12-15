import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
// import CustomForm from '../../../components/Form';
// import Input from '../../../components/Input';
import CustomForm from './Form';
import Input from './Input';

import * as yup from "yup";


const validateSearchbar = yup.object().shape({
  Seacrchbar: yup
      .string()
      .label("Seacrchbar"),
  })
    
    interface SearchbarDetailsProps{
      Searchbar: string;
      
    }          

interface DemoProps {
    placeholder: string
    
}
const Searchbar = ({
    placeholder = "",
}:DemoProps) => {
   
  const initialState: SearchbarDetailsProps = {
    Searchbar: "",
  }
  const handleSubmit = (values: SearchbarDetailsProps) => {
    console.log(values);
    
  }  
 

    return (
      <CustomForm
      initialValues={initialState}
      validationSchema={validateSearchbar}
      onSubmit={handleSubmit}>
        <div className="flex items-center border-2 w-[95%] text-black border-white h-[60px] my-6 mx-3 rounded-full px-3">
                <input
                type="text"
                name="Searchbar"
                placeholder={ placeholder}
                className="bg-transparent border-none py-2 px-2 text-white text-2xl outline-none w-full"
              />{" "}
              <BsSearch className="text-white  text-2xl font-bold"/>
             
            </div>
            </CustomForm>
        );
      };
      
      export default Searchbar;
      