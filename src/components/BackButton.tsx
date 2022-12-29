import React from "react";

import { MdArrowBack } from "react-icons/md"
import {  useNavigate } from 'react-router-dom';

type BackButtonProps = {
    className?: string
}

const BackButton = (className:BackButtonProps) => {
    const navigate = useNavigate();
    const GoBack = () => {
        navigate(-1);
    }
    return(
        <div className={`z-10 flex justify-center items-center text-2xl ml-8 w-9 h-8`}>
           <button onClick={GoBack}><MdArrowBack  className="scale-125"/></button>
        </div>
    )
}


export default BackButton;