import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col sm:flex-row items-start justify-around max-w-500 m-auto py-5 px-4 sm:px-25 gap-8 sm:gap-0'>
        <div className='flex flex-col border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 w-full pb-6 sm:pb-0'>
          <div className='text-gray-800 text-m'>
            About Us
          </div>
          <div className='h-1 w-15 my-3 bg-yellow-400 rounded-full mb-4 '></div>
          <div className='flex flex-col gap-3 text-blue-800'>
            <div>About us </div>
            <div>Delivery </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions </div>
            <div>Custom Links</div>
          </div>
        </div>
        <div className='flex flex-col border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 w-full pl-0 sm:pl-4 pb-6 sm:pb-0'>
          <div className='text-gray-800 text-m'>
            Customer Service
          </div>
          <div className='h-1 w-15 my-3 bg-yellow-400 rounded-full mb-4 '></div>
          <div className='flex flex-col gap-3 text-blue-800'>
            <div>Contact </div>
            <div>Return </div>
            <div>Site Map </div>
            <div>Brands </div>
            <div>Unlimited Links</div>
          </div>
        </div>
        <div className='flex flex-col border-b-2 sm:border-b-0 sm:border-r-2 border-gray-300 w-full pl-0 sm:pl-4 pb-6 sm:pb-0'>
          <div className='text-gray-800 text-m'>
            My Account
          </div>
          <div className='h-1 w-15 my-3 bg-yellow-400 rounded-full mb-4 '></div>
          <div className='flex flex-col gap-3 text-blue-800'>
            <div>My Account </div>
            <div>Order History </div>
            <div>Affilites </div>
            <div>News Letter </div>
            <div>Gift Certificates</div>
          </div>
        </div>
        <div className='flex flex-col w-full pl-0 sm:pl-4'>
          <div className='text-gray-800 text-m '>
            Newsletter
          </div>
          <div className='h-1 w-15 my-3 bg-yellow-400 rounded-full mb-4 '></div>
          <div className='flex flex-col gap-3 text-gray-500'>
            <div className='text-wrap w-full sm:w-60'>
              Stay up to date with news and promotions by signing up for our newsletter
            </div>
            <div className='flex flex-col sm:flex-row gap-2'>
              <input className='bg-white rounded h-10 pl-4 flex-1' placeholder='Your Email' type="email" name="" id="" />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send
              </button>
            </div>
            <div className='flex flex-row gap-2 text-sm text-gray-400'>
              <input type="checkbox" name="" id="" />
              <p>I have read and agree to the <a className='text-blue-500 underline' href=""> Privacy Policy</a> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer