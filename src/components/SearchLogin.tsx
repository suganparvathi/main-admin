import React from 'react'
import { BsSearch } from "react-icons/bs";




interface DemoProps {
    placeholder: string
    handleSubmit?: (values:any) => void,
    
}
const SearchLogin = ({
    placeholder,
    handleSubmit
}:DemoProps) => {
   

    return (
        <div className="flex justify-center items-center ml-[9%]  border-[3px] w-[80%] text-black border-quaternary h-[45px] rounded-full px-3">
                <input
                onChange={handleSubmit}
                type="text"
                name="Searchbar"
                placeholder={ placeholder}
                className="bg-transparent border-none py-2 px-2 text-black text-2xl outline-none w-full"
              />
              <BsSearch className="text-black  text-2xl font-bold"/> 
            </div>
        );
      };
      
      export default SearchLogin;
      