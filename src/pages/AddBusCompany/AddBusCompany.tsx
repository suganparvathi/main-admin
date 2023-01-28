import React from 'react';
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton';




function AddBusCompany(){
    return(
        <div className="w-screen  h-screen overflow-hidden flex">
        <div className="w-[100%] flex-col items-center bg-white overflow-hidden h-[100%] flex">
                            {/* top-div */}
         <div className="flex  w-full h-[12%] ">
         <BackButton/>
         </div>     
             
                           {/* center div */}
          <div className="w-full h-full flex justify-center ">
              <div className="mt-4 w-[90%] h-full flex flex-row   bg-quaternary rounded-xl">
                <div className='w-[80%]  h-full mt-10 '>
                  <div className='w-[70%] ml-14 h-[80%]  font-thin text-6xl  font-bold text-white  '>
                    <div className='underline underline-offset-[15px] decoration-2 w-full font-bold h-[25%] mt-14'><Link to="/add-new-bus-company">Add New Bus Company</Link></div>
                    <div className='underline underline-offset-[15px] decoration-2  h-[20%] font-bold mt-14'><Link to="/bus-company-list">Bus Company List</Link></div>
                    <div className='underline underline-offset-[10px] decoration-2 h-[20%] font-bold mt-14'><Link to="/bin">Bin</Link></div>
                    
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    }
    
export default AddBusCompany;