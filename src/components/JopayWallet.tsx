import React from "react";
import { FaWallet } from "react-icons/fa";


const JopayWallet = () => {
    return (
        <div className="text-white flex justify-center items-center w-full h-full">
           <div className="flex flex-row justify-center w-[50%] h-[70%] rounded-xl bg-white drop-shadow-2xl">
                <div className="w-[35%] h-full flex justify-center items-center ">
                    <div className="flex justify-center items-center w-[80%] h-[50%] rounded-[60px] text-3xl bg-tertiary"><FaWallet className="text-quaternary"/></div>
                </div>
                <div className=" flex flex-col text-black justify-center w-[65%] h-full">
                    <div className="text-3xl m-2 font-bold">$10000</div>
                    <div className="m-2 font-semibold text-lg underline">Jopay Wallet Balance</div>

                </div>

           </div>
        </div>
        );
    };
    
    export default JopayWallet;