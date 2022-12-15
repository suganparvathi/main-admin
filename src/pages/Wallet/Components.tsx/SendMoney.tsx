import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Notifcation from "../../../components/Notification";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import Entervalue from "../../../components/Entervalue";
import CustomForm from "../../../components/Form";
import Input from "../../../components/Input";
import { Form } from "formik";
import * as yup from "yup";
import { Col, Row } from 'antd';

const productCategories = [
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Albert'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Amy'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Ellie'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Mary'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Bruce'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0" className="rounded-full w-[90px] h-[90px]"/>,
        name : ' Leo'
    },
    {
        image:  <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Annie'
    },
    {
        image:  <img src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Clara'
    },
    {
        image:  <img src="https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Milo'
    },
    {
        image:  <img src="https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0" className="rounded-full w-[90px] h-[90px]"/>,
        name : 'Kristin'
    }
   

]




export const SendMoney = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[12%] ">
          <div className="w-full h-full  flex items-center ">
            <BackButton />
          </div>
          <div className="mt-6 font-bold w-[35%] text-3xl">Send Money</div>
          <div className="w-full h-full flex items-center">
            <Notifcation />
          </div>
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="w-full h-[15%] flex justify-center items-center text-3xl text-white font-bold ">
                <p>Send Money To ?</p>
            </div>
            <div className="w-full h-full flex justify-center   ">
                <div className="w-[90%] h-[70%] flex justify-center  mt-10 grid grid-cols-5 gap-2.5  ">
                {productCategories.map((productCategories ) => (


               
                    <div className=" w-full flex flex-col  text-xl text-white  flex justify-center items-center h-full">

                    <p><Link to="/user-send-money"> {productCategories.image} </Link></p>
                     <p>{productCategories.name}</p>


                    </div>
                       ))}
                   
                   
                </div>
                
            </div>
              
       
      </div>
      </div>
      </div>
    </div>
  );
};
