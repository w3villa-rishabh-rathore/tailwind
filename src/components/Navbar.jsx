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
        
    <div className='flex justify-between items-center px-25 py-7 gap-10 max-w-500 m-auto '>
      <div className='flex items-center gap-4 uppercase text-4xl font-bold'>
        JOURNAL
      </div>

      <div className='flex items-center   '>
        <div className='flex items-center bg-blue-500 p-1.5 rounded text-white'>       
                    
                        <select name="" id="">
                            <option value="" className='text-sm'>ALL</option>
                        </select>

        </div>
        <div className='flex items-center bg-white p-1.5 w-200'> 
            <label htmlFor="" className='text-gray-400'>Search Here...</label>
            <input type="text" name="" id="" />
        </div>
        <div className='flex items-center bg-blue-500 p-1.5 rounded text-white w-9 h-9'>       
            <FaSearch className='text-xl' />
        </div>

      </div>

      <div className='flex items-center gap-4 text-m text-gray-500'>
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
      <div className='flex items-center gap-4  text-m text-gray-500'>
        <div>
            0 item(s) - $0.00 
        </div>
        <div>
                    <div className='flex items-center bg-blue-500 p-1.5 rounded text-white w-9 h-9'>       
            <FaCartArrowDown className='text-xl' />
        </div>
        </div>
      </div>
      
</div>


    </div>
  )
}

export default Navbar
