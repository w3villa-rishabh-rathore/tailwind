import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaSkype } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

const Social = () => {
  return (
    <div className='bg-gray-200'>
      <div className='flex flex-wrap sm:flex-nowrap justify-center mx-auto items-center h-auto sm:h-20 gap-2 text-center max-w-500 m-auto text-white py-4 sm:py-0'>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <FaFacebookF className=' text-2xl m-auto '/>
        </div>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <FaTwitter className=' text-2xl m-auto '/>
        </div>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <FaInstagramSquare className=' text-2xl m-auto '/>
        </div>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <FaLinkedinIn className=' text-2xl m-auto '/>
        </div>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <TfiYoutube className=' text-2xl m-auto '/>
        </div>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <FaSkype className=' text-2xl m-auto '/>
        </div>
        <div className='flex items-center text-center bg-blue-800 rounded-full h-10 w-10' >
            <IoLogoGoogleplus className=' text-2xl m-auto '/>
        </div>
      </div>
    </div>
  )
}

export default Social