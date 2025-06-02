import React from 'react'
import Postlatest from './Postlatest'
import { TiArrowSortedDown } from "react-icons/ti";

const Post = () => {
  return (
    <div className='bg-neutral-100'>
          <div className='flex justify-evenly items-center  py-4 max-w-500 m-auto'>
      <div className='grid grid-cols-2  text-gray-500 uppercase border border-gray-300 rounded '>
        <div className='relative grid grid-cols-1 gap-2 bg-blue-800 p-2   text-center text-white font-bold'>
            Latest Post
                        <div className='absolute top-6 left-10 text-blue-800'>
                                        <TiArrowSortedDown className='text-4xl'/>
                                    </div>
            

            

        </div>
        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Most Read
        </div>
      </div>
      
    </div>
    <Postlatest/>
    </div>
  )
}

export default Post