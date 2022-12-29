import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const JopayVault = () => {


    const walletBalc:any = useSelector((state: RootState) => state.wallet)
    console.log(walletBalc.balance.vault, "reducer worked");

    return (
        <div className="text-white flex justify-center items-center w-full h-full">
           <div className="flex flex-row justify-center w-[50%] h-[70%] rounded-xl drop-shadow-2xl bg-white drop-shadow-3xl ">
                <div className="w-[35%] h-full flex justify-center items-center ">
                    <div className="flex justify-center items-center w-[80%] h-[50%] rounded-[60px] text-3xl bg-tertiary"><FaWallet className="text-quaternary"/></div>
                </div>
                <div className=" flex flex-col text-black justify-center w-[65%] h-full">
                    <div className="text-3xl m-2 font-bold">${walletBalc.balance.vault}</div>
                    <div className="m-2 font-semibold text-lg">Jopay Vault</div>

                </div>

           </div>
        </div>
        );
    };
    
    export default JopayVault;