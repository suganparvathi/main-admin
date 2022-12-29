import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Notifcation from "../../components/Notification";
import BackButton from "../../components/BackButton";
import { Form } from "formik";
import * as yup from "yup";
import Searchbar from "../../components/Searchbar";
import SearchLogin from "../../components/SearchLogin";
import {FaUserPlus} from "react-icons/fa";
import{FaUserAltSlash} from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";
import Overlay from "../../components/Overlay";



const members =[ {
  img: <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/>,
  name:"Laura Parker"
 
  
},
{
  img: <img src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0" className="rounded-full w-[70px] h-[70px]"/>,
  name:"Martha",
  icon:<FaUserPlus className="text-quaternary"/>
},
{
  img: <img src="https://yt3.ggpht.com/a/AATXAJzXiEdSCcKS1qvyGprSQuizIbCmuHfMgZ5p=s900-c-k-c0xffffffff-no-rj-mo" className="rounded-full w-[70px] h-[70px]"/>,
  name:"Edward Shaw",
  icon:<FaUserPlus className="text-quaternary"/>
},
{
  img: <img src="https://tse3.mm.bing.net/th?id=OIF.bCW4gKlSfNpc0lrkxPNIyg&pid=Api&P=0" className="rounded-full w-[70px] h-[70px]"/>,
  name:"Michella",
  icon:<FaUserPlus className="text-quaternary"/>
},
{
  img: <img src="https://sp-images.summitpost.org/1057780.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=ce1d4b9c67f75459e13fcde3abf4fe3e" className="rounded-full w-[70px] h-[70px]"/>,
  name:"sugan",
  icon:<FaUserPlus className="text-quaternary"/>
},
{
  img: <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/>,
  name:"Susan",
  icon:<FaUserPlus className="text-quaternary"/>
},
{
  img: <img src="https://sp-images.summitpost.org/1057780.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=ce1d4b9c67f75459e13fcde3abf4fe3e " className="rounded-full w-[70px] h-[70px]"/>,
  name:"Martha",
  icon:<FaUserPlus className="text-quaternary"/>
},
{
  img: <img src="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" className="rounded-full w-[70px] h-[70px]"/>,
  name:"Beatrice",
  icon:<FaUserPlus className="text-quaternary"/>
},

]






export const DelegateTask = () => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   
  }

  console.log(showMoreOptions,"sugan");
  





  

  return (
    <div>
      <div className="relative">
      {showMoreOptions && (
        <>
        
         <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className="absolute  flex justify-center items-center w-full h-full">
   ss
      <div className=" w-full flex justify-center items-center h-full">
       <div className="bg-white z-20  flex text-black text-[12px] flex-row mr-14 drop-shadow-2xl justify-center items-center w-[9%] h-[15%]">
        <div className="w-full h-full flex  justify-center items-center flex-col">
        <button className="m-4">Add user</button>
        <button>Remove From Logins</button>
       </div>
       </div>
      </div>
    </div>
    </>


    )}
      <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
        {/* top-div */}
        <div className="flex  w-full items-center h-[3%] ">
          
            <BackButton />
         
        
          
        </div>
        {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-full h-full flex flex-col items-center bg-secondary rounded-xl">
            <div className="w-[60%] mt-10 flex flex-col items-center rounded-2xl h-full bg-white">
              <div className="text-3xl w-full flex justify-center text-black items-center font-bold h-[10%] ">
                Task Dedication
              </div>
              <div className=" w-full  h-[15%]">
                <SearchLogin placeholder="Search Logins"/>
              </div>
              <div className=" w-[90%]  flex flex-end grid grid-cols-2 justify-center gap-x-[15%] gap-y-[15%] overflow-y-auto h-[60%]">
                {members.map((data) => (
                  <div className="w-full items-center text-2xl font-bold h-full flex justify-start">
                    
                <div className="">{data.img}</div>
                <div className="ml-2 w-52">{data.name}</div>
                {/* <div className="ml-2" >{data.icon}</div> */}
                <div className="text-quaternary cursor-pointer ml-2" onClick={ handleShowOptions}><FaUserPlus /></div>
                
                </div>
                ))}
              </div>
            </div>
            
           
          
          </div>
        </div>
      </div>
    </div>
    </div>

    </div>
  );
};
