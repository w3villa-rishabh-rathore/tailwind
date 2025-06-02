import React from 'react'
import { FiHome } from "react-icons/fi";
import { LiaRocketchat } from "react-icons/lia";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaQuora } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";

const Subnav = () => {
  return (
    <div className='subnav-wrapper'>
      <div className='flex flex-col sm:flex-row justify-between items-center bg-white py-1 max-w-500 m-auto'>
        {/* Left Section */}
        <div className='pl-0 sm:pl-25 w-full sm:w-auto mb-2 sm:mb-0'>
          <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-500 w-full sm:w-auto'>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <FiHome />
              <li className='hover:text-gray-900 text-sm'>Home</li>
            </div>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <LiaRocketchat />
              <li className='hover:text-gray-900 text-sm'>About us</li>
            </div>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <IoMailUnreadOutline />
              <li className='hover:text-gray-900 text-sm'>Contact</li>
            </div>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <FaQuora />
              <select name="" id="" className="text-sm">
                <option value="" className='text-sm'>faq</option>
                <option value="">xyz</option>
                <option value="">xyz</option>
              </select>
            </div>
          </ul>
        </div>
        {/* Middle Section */}
        <div className='w-full sm:w-auto mb-2 sm:mb-0'>
          <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-500 w-full sm:w-auto'>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <select name="" id="" className="text-sm w-full sm:w-auto">
                <option value="" className='text-sm'>🇺🇸 English</option>
                <option value="" className='text-sm'>🇮🇳 Hindi</option>
                <option value="" className='text-sm'>🇫🇷 French</option>
              </select>
            </div>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <select name="" id="" className="text-sm w-full sm:w-auto">
                <option value="" className='text-sm'>💲Dollar</option>
                <option value="" className='text-sm'>💲Rupee</option>
                <option value="" className='text-sm'>💲Euro</option>
              </select>
            </div>
          </ul>
        </div>
        {/* Right Section */}
        <div className='pr-0 sm:pr-25 w-full sm:w-auto'>
          <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-500 w-full sm:w-auto'>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <TiThMenu />
              <select name="" id="" className="text-sm w-full sm:w-auto">
                <option value="" className='text-sm'>More Option</option>
                <option value="">xyz</option>
                <option value="">xyz</option>
              </select>
            </div>
            <div className='flex items-center gap-2 hover:text-gray-900'>
              <GrDeliver />
              <li className='hover:text-gray-900 text-sm'>Contact</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Subnav