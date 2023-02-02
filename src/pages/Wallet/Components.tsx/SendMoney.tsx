import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";

const Categories = [
    {
        image:  "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" ,
        name : 'Albert'
    },
    {
        image:  "https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0",
        name : 'Amy'
    },
    {
        image: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
        name : 'Ellie'
    },
    {
        image:  "https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0",
        name : 'Mary'
    },
    {
        image:  "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
        name : 'Bruce'
    },
    {
        image:  "https://tse3.mm.bing.net/th?id=OIP.MTZ1p0jGlY1kcOMHTDqGOwHaJz&pid=Api&P=0",
        name : ' Leo'
    },
    {
        image:  "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
        name : 'Annie'
    },
    {
        image:  "https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg",
        name : 'Clara'
    },
    {
        image: "https://tse3.mm.bing.net/th?id=OIP.P2ixwd8Oykw_Gaqv98RR2QHaE8&pid=Api&P=0",
        name : 'Milo'
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0",
        name : 'Kristin'
    }
   

]




export const SendMoney = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full h-[5%] ">
           <BackButton />
            </div>
          <div className="font-bold w-full h-[5%] flex justify-center items-center text-3xl">Send Money</div>
           
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full flex flex-col   bg-quaternary rounded-xl">
            <div className="w-full h-[15%] flex justify-center items-center text-3xl text-white font-bold ">
                <p>Send Money To ?</p>
            </div>
            <div className="w-full h-full flex justify-center   ">
                <div className="w-[90%] h-[70%] flex justify-center  mt-10 grid grid-cols-5 gap-2.5  ">
                {Categories.map((Categories ) => (
                <div className=" w-full flex flex-col  text-xl text-white  flex justify-center items-center h-full">
                    <Link to="/user-send-money">  <img src={Categories.image} className="rounded-full hover:scale-90 w-[90px] h-[90px]"/></Link>
                     <p className="mt-2 text-2xl">{Categories.name}</p>
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
