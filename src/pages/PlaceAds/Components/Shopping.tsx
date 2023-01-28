import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaEye} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {MdDeleteForever} from 'react-icons/md'
import { FaPen } from "react-icons/fa"
import { FaAngleDoubleDown } from "react-icons/fa"
import Overlay from '../../../components/Overlay'



interface ShoppingProps {
    name?: string
   
}
export const Shopping = ({name}:ShoppingProps) => {

    
    const ShoppingName =[
        { name:"Chritmas Shopping" },
        { name:"Good Friday Shopping" },
        { name:"New Year Eve Shopping" },
        { name:"New Year Shopping" },
        
    ]
    const [list, setList] = useState({
        object: ShoppingName
    })
    const [openEdit, setOpenEdit] =useState<any>({
        list,
        activeLink: null,
        isOpen: false,
    })

    const handleOpen = (index:number) => {
        setOpenEdit({activeLink: index})
        if(openEdit.activeLink === index){
            console.log(openEdit);
            setOpenEdit({isOpen: true})        
        }
        } 
        
const [showMoreOptions, setShowMoreOptions] = useState(false);
const handleShowOptions = () => {
    setShowMoreOptions(!showMoreOptions);
}

const [Options1, setOptions1] = useState(false);
const handleOptions1 = () => {
    setOptions1(!Options1);
}

  return (
    
    <div className='relative flex flex-col h-full items-center w-full'>
         {showMoreOptions && (
              <>
               <div className="absolute z-10 ">
          <Overlay onClick={handleShowOptions} />
         </div>
        <div className='absolute z-20 w-[75%] h-[60%] justify-center items-center  text-white  flex flex-row rounded-3xl bg-black'>
            <img src='https://www.trbimg.com/img-5467fe92/turbine/os-holiday-shopping-season-outlook-20141115' className='w-[25%] rounded-3xl ml-10 h-[70%]'/>
               <div className='w-[75%] h-[65%] text-2xl flex flex-col '>
                <p className='p-8'>Ad Name :<span className='font-bold ml-10'>Christmas Shopping</span></p>
                <p className='p-8'>Ad URL :<span className='font-bold ml-10'></span>https://tse2.Vwq32MRIaEL&pid=Api&P=0</p>
                <p className='p-8'>Display Time :<span className='font-bold ml-10'>0.8 Seconds</span></p>
               </div>
        </div></>)}

        {Options1 && (
              <>
        <div className="absolute z-10 ">
          <Overlay onClick={handleOptions1} />
         </div>
        <div className='absolute z-20 w-[75%] h-[60%] text-2xl justify-center  items-center  text-white  flex flex-col rounded-3xl bg-black'>
           
           <div className='h-[30%]'>Are You Sure Want To Delete. If You give Yeu You Can't Restore? </div>
           <div className='flex font-bold flex-row'>
            <p className='-ml-20'>Yes</p>
            <p className='ml-20'>No</p>
            </div>   
        </div>
        </>)}


        {list.object.map((item, index) => (
        <div className={`relative flex flex-col  w-full mb-6`}>
            <div className='z-10 flex text-2xl flex flex-row w-full h-16 bg-fuchsia-300 bg-opacity-20  text-white'>
                
          <div className='ml-8 font-light justify-start items-center mt-4  w-[80%] h-full'>{item.name}</div> 
          <div className='flex justify-end items-center w-[10%]'>
            <FaAngleDoubleDown onClick={() => {handleOpen(index);}} className="cursor-pointer"/> </div>
         </div>
       
        {openEdit.activeLink === index &&
            <div className=' flex justify-start items-center w-full text-2xl h-16 text-white bg-opacity-20 bg-fuchsia-300'>
                 <div className='ml-10'onClick={ handleShowOptions}><FaEye/></div> 
                <div className='ml-10'onClick={ handleOptions1}><MdDeleteForever className='scale-125' /></div>
                <div className='ml-10'><Link to="/edit-ad"><FaPen /></Link></div> 
               
            </div>
        }
        </div>
        
        ))}
    </div>
    
  )
}
