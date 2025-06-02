import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  return ( 
    <div className='bg-gray-100'>
      <div className='flex flex-col sm:flex-row justify-between items-center px-4 sm:px-25 py-4 sm:py-7 gap-4 sm:gap-10 max-w-full sm:max-w-500 m-auto'>
        {/* Logo */}
        <div className='flex items-center gap-4 uppercase text-2xl sm:text-4xl font-bold mb-2 sm:mb-0'>
          JOURNAL
        </div>

        {/* Search Bar */}
        <div className='flex flex-col sm:flex-row items-center w-full sm:w-auto gap-2 sm:gap-0 mb-2 sm:mb-0'>
          <div className='flex items-center bg-blue-500 p-1.5 rounded text-white w-full sm:w-auto'>
            <select name="" id="" className="w-full sm:w-auto">
              <option value="" className='text-sm'>ALL</option>
            </select>
          </div>
          <div className='flex items-center bg-white p-1.5 w-full sm:w-200'>
            <label htmlFor="" className='text-gray-400 hidden sm:block'></label>
            <input type="text" name="" id="" className="w-full outline-none bg-transparent" placeholder="Search Here..." />
          </div>
          <div className='flex items-center bg-blue-500 p-1.5 rounded text-white w-9 h-9 justify-center'>
            <FaSearch className='text-xl' />
          </div>
        </div>

        {/* Profile, Register, Wishlist, Compare */}
        <div className='flex flex-row sm:flex-row items-center gap-2 sm:gap-4 text-sm sm:text-m text-gray-500 mb-2 sm:mb-0'>
          <div className='flex flex-col items-center gap-1 hover:text-gray-900'>
            <div ><CgProfile/></div>
            <div>Login</div>
          </div>
          <div className='flex flex-col items-center gap-1 hover:text-gray-900'>
            <div ><HiMiniPencilSquare/></div>
            <div>Register</div>
          </div>
          <div className='flex flex-col items-center gap-1 hover:text-gray-900'>
            <div ><IoMdHeartEmpty/></div>
            <div>Wishlist</div>
          </div>
          <div className='flex flex-col items-center gap-1 hover:text-gray-900'>
            <div ><LuGitCompareArrows/></div>
            <div>Compare</div>
          </div>
        </div>

        {/* Cart */}
        <div className='flex flex-row items-center gap-2 sm:gap-4 text-sm sm:text-m text-gray-500'>
          <div>
            0 item(s) - $0.00 
          </div>
          <div>
            <div className='flex items-center bg-blue-500 p-1.5 rounded text-white w-9 h-9 justify-center'>       
              <FaCartArrowDown className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar