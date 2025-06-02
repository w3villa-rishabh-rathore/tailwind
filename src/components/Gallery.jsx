import React from 'react'

const Gallery = () => {
  return (
    <div className='bg-gray-600'>
      <div className='max-w-500 m-auto'>
        <div className='flex justify-evenly items-center flex-col max-w-500 m-auto py-10 rounded w-full sm:w-300'>
          <div className='text-3xl font-bold text-white text-center'>
            Improved Gallery Module
          </div>
          <div className='h-1 w-12 sm:w-15 my-3 bg-yellow-400 rounded-full mb-4'></div>
          <div className='text-gray-400 text-sm max-w-full sm:max-w-400 text-center'>
            The improved gallery module now supports a wider range of image formats and provides enhanced performance for loading and displaying images. Users can easily navigate through images with a more responsive interface, and the module includes features like zooming and full-screen viewing for an enriched user experience. Create     
          </div>
        </div>
        <div className='flex flex-wrap justify-around items-center gap-4 px-4 sm:px-25 pt-2 pb-12'>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-jmendezrf-1536619.jpg&fm=jpg" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://img.lovepik.com/photo/60166/4427.jpg_wh860.jpg" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://i.pinimg.com/736x/3c/08/a5/3c08a57c74e452814f623835288b7ab4.jpg" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107353/01/dt04/fnd/IND/fmt/png/Cricket-Square-Men's-Shoes" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://img.freepik.com/free-photo/portrait-beautiful-brunette-woman-with-long-curly-hair-flowers_158538-3984.jpg?semt=ais_hybrid&w=740" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://img.freepik.com/free-vector/big-discount-red-banner-online-sale_1017-53920.jpg?semt=ais_hybrid&w=740" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </div>
          <div className='flex items-center justify-center bg-gray-10 rounded w-28 h-28 sm:w-30 sm:h-30 text-gray-100 font-bold'>
            <img className='w-28 h-28 sm:w-30 sm:h-30 rounded object-cover' src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbiUyMGNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery