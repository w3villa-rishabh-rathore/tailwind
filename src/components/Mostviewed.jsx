import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Mostviewed = () => {
  return (
    <div className='bg-gray-600'>
      <div className='flex flex-col justify-start h-auto sm:h-60 max-w-500 m-auto'>
        <p className='text-m pl-4 sm:pl-25 text-white pt-6'>MOST VIEWED</p>
        <div className='h-1 w-20 sm:w-27 my-3 bg-yellow-400 rounded-full mb-4 ml-4 sm:ml-25'></div>

        <div className='flex flex-col sm:flex-row justify-evenly px-4 sm:px-25 gap-4 sm:gap-0'>
          <div className='flex justify-start w-full sm:w-105 h-25 bg-white rounded pd-6'>
            <div className='h-22 w-22 my-auto ml-2'>
              <img className='rounded' src="https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-black-sunglasses-eyewear-png-image_11671474.png" alt="" />
            </div>
            <div className='flex flex-col w-72 h-22 ml-2 my-auto'>
              <div className='overflow-hidden text-sm text-gray-500 w-70 h-7 pl-2 py-2'>
                Oversized Sunglasses for Long life asdasdasdasds
              </div>
              <div className='text-sm text-gray-400 pl-2 py-2'>
                $397.00
              </div>
              <div className='flex justify-start gap-4 pl-2 text-gray-500'>
                <div>
                  <MdOutlineShoppingCart />
                </div>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <LuSquareArrowOutUpRight />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-start w-full sm:w-105 h-25 bg-white rounded pd-6'>
            <div className='h-22 w-22 my-auto ml-2'>
              <img className='rounded' src="https://cdn.mos.cms.futurecdn.net/C3JVFsG8kzpwRLMTsn44m8.jpg" alt="" />
            </div>
            <div className='flex flex-col w-72 h-22 ml-2 my-auto'>
              <div className='overflow-hidden text-sm text-gray-500 w-70 h-7 pl-2 py-2'>
                Oversized Sunglasses for Long life asdasdasdasds
              </div>
              <div className='text-sm text-gray-400 pl-2 py-2'>
                $397.00
              </div>
              <div className='flex justify-start gap-4 pl-2 text-gray-500'>
                <div>
                  <MdOutlineShoppingCart />
                </div>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <LuSquareArrowOutUpRight />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-start w-full sm:w-105 h-25 bg-white rounded pd-6'>
            <div className='h-22 w-22 my-auto ml-2'>
              <img className='rounded' src="https://atlas-content-cdn.pixelsquid.com/stock-images/women-shoes-stiletto-188lJo0-600.jpg" alt="" />
            </div>
            <div className='flex flex-col w-72 h-22 ml-2 my-auto'>
              <div className='overflow-hidden text-sm text-gray-500 w-70 h-7 pl-2 py-2'>
                Oversized Sunglasses for Long life asdasdasdasds
              </div>
              <div className='text-sm text-gray-400 pl-2 py-2'>
                $397.00
              </div>
              <div className='flex justify-start gap-4 pl-2 text-gray-500'>
                <div>
                  <MdOutlineShoppingCart />
                </div>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <LuSquareArrowOutUpRight />
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-start w-full sm:w-105 h-25 bg-white rounded pd-6'>
            <div className='h-22 w-22 my-auto ml-2'>
              <img className='rounded' src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800" alt="" />
            </div>
            <div className='flex flex-col w-72 h-22 ml-2 my-auto'>
              <div className='overflow-hidden text-sm text-gray-500 w-70 h-7 pl-2 py-2'>
                Oversized Sunglasses for Long life asdasdasdasds
              </div>
              <div className='text-sm text-gray-400 pl-2 py-2'>
                $397.00
              </div>
              <div className='flex justify-start gap-4 pl-2 text-gray-500'>
                <div>
                  <MdOutlineShoppingCart />
                </div>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <LuSquareArrowOutUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mostviewed