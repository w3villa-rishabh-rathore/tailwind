import React from 'react'
import { LuHeart } from "react-icons/lu";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const FeatureCateorycard = () => {
  return (
    <div className='max-w-500 m-auto flex px-25 py-6 justify-center '>
      <div className='flex flex-col bg-gray-300 h-120 w-60 px-4 pt-4'>
        <div className='font-bold text-xl'>
            Fashion
        </div>
        <div className='h-1 w-15 my-2 bg-orange-400 rounded-full mb-4 '></div>
        <img className=' rounded mx-3' src="https://static.vecteezy.com/system/resources/previews/003/621/306/non_2x/beautiful-fashion-woman-in-sunglasses-stylish-girl-from-multicolored-paints-splash-of-watercolor-colored-drawing-realistic-illustration-of-paints-vector.jpg" alt="" />
        <div className='py-3 px-3 flex flex-col gap-3 text-gray-700'>
            <p>Accesories</p>
            <p>Dresses</p>
            <p>Pants</p>
            <p>T-Shirts</p>
            <p className='text-blue-900 underline font-bold'>See all in Fashion</p>
        </div>
      </div>
      <div className='bg-white h-120 w-300 flex-col px-4 pt-4 '>
        <div className='font-bold text-xl'>
            New in Fashion
        </div>
        <div className='h-1 w-15 my-2 bg-orange-400 rounded-full mb-4 '></div>

        <div className='flex justify-evenly gap-4 px-3'>
            <div className=' w-70 h-90 border-1 border-gray-200'>

                <div className='flex flex-col'>
                    <div className='relative overflow-hidden'>
                        <img className='w-65 h-65  mx-1 my-1'  src="" alt="" />
                        <p className='absolute bottom-56 right-5 bg-blue-600 p-1 text-white font-bold rounded text-sm' >New</p>
                        <p className='bg-red-500 w-40 text-center absolute bottom-55 text-white font-bold right-40  rotate-z-315'>2-3 DAYS</p>
                    </div>

                    <p className='text-blue-700 px-3 '>Bodycorn Dress</p>
                    <p className='px-3 border-b-1 pb-1 border-gray-300'>$399.00</p>

                    <div className='flex justify-between px-4 py-2 items-center '>
                        <p className='bg-blue-800 px-1 rounded text-white text-sm'>Add to cart</p>
                        <div className='flex gap-4'>
                            <LuHeart/>
                            <LuSquareArrowOutUpRight/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-70 h-90'>

                <div className='flex flex-col'>
                    <div className='relative overflow-hidden'>
                        <img className='w-65 h-65  mx-1 my-1'  src="" alt="" />
                        <p className='absolute bottom-56 right-5 bg-blue-600 p-1 text-white font-bold rounded text-sm' >New</p>
                        <p className='bg-red-500 w-40 text-center absolute bottom-55 text-white font-bold right-40  rotate-z-315'>2-3 DAYS</p>
                    </div>

                    <p className='text-blue-700 px-3 '>Bodycorn Dress</p>
                    <p className='px-3 border-b-1 pb-1 border-gray-300'>$399.00</p>

                    <div className='flex justify-between px-4 py-2 items-center '>
                        <p className='bg-blue-800 px-1 rounded text-white text-sm'>Add to cart</p>
                        <div className='flex gap-4'>
                            <LuHeart/>
                            <LuSquareArrowOutUpRight/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-70 h-90'>

                <div className='flex flex-col'>
                    <div className='relative overflow-hidden'>
                        <img className='w-65 h-65  mx-1 my-1'  src="" alt="" />
                        <p className='absolute bottom-56 right-5 bg-blue-600 p-1 text-white font-bold rounded text-sm' >New</p>
                        <p className='bg-red-500 w-40 text-center absolute bottom-55 text-white font-bold right-40  rotate-z-315'>2-3 DAYS</p>
                    </div>

                    <p className='text-blue-700 px-3 '>Bodycorn Dress</p>
                    <p className='px-3 border-b-1 pb-1 border-gray-300'>$399.00</p>

                    <div className='flex justify-between px-4 py-2 items-center '>
                        <p className='bg-blue-800 px-1 rounded text-white text-sm'>Add to cart</p>
                        <div className='flex gap-4'>
                            <LuHeart/>
                            <LuSquareArrowOutUpRight/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-70 h-90'>

                <div className='flex flex-col'>
                    <div className='relative overflow-hidden'>
                        <img className='w-65 h-65  mx-1 my-1'  src="" alt="" />
                        <p className='absolute bottom-56 right-5 bg-blue-600 p-1 text-white font-bold rounded text-sm' >New</p>
                        <p className='bg-red-500 w-40 text-center absolute bottom-55 text-white font-bold right-40  rotate-z-315'>2-3 DAYS</p>
                    </div>

                    <p className='text-blue-700 px-3 '>Bodycorn Dress</p>
                    <p className='px-3 border-b-1 pb-1 border-gray-300'>$399.00</p>

                    <div className='flex justify-between px-4 py-2 items-center '>
                        <p className='bg-blue-800 px-1 rounded text-white text-sm'>Add to cart</p>
                        <div className='flex gap-4'>
                            <LuHeart/>
                            <LuSquareArrowOutUpRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

      </div>
    
    </div>
  )
}

export default FeatureCateorycard
