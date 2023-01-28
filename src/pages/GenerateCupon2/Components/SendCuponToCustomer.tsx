import React, { useCallback, useState } from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";



const Categories = [
  {
     
      name : 'OLA Bus',
      id: 'Albert(678FB)',
  },
  {
     
      name : 'Uber Bus',
      id: 'David(879TB)',
  },
  {
      
      name : 'Edward(695FE)',
      id: 'OLX Bus',
  },
  {
     
      name : 'Brook Bus',
      id: 'Edwin(876TY)',
  },
  {

      name : 'Red Bus',
      id: 'John(876TY)',
  },
  {
     
      name : ' Brews Bus',
      id: 'Rose(876TY)',
  },
 
 

]

const Filter=[
  {name: "Ticket Id"},
  {name: "Date"},
  {name: "Bus Company"},
  {name: "Ascending Order"},
  {name: "Decending Order"},
 
]
export const SendCuponToCustomer = () => {

const[state,setState]=useState<string>();


   
 

return ( 
   
   <div className="w-screen h-screen overflow-hidden flex">
      <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                          {/* top-div */}
       <div className="flex  w-full h-[7%] ">
          <div className="w-full h-full flex items-center ">
            <BackButton/>
          </div>
          <div className="w-[40%] text-3xl mt-4 h-full font-bold">
            Send Cupon
          </div>
          <div className="w-full  h-full flex items-center">
          
          </div>
        </div>
                         {/* center div */}
        <div className="w-full h-full flex justify-center ">
          <div className="mt-4 w-[90%] h-full bg-quaternary rounded-xl">
           <div className="w-full h-[10%]  text-white text-xl"><Searchbar placeholder= "Search By Company Name/Ticket ID/Company ID"/> </div>
            <div className="w-full h-[10%]  flex justify-center text-white font-bold ">
                <div className="flex flex-row text-white w-[95%] h-full text-xl font-bold">
                  <div className="w-[10%] h-[50%] ml flex justify-end font-extralight text-white text-3xl  items-center ">Filter <FiFilter className="text-white text-3xl ml-4"/></div>
                  {
                    Filter.map((a)=>(
                  <button
                  onClick={()=>{
                    console.log(a.name,"removeCupon")
                    setState(a.name)
                  }
                  }
                  className={`w-[20%] h-[70%] ml-2 flex justify-center  border-white border-2 drop-shadow-2xl font-extralight items-center rounded-3xl
                  ${a.name ===state? "bg-green text-white" : "bg-white text-black"}`}>{a.name}</button>
                    ))
                  }
                 
                </div> 
                  
            </div>
            <div className=" w-full h-[80%] flex justify-center">
            <div className="w-full h-full ">
                <div className="w-[90%] h-[70%] flex justify-center  mt-10 grid grid-cols-3 gap-2.5  ">
                {Categories.map((Categories ) => (


               
                    <div className=" w-full flex flex-col  text-xl text-white  flex justify-center items-center h-[90%]">

               <Link to="/send-to-bus" className="w-[20%] h-[50%] rounded-full drop-shadow-2xl bg-white flex justify-center items-center"><FaBus className="text-3xl text-quaternary "/></Link>
                    <p className="mt-2 text-2xl">{Categories.id}</p>
                     <p className="mt-2 font-light text-sm">{Categories.name}</p>


                    </div>
                       ))}
                   
                   
                </div>
                
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
   
        
       
        )
      }  