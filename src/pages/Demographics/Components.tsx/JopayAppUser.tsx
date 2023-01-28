import React, {useState, useEffect, useCallback,} from "react";
import BackButton from "../../../components/BackButton";
import Searchbar from "../../../components/Searchbar";
import { FiFilter } from "react-icons/fi";
import Overlay from "../../../components/Overlay";
import { AppUser } from "./AppUser";
import { Pilots } from "./Pilots";
import { JopayGrowth } from "./JopayGrowth";

const notificationTypes = [
    { label: "Jopay App users", value: "jopay App users" },
    { label: "Pilots And Co-Pilots", value: "pilots and co-pilots" },
   
  ];
  
  
    // const [showList, setShowList] =useState<number>(5);
  
      const members = [
          { name : "Harsha"},
          { name : "Muthu"},
          { name : "Bin"},
          { name : "Adnrew"},
          { name : "Stephen"},
          { name : "Marc"},
          { name : "Muthu"},
          { name : "Adnrew"},
          { name : "Stephen"},
          { name : "Marc"},
          { name : "Muthu"},
          { name : "Adnrew"},
          { name : "Stephen"},
          { name : "Marc"},
          { name : "Muthu"},
          { name : "Adnrew"},
          { name : "Stephen"},
          { name : "Marc"}, 
          { name : "Muthu"},
          { name : "Adnrew"},
      ]
  


export const JopayAppUser =() => {

    const [bank, setBank] = useState(1)

    console.log(bank);

    const [showType, setShowType] = useState("all");


    const renderNotificationTypes = useCallback(() => {
      switch (showType) {
        case "jopay App users":
          return <AppUser />;
        case "pilots and co-pilots":
          return <Pilots />;
       
        default:
          return null;
      }
    }, [showType]);

    return(
 <div className='flex flex-col items-center w-[95%]  h-[95%] mt-6 bg-quaternary rounded-3xl'>
           
            {/* jojpay user */}

              <div className=" flex justify-center items-center  text-white mt-2 w-[70%] h-[30%] ">
                         <div className=" flex  items-center justify-center   text-3xl w-full h-full border-b-4 border-white  gap-12 p-4 ">
                              {notificationTypes.map(({ label, value }) => (
                              <p
                              className={`hover:text-white ${
                              showType === value
                               ? "underline underline-offset-8 decoration-white font-bold underline 	"
                               : ""
                               }`}
                              onClick={() => setShowType(value)}
                               >
                              {label}
                              </p>
                                ))}
                          </div>
                </div>
                        {/* searchabar */}
            <div className="w-full ml-4  h-[15%] -mt-2 text-white">
                <Searchbar placeholder= "Search By Name/ID/Phone Number"/>
            </div>
            <div className="text-white relative flex flex-col  w-full  h-full font-semibold ">
                {renderNotificationTypes()}
            </div>
          </div>
          
    )


}