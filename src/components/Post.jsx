import React from 'react'
import Postlatest from './Postlatest'

const Post = () => {
  return (
    <div className='bg-neutral-100'>
          <div className='flex justify-evenly items-center  py-4 max-w-500 m-auto'>
      <div className='grid grid-cols-2  text-gray-500 uppercase border border-gray-300 rounded '>
        <div className='grid grid-cols-1 gap-2 bg-blue-500 p-2   text-center text-white font-bold'>
            Featured
        </div>
        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Latest
        </div>
      </div>
      
    </div>
    <Postlatest/>
    </div>
  )
}

export default Post