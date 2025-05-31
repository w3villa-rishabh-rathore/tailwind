import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { TbMessage2Filled } from "react-icons/tb";
const Optionbar = () => {
  return (
    <div className='bg-blue-500 '>
      <div className='flex justify-between items-center px-25 gap-10 max-w-500 m-auto text-white text-lg h-15'>
        <div className='flex items-center uppercase gap-4'>
            <div className='bg-yellow-400 h-15 flex items-center px-4 text-black font-bold'>
                <HiMenuAlt2 className='text-2xl' />
                All Departments
            </div>
            <div className='flex items-center px-4 font-bold'>
                Multilevel
            </div>
            <div className='flex items-center px-4 font-bold'>
                Mega Menu
            </div>
            <div className='flex items-center px-4 font-bold'>
                FullWidth
            </div>
        </div>
        <div className='flex items-center gap-4 '>
            <div className='flex items-center px-4 py-2 font-bold '>
                    <div className='flex items-center p-1.5 rounded w-9 h-9 '>
                     <FaPhone className='text-xl'/>
                    </div>
                    <div className=''>
                        1800-123-4567 
                </div>
            </div>
            <div className='bg-yellow-400 h-15 flex items-center px-4 text-black font-bold uppercase'>
                <div className='flex items-center p-1.5 rounded w-9 h-9 '>
                <TbMessage2Filled className='text-2xl' />
                </div>
                Blog
            </div>
        </div>
      </div>
    </div>
  )
}

export default Optionbar
