import React from 'react'

const FeatureCateorycard = () => {
  return (
    <div className='max-w-500 m-auto flex px-25 py-6 justify-center '>
      <div className='flex flex-col bg-gray-300 h-120 w-60 px-4 pt-4'>
        <div className='font-bold text-xl'>
            Fashion
        </div>
        <div className='h-1 w-15 my-2 bg-orange-400 rounded-full mb-4 '></div>
        <img className='rounded' src="https://static.vecteezy.com/system/resources/previews/003/621/306/non_2x/beautiful-fashion-woman-in-sunglasses-stylish-girl-from-multicolored-paints-splash-of-watercolor-colored-drawing-realistic-illustration-of-paints-vector.jpg" alt="" />
        <div className='py-4 flex flex-col gap-1 text-gray-700'>
            <p>Accesories</p>
            <p>Dresses</p>
            <p>Pants</p>
            <p>T-Shirts</p>
            <p className='text-blue-900 underline font-bold'>See all in Fashion</p>
        </div>
      </div>
      <div className='bg-gray-500 h-120 w-300 flex-col px-4 pt-4 '>
        <div className='font-bold text-xl'>
            New in Fashion
        </div>
        <div className='h-1 w-15 my-2 bg-orange-400 rounded-full mb-4 '></div>

        <div className='flex justify-evenly gap-4'>
            <div className='bg-gray-300 '>

            </div>

        </div>

      </div>
    
    </div>
  )
}

export default FeatureCateorycard
