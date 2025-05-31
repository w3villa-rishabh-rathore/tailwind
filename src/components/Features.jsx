import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiCodeblocks } from "react-icons/si";


const Features = () => {
  return (
    <div className='bg-gray-600 '>
      <div className='flex justify-between items-center px-25 max-w-500 m-auto text-white text-sm h-25'>
            <div className='flex items-center  '>
                    <div className='flex items-center pt-1 pb-1 pl-2 rounded w-11 h-10 bg-blue-500'>
                        <FaShippingFast className='text-2xl' />
                    </div>
               <div className='flex flex-col items-left px-4 '>
                    <div className='font-bold'>
                            Free Shipping 
                    </div>
                    <div className='text-sm text-gray-300'> 
                            Free delivery on over $100
                    </div>
               </div>

            </div>
            <div className='flex items-center'>
                    <div className='flex items-center pt-1 pb-1 pl-2 rounded w-11 h-10 bg-blue-500'>
                        <GiReturnArrow className='text-2xl' />
                    </div>
               <div className='flex flex-col items-left px-4 '>
                    <div className='font-bold'>
                            Free Return 
                    </div>
                    <div className='text-sm text-gray-300'> 
                            Hassle free returns
                    </div>
               </div>

            </div>
            <div className='flex items-center '>
                    <div className='flex items-center pt-1 pb-1 pl-2 rounded w-11 h-10 bg-blue-500'>
                        <MdOutlineSecurity className='text-2xl' />
                    </div>
               <div className='flex flex-col items-left px-4 '>
                    <div className='font-bold'>
                            Secure Shopping
                    </div>
                    <div className='text-sm text-gray-300'> 
                            Best security features
                    </div>
               </div>

            </div>
            <div className='flex items-center'>
                    <div className='flex items-center pt-1 pb-1 pl-2 rounded w-11 h-10 bg-blue-500'>
                        <SiCodeblocks className='text-2xl' />
                    </div>
               <div className='flex flex-col items-left px-2'>
                    <div className='font-bold'>
                            Unlimited Blocks
                    </div>
                    <div className='text-sm text-gray-300'> 
                            Any content any page
                    </div>
               </div>

            </div>
      </div>
    </div>
  )
}

export default Features
