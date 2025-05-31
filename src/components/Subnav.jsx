import React from 'react'
import { FiHome } from "react-icons/fi";
import { LiaRocketchat } from "react-icons/lia";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaQuora } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";


const Subnav = () => {
  return (


      <div className='flex justify-between items-center bg-white  py-1 max-w-500 m-auto'>
        <div className='pl-25'> 
          <ul className='flex gap-4 text-gray-500 '>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <FiHome/>
                  <li className='hover:text-gray-900 text-sm'>Home</li>
              </div>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <LiaRocketchat/>
                  <li className='hover:text-gray-900 text-sm'>About us</li>
              </div>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <IoMailUnreadOutline/>
                  <li className='hover:text-gray-900 text-sm'>Contact</li>
              </div>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <FaQuora/>
                  <select name="" id="">
                      <option value="" className='text-sm'>faq</option>
                      <option value="">xyz</option>
                      <option value="">xyz</option>
                  </select>
              </div>
          </ul>
        </div>
        <div>
            <ul className='flex gap-4 text-gray-500'>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <select name="" id="">
                      
                      <option value="" className='text-sm'>
                              <p>🇺🇸 English</p>
                      </option>
                      <option value="" className='text-sm'>
                              <p>🇺🇸 Hindi</p>
                      </option>
                                          <option value="" className='text-sm'>
                              <p>🇺🇸 French</p>
                      </option>
                  </select>
              </div>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <select name="" id="">
                      
                      <option value="" className='text-sm'>
                              <p>💲Dollar</p>
                      </option>
                      <option value="" className='text-sm'>
                              <p>💲Dollar</p>
                      </option>
                                          <option value="" className='text-sm'>
                              <p>💲Dollar</p>
                      </option>
                  </select>
              </div>
          
            </ul>
        </div>
        <div className='pr-25'>
              <ul className='flex gap-4 text-gray-500'>
                  <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <TiThMenu/>
                  <select name="" id="">
                      <option value="" className='text-sm'>More Option</option>
                      <option value="">xyz</option>
                      <option value="">xyz</option>
                  </select>
              </div>
              <div className='flex items-center gap-2 hover:text-gray-900 '>       
                  <GrDeliver/>
                  <li className='hover:text-gray-900 text-sm'>Contact</li>
              </div>
              </ul>
        </div>
      </div>
    
  )
}

export default Subnav
