import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import { Form } from "formik";
import * as yup from "yup";
import Overlay from "../../../components/Overlay";
import { FaBus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { AddOfferDetailsProps, defaultAddOfferValue, UPDATE_ADDOFFER } from "../../../store/reducers/AddOffer.reducer";
import { defaultAddCuponValue } from "../../../store/reducers/AddCupon.reducer";
import { FiPaperclip } from "react-icons/fi";


const validateAddOffer = yup.object().shape({
  EnterOfferDetails: yup
      .string()
      .label("EnterOfferDetails"),
  VaildFrom: yup
      .string()
      .label("VaildFrom"),
  EnterOfferType: yup 
      .string()
      .label("EnterOfferType"),
  ValidTo: yup  
      .string()
      .label("ValidTo"),
  AddBannerImage: yup
      .string()
      .label("AddBannerImage"),                          
  })
  
  // interface AddOfferDetailsProps{
  //   EnterOfferDetails: string;
  //   VaildFrom: string;
  //   EnterOfferType: string;
  //   ValidTo: string;
  //   AddBannerImage: string;
    
  // }



export const AddOffer= () => {

//   const initialState:  AddOfferDetailsProps = {
//     EnterOfferDetails: "",
//     VaildFrom: "",
//     EnterOfferType: "",
//     ValidTo: "",
//     AddBannerImage: "",
  
// }
// const handleSubmit = (values: AddOfferDetailsProps) => {
// console.log(values);

// }

  const[color,setcolor]=useState(false);
  const colorButton= () => setcolor(!color);
  const dispatch = useDispatch();

   const addofferData = useSelector((state:RootState)=>state.addoffer)

   const initialState: AddOfferDetailsProps =  defaultAddOfferValue;

const handleSubmit = (values: AddOfferDetailsProps) => {
dispatch( UPDATE_ADDOFFER(values));



  // console.log(values);
  
}
 React.useEffect(()=>{
  console.log( addofferData,'reducerData');
 },[ addofferData])

  // const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  // const handleShowOptions = () => {
  //   setShowMoreOptions(!showMoreOptions);
    
  //  }
  //  console.log(showMoreOptions,"sugan");


  return (
    
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[10%] ">
          <div className="w-full h-full  ">
            <BackButton />
          </div>
          <div className='rounded-full mt-8  drop-shadow-2xl bg-white justify-center flex items-center w-[17%] h-[120px]'>
               
                <p className="bg-logo bg-no-repeat bg-center w-12 h-14 text-3xl"></p>
            </div>
        <div className="w-full ">
          
          </div>
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col  bg-quaternary rounded-xl">

          <CustomForm
            initialValues={initialState}
            validationSchema={validateAddOffer}
            onSubmit={handleSubmit}>

            <div className="w-full h-full  flex absolute flex-col">
            <div className="w-full h-[65%] flex-col flex justify-center items-center">
                <div className="w-[60%] flex  items-center h-[45%]">
                    <div className="w-[45%]  h-[35%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
                    <div className='flex items-center'>
                     
                     <Input 
                     type="text"
                     name="EnterOfferDetails"
                     placeholder='Enter Offer Details' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>
                    <div className="w-[30%] ml-20 h-[35%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <Input 
                     type="date"
                     name="VaildFrom"
                     placeholder='Vaild From' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>
                </div>
                <div className="w-[60%] flex  h-[25%]">

                <div className="w-[45%]  h-[55%] bg-white drop-shadow-2xl flex items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <Input 
                     type="text"
                     name="EnterOfferType"
                     placeholder='Enter Offer Type' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>
                    <div className="w-[30%] ml-20 h-[55%] bg-white drop-shadow-2xl flex  items-center rounded-xl">
                    <div className='flex items-center '>
                     
                     <Input 
                     type="date"
                     name="ValidTo"
                     placeholder='Valid To' 
                     className="ml-3 w-[100%] rounded-sm  p-[7px] text-2xl leading-tight  bg-transparent  focus:outline-none 
                     focus:line focus:border-border-blue-500  text-black border-none" /> {" "}
                 </div>
                    </div>

                    

                </div>
                  
                <div className="w-full flex justify-center h-[15%]">
                <label className="w-[30%] h-[90%] bg-white drop-shadow-2xl cursor-pointer pl-6 text-gray-400 text-xl  flex flex-row justify-center items-center rounded-xl">
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
            <div className="w-full h-[20%] flex justify-center">
                <button 
                onClick={colorButton}
                className={`w-[20%] text-3xl drop-shadow-2xl font-bold rounded-2xl h-[60%] flex justify-center items-center bg-white text-black
                ${color? "bg-green text-white" : "bg-white text-black"}`}>
                    Generate Cupon</button>

            </div>
            </div>
            </CustomForm>
            </div>
        </div>
      </div>
      </div>
   
   
  );
};
