import React from 'react'

const Category = () => {
  return (
    <div className='flex justify-evenly items-center bg-white py-4 max-w-500 m-auto'>
      <div className='grid grid-cols-4  text-gray-500 uppercase border border-gray-300 rounded '>
        <div className='grid grid-cols-1 gap-2 bg-blue-500 p-2   text-center text-white font-bold'>
            Top Categories
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
