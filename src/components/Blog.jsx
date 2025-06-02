import React from 'react'

const Blog = () => {
  return (
    <div className='bg-neutral-100'>
      <div className='flex justify-evenly items-center flex-col max-w-500 m-auto p-10 sm:p-10 rounded w-full sm:w-300'>
        <div className='text-2xl sm:text-3xl font-bold text-gray-900 text-center'>
          From our Blogs
        </div>
        <div className='h-1 w-12 sm:w-15 my-3 bg-yellow-400 rounded-full mb-4'></div>
        <div className='text-gray-400 text-sm max-w-full sm:max-w-400 text-center'>
          Journal comes with its own simple yet powerful blog. with the new advanced typography styles your post pafe design will be unmatch.
        </div>
      </div>
    </div>
  )
}

export default Blog