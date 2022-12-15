import React from "react";


import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notifcation = () => {
    return (
        <div className="flex justify-end items-center text-black w-full hh-full">
            <div className="mr-4 text-2xl"><IoMdNotificationsOutline/></div>
            <div className="flex flex-row mr-4">
                <p className="mr-2 text-2xl"><FaUserCircle/></p>
                <p>Kete Wilson</p>
            </div>
            <div className="mr-6 text-2xl "><FaAngleDown/></div>
        </div>
        );
    };
    
    export default Notifcation;