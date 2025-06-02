import React from 'react'

const Buy = () => {
  return (
    <div className='flex flex-col justify-evenly items-center max-w-500 m-auto bg-white  sm:pt-10 rounded w-full sm:w-300'>
        <div className='text-2xl sm:text-3xl font-bold text-gray-900 text-center'>
            Why Buy From Us?
        </div>
        <div className='h-1 w-12 sm:w-15 my-3 bg-orange-300 rounded-full mb-4'></div>
        <div className='text-gray-400 text-sm max-w-full sm:max-w-400 text-center'>
            Journal has been selling most of the products online since 2010. We have a wide range of products and we are committed to providing the best quality and service to our customers. Our team is dedicated to ensuring that you have a great shopping experience with us.
        <a className='px-1 underline text-blue-600' href="">Learn more</a>
        </div>
    </div>
  )
}

export default Buy