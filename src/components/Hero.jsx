import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='max-w-500 m-auto'>
        <div className='flex flex-col lg:flex-row justify-center h-auto lg:h-[500px] gap-4 mt-2 lg:mt-5 mx-2 lg:mx-4 mb-6 lg:mb-5 px-2 lg:px-15'>
          {/* Main Hero Section */}
          <div className='bg-stone-100 rounded-xl flex flex-col lg:flex-row w-full'>
            <div className='flex flex-col items-start justify-center p-4 w-full lg:w-auto'>
              <button className='bg-blue-700 text-white px-4 py-2 mb-4 lg:mb-6 rounded-xs'>Mobile</button>
              <p className='font-bold text-2xl lg:text-5xl mb-4 lg:mb-6'>Best mobile options at any resolutions</p>
              <button className='px-4 py-2 border border-blue-700'>Learn more &rarr;</button>
            </div>
            <img className='rounded-xl w-full lg:w-auto h-48 lg:h-auto object-cover' src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          {/* Side Cards */}
          <div className='w-full lg:w-1/3 flex flex-col gap-4 mt-4 lg:mt-0'>
            <div className='bg-stone-100 h-48 lg:h-60 flex flex-col lg:flex-row justify-between items-center px-4 pr-1 rounded-xl'>
              <div className='mb-2 lg:mb-0'>
                <p className='text-blue-700 font-medium text-lg lg:text-xl'>WEARABLES</p>
                <p className='text-xl lg:text-2xl font-medium'>Intelligent & Durable Design</p>
              </div>
              <img className='h-32 w-full lg:h-56 lg:w-1/2 object-cover rounded-xl' src="https://static.vecteezy.com/system/resources/previews/046/829/689/non_2x/smart-watch-isolated-on-transparent-background-png.png" alt="" />
            </div>
            <div className='bg-stone-100 h-48 lg:h-60 flex flex-col lg:flex-row justify-between items-center px-4 pr-1 rounded-xl'>
              <div className='mb-2 lg:mb-0'>
                <p className='text-blue-700 font-medium text-lg lg:text-xl'>COMPUTERS</p>
                <p className='text-xl lg:text-2xl font-medium'>Build your own high powered PC</p>
              </div>
              <img className='h-32 w-full lg:h-56 lg:w-1/2 object-cover rounded-xl' src="https://wallpapers.com/images/hd/high-performance-gaming-setup-40r9a3bp9qs31xqb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero