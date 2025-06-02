import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";

const Subfooter = () => {
  return (
    <div className='bg-gray-600'>
      <div className='flex flex-col sm:flex-row justify-between items-center max-w-500 m-auto text-gray-400 h-auto sm:h-15 py-3 sm:py-0 px-4 sm:px-0'>
        <div className='w-full sm:w-1/2 pl-0 sm:pl-25 text-center sm:text-left mb-2 sm:mb-0'>
            Copyright @ 2025, Your Store , All Rights Reserved
        </div>
        <div className='flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 pr-0 sm:pr-25'>
          <img className='w-10 h-9' src="https://img.icons8.com/ios_filled/512/FFFFFF/visa.png" alt="" />
          <img className='w-10 h-6.5 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl-URIczIK3VMMdRUqA05CCGnaASAo2EFkg&s" alt="" />
          <img className='w-15 h-6.5 rounded' src="https://rasky.com/wp-content/uploads/2020/07/Mastercard-logo-black-and-white.png" alt="" />
          <img className='w-10 h-6.5 rounded' src="https://logowik.com/content/uploads/images/paypal-black8790.jpg" alt="" />
          <img className='w-10 h-6.5 rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stripe_logo%2C_revised_2014.png/1200px-Stripe_logo%2C_revised_2014.png" alt="" />
          <img className='w-10 h-6.5 rounded' src="https://www.drupal.org/files/project-images/razorpay.png" alt="" />
          <FaArrowCircleUp className='text-3xl text-white bg-blue-800'/>
        </div>
      </div>
    </div>
  )
}

export default Subfooter