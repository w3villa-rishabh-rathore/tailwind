import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { SiCodeblocks } from "react-icons/si";


const Features = () => {
  return (
    <div className='bg-gray-600'>
      <div className='flex flex-col sm:flex-row justify-between items-center px-4 sm:px-25 max-w-full sm:max-w-500 m-auto text-white text-sm h-auto sm:h-25 py-10 sm:py-0 gap-4 sm:gap-0'>
        <div className='flex items-center w-full sm:w-auto'>
          <div className='flex items-center pt-1 pb-1 pl-2 rounded-full w-11 h-10  border-2 border-blue-600'>
            <FaShippingFast className='text-2xl text-orange-500' />
          </div>
          <div className='flex flex-col items-left px-4'>
            <div className='font-bold'>
              Free Shipping 
            </div>
            <div className='text-sm text-gray-300'> 
              Free delivery on over $100
            </div>
          </div>
        </div>
        <div className='flex items-center w-full sm:w-auto'>
           <div className='flex items-center pt-1 pb-1 pl-2 rounded-full w-11 h-10  border-2 border-blue-600'>
            <GiReturnArrow className='text-2xl text-orange-500' />
          </div>
          <div className='flex flex-col items-left px-4'>
            <div className='font-bold'>
              Free Return 
            </div>
            <div className='text-sm text-gray-300'> 
              Hassle free returns
            </div>
          </div>
        </div>
        <div className='flex items-center w-full sm:w-auto'>
          <div className='flex items-center pt-1 pb-1 pl-2 rounded-full w-11 h-10  border-2 border-blue-600'>
            <MdOutlineSecurity className='text-2xl text-orange-500' />
          </div>
          <div className='flex flex-col items-left px-4'>
            <div className='font-bold'>
              Secure Shopping
            </div>
            <div className='text-sm text-gray-300'> 
              Best security features
            </div>
          </div>
        </div>
        <div className='flex items-center w-full sm:w-auto'>
           <div className='flex items-center pt-1 pb-1 pl-2 rounded-full w-11 h-10  border-2 border-blue-600'>
            <SiCodeblocks className='text-2xl text-orange-500' />
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