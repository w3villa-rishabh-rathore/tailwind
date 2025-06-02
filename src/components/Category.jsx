import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

const Category = () => {
  return (
    <div className='flex justify-evenly items-center bg-white py-10 max-w-500 m-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-4  text-gray-500 uppercase border border-gray-300 rounded '>
        <div className='relative grid grid-cols-1 gap-2 bg-blue-700 p-2   text-center text-white font-bold'>
            Top Categories
            <div className='absolute top-6 left-13 text-blue-700'>
                <TiArrowSortedDown className='text-4xl'/>
            </div>

        </div>
        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Electronics
        </div>
        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Beauty
        </div>

        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Fashion
        </div>
      </div>
    </div>





  )
}

export default Category
