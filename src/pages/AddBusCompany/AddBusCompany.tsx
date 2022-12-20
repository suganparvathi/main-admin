import React from 'react';
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton';
import Notifcation from '../../components/Notification';



function AddBusCompany(){
    return(
        <div className="w-screen  h-screen overflow-hidden flex">
        <div className="w-[100%] flex-col items-center bg-secondary overflow-hidden h-[100%] flex">
                            {/* top-div */}
         <div className="flex  w-full h-[12%] ">
            <div className="w-full h-full flex items-center ">
              <BackButton/>
            </div>
            <div className="w-full h-full flex items-center">
              <Notifcation/>
            </div>
          </div>
                           {/* center div */}
          <div className="w-full h-full flex justify-center ">
              <div className="mt-4 w-[90%] h-full flex flex-row   bg-quaternary rounded-xl">
                <div className='w-[80%]  h-full mt-10 '>
                  <div className='w-[70%] ml-14 h-[80%]  font-thin text-6xl  font-bold text-white  '>
                    <div className='underline underline-offset-4 decoration-4 w-full font-bold h-[30%] mt-14'><Link to="/add-new-bus-company">Add New Bus Company</Link></div>
                    <div className='underline underline-offset-4 decoration-4  h-[25%] font-bold mt-14'><Link to="/bus-company-list">Bus Company List</Link></div>
                    <div className='underline underline-offset-4 decoration-4 h-[25%] font-bold mt-14'><Link to="/bin">Bin</Link></div>
                    
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    }
    
export default AddBusCompany;