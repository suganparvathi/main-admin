import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
import { BsBadgeAdFill } from "react-icons/bs";
import {FiPaperclip} from "react-icons/fi";
import CustomForm from "../../../components/Form";
import { Form } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { CreateAdsDetailsProps, UPDATE_AD } from "../../../store/reducers/CreateAds.reducer";

const validateEditAds = yup.object().shape({
  AttachBanner: yup
      .string()
      .label("AttachBanner"),
  EditAdName: yup
      .string()
      .label("EditAdName"),
  AttachYourAdURL: yup 
      .string()
      .label("AttachYourAdURL"),
  EditAdDisplayTime: yup  
      .string()
      .label("EditAdDisplayTime"),
 
                            
  })
  
  interface EditAdsDetailsProps{
    AttachBanner: string;
    EditAdName: string;
    AttachYourAdURL: string;
    EditAdDisplayTime: string;
   
   
   
  }


export const EditAd = () => {
   const dispatch = useDispatch();

  const adData = useSelector((state:RootState)=>state.ad);
  

  const [initialState, setinitialState] = useState<EditAdsDetailsProps>({
    AttachBanner: "",
    EditAdName: "",
    AttachYourAdURL: "",
    EditAdDisplayTime: "",

});

const handleSubmit = (values: EditAdsDetailsProps) => {
  const updateData:CreateAdsDetailsProps={
    AttachBanner: values.AttachBanner,
    EnterAdName: values.EditAdName,
    AttachYourAdURL: values.AttachYourAdURL,
    EnterAdDisplayTime: values.EditAdDisplayTime,
  }
  dispatch(UPDATE_AD(updateData));

}

React.useEffect(()=>{
  if(adData && adData.length){
    const lastCreatedRow = adData[adData.length-1];
    const initialStateData = {...initialState};
    initialStateData.AttachBanner = lastCreatedRow.AttachBanner;
    initialStateData.EditAdDisplayTime = lastCreatedRow.EnterAdDisplayTime;
    initialStateData.EditAdName = lastCreatedRow.EnterAdName;
    initialStateData.AttachYourAdURL = lastCreatedRow.AttachYourAdURL;
    setinitialState(initialStateData);
  }
},[adData])
console.log(initialState);
return ( 
  // <React.Fragment>
<div className="w-screen h-screen overflow-hidden">
<div className="w-[100%] flex-col  bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full items-center  flex-row h-[5%] ">
          
            <BackButton/><p className="text-2xl font-bold">Place Ads</p>
          </div>
          
          
                         {/* center div */}
        <div className="w-full h-full flex  mt-2 justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
          <CustomForm
            initialValues={initialState}
            validationSchema={validateEditAds}
            onSubmit={handleSubmit}>
              <div className="w-full h-full flex flex-col absolute">
            <div className=" w-full flex justify-center items-center text-6xl text-white font-light h-[15%]">Edit Ad</div>
            <div className="w-full h-[75%] flex flex-row">
              <div className="w-[40%] h-[70%] flex items-center">
                <div className="w-[50%] h-[70%] flex flex-col bg-white ml-10 flex justify-center items-center rounded-[40px]">
                  <BsBadgeAdFill className="text-5xl"/>
                  <p className="h-[30%] text-black mt-4 text-2xl">Attach Banner</p>
                  <label>
                  <Input
                  type="file"
                  name="AttachBanner"
                  placeholder='Attach Banner' 
                  className="hidden"/> 
                  <p className='text-2xl drop-shadow-lg cursor-pointer' > <FiPaperclip/></p>
                  </label>
                </div>

              </div>
              <div className="w-[55%] flex flex-col h-full">
              <div className="w-[80%] h-[15%] bg-white mt-4 drop-shadow-2xl flex justify-center items-center rounded-xl">
                <Input 
                type="text"
                name="EditAdName"
                placeholder='Edit Ad Name' 
                className="ml-3 w-[100%] rounded-sm  p-[4px] text-2xl leading-tight  bg-transparent  focus:outline-none text-black border-none" /> {" "}
              </div>

              <div className="w-[80%] h-[15%] mt-10 bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <Input 
                type="text"
                name="AttachYourAdURL"
                placeholder='Attach your Ad URL' 
                className="ml-3 w-[100%] rounded-sm  p-[4px] text-2xl leading-tight  bg-transparent  focus:outline-none text-black border-none" /> {" "}
              </div>
              <div className="w-[80%] h-[15%] mt-10 bg-white drop-shadow-2xl flex justify-center items-center rounded-xl">
                <Input 
                type="text"
                name="EditAdDisplayTime"
                placeholder='Edit Ad Display Time' 
                className="ml-3 w-[100%] rounded-sm  p-[4px] text-2xl leading-tight  bg-transparent  focus:outline-none text-black border-none" /> {" "}
              </div>
              <button className="w-[27%] mt-8 drop-shadow-2xl rounded-3xl h-[15%] font-bold text-3xl bg-green text-white">Update</button>

              </div>
            </div>
           
          
            </div>
          </CustomForm>
         
          </div>
          {/* <table>
     <thead>
       <tr>
         <th>S.No</th>
         <th>AdName</th>
         <th>DisplayTime</th>
       </tr>
     </thead>
     <tbody>
       {
         adData ? adData.map((el:any,index:number)=>{
           return(
             <tr key={index}>
               <td>{el.indexKey}</td>
               <td>{el.EnterAdName}</td>
               <td>{el.EnterAdDisplayTime}</td>
             </tr>
           )
         }) : <tr><td colSpan={3}>No Data Found.</td></tr>
       }
     </tbody>
   </table> */}
        </div>
        
      </div>
    </div>
    
  //  </React.Fragment>
        
       
        )
      }  