import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { TbMessage2Filled } from "react-icons/tb";
const Optionbar = () => {
  return (
    <div className='bg-blue-500'>
      <div className='flex flex-col sm:flex-row justify-between items-center px-4 sm:px-25 gap-4 sm:gap-10 max-w-full sm:max-w-500 m-auto text-white text-base sm:text-lg h-auto sm:h-15 py-2 sm:py-0'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center uppercase gap-2 sm:gap-4 w-full sm:w-auto'>
            <div className='bg-yellow-400 h-12 sm:h-15 flex items-center px-4 text-black font-bold w-full sm:w-auto'>
                <HiMenuAlt2 className='text-2xl' />
                <span className='ml-2'>All Departments</span>
            </div>
            <div className='flex items-center px-4 font-bold w-full sm:w-auto'>
                Multilevel
            </div>
            <div className='flex items-center px-4 font-bold w-full sm:w-auto'>
                Mega Menu
            </div>
            <div className='flex items-center px-4 font-bold w-full sm:w-auto'>
                FullWidth
            </div>
        </div>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto'>
            <div className='flex items-center px-4 py-2 font-bold w-full sm:w-auto'>
                <div className='flex items-center p-1.5 rounded w-9 h-9'>
                    <FaPhone className='text-xl'/>
                </div>
                <div className='ml-2'>
                    1800-123-4567 
                </div>
            </div>
            <div className='bg-yellow-400 h-12 sm:h-15 flex items-center px-4 text-black font-bold uppercase w-full sm:w-auto mt-2 sm:mt-0'>
                <div className='flex items-center p-1.5 rounded w-9 h-9'>
                    <TbMessage2Filled className='text-2xl' />
                </div>
                <span className='ml-2'>Blog</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Optionbar