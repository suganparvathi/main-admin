import { relative } from "node:path/win32";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../data/routes";
import { RootState } from "../../store";
import Notifcation from "../../components/Notification";
import Overlay from "../../components/Overlay";
import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import BackButton from "../../components/BackButton";

const Dashboard = () => {

  
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  

  const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
    
   }
   console.log(showMoreOptions,"sugan");
  
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) return <Navigate to="/sign-in" />;
 return (

  <div className='relative'>
  {showMoreOptions && (
       <>
       <div className="absolute z-10">
      <Overlay onClick={handleShowOptions} />
     </div>
    <div className='absolute flex justify-end  w-full h-full'>
      <div className='bg-white z-20 mt-10 mr-10 flex drop-shadow-2xl flex-col text-xl justify-center items-center w-[8%] h-[15%]'>
        <p className=''></p>
       

      </div>

    </div>
    </>


)}
    <main className="w-screen h-screen   overflow-hidden">
      <div className="w-[100%] h-[6%] flex justify-end items-center">
  <div className="flex justify-end mt-4 text-black w-[15%]">
            <div className="mr-4 text-2xl"><IoMdNotificationsOutline/></div>
            <div className="flex flex-row mr-4">
                <p className="mr-2 text-2xl"><FaUserCircle/></p>
                <p>Kete Wilson</p>
            </div>
            <div className="mr-6 text-2xl"onClick={ handleShowOptions}><FaAngleDown/></div>
        </div> 
        {/* </div> */}
      </div>
    {/* <BackButton/> */}
      {/* <div className="flex justify-end w-full h-full"> */}
     
    {/* <div className="flex justify-end mt-4  items-center text-black w-[15%]">
            <div className="mr-4 text-2xl"><IoMdNotificationsOutline/></div>
            <div className="flex flex-row mr-4">
                <p className="mr-2 text-2xl"><FaUserCircle/></p>
                <p>Kete Wilson</p>
            </div>
            <div className="mr-6 text-2xl"onClick={ handleShowOptions}><FaAngleDown/></div>
        </div> */}
        {/* </div> */}

      {/* <Notifcation/> */}
      <section className="w-screen">
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route path={path} element={<Element />} key={path} />
          ))}
          <Route path="/" element={<Navigate to="/demographics" />} />
        </Routes>
      </section>
     
    </main>
    </div>
    
  );
};

export default Dashboard;
