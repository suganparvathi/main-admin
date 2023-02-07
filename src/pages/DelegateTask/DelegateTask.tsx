import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import SearchLogin from "../../components/SearchLogin";
import {FaUserPlus} from "react-icons/fa";
import{FaUserAltSlash} from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";
import Overlay from "../../components/Overlay";



const members =[ {
  img: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
  name:"Laura Parker"
 
  
},
{
  img: "https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0",
  name:"Martha",
  
},
{
  img: "https://yt3.ggpht.com/a/AATXAJzXiEdSCcKS1qvyGprSQuizIbCmuHfMgZ5p=s900-c-k-c0xffffffff-no-rj-mo",
  name:"Edward Shaw",
  
},
{
  img: "https://tse3.mm.bing.net/th?id=OIF.bCW4gKlSfNpc0lrkxPNIyg&pid=Api&P=0" ,
  name:"Michella",
  
},
{
  img: "https://sp-images.summitpost.org/1057780.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=ce1d4b9c67f75459e13fcde3abf4fe3e" ,
  name:"sugan",
  
},
{
  img: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" ,
  name:"Susan",
 
},
{
  img: "https://sp-images.summitpost.org/1057780.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=ce1d4b9c67f75459e13fcde3abf4fe3e " ,
  name:"Martha",
 
},
{
  img: "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg" ,
  name:"Beatrice",
 
},

]



export const DelegateTask = () => {

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   
  }
  const[open, setOpen]=useState(false)
    console.log(open);

   

    const[icon,seticon]=useState(false);
    const iconButton = () =>seticon(!icon);

    const [showMoreOptions1, setShowMoreOptions1] = useState(false);
  const handleShowOptions1 = () => {
      setShowMoreOptions1(!showMoreOptions1);
      
     
    }


  return (
    <div>
      <div className="relative">
      {showMoreOptions && (
        <>
        
         <div className="absolute z-10">
          <Overlay onClick={handleShowOptions} />
         </div>
    <div className="absolute  flex justify-center items-center w-full h-full">
      <div className=" w-full flex justify-center items-center h-full">
       <div className="bg-white z-20  flex text-black text-[12px] flex-row mr-14 drop-shadow-2xl justify-center items-center w-[9%] h-[15%]">
        <div className="w-full h-full flex  justify-center items-center flex-col">
        <button className="m-4" 
       onClick={iconButton} >{icon?"Remove user"  :  " Add user"}
       </button>
          <button>Remove From Logins</button>
       </div>
       </div>
      </div>
    </div>
    </>)}

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

                    {icon?<img className="rounded-full w-[70px]  h-[70px]" src={data.img}/> : <Link to="/task-dedication"><img className="rounded-full w-[70px] hover:scale-90 h-[70px]"  src={data.img}/></Link>   }
                 <div className="ml-2 w-52">{data.name}</div>
                <div className="text-quaternary cursor-pointer hover:scale-90 ml-2"onClick={ handleShowOptions} >
                   {icon? <FaUserAltSlash  />  :  <FaUserPlus/>} 
                  </div>
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
