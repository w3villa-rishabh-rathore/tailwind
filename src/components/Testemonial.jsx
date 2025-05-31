import React from 'react'
import { AiFillCaretUp } from "react-icons/ai";


const Testemonial = () => {
  return (

    <div className='flex justify-evenly items-center flex-col max-w-500 m-auto bg-white pt-10 pb-2 rounded w-300'>
        <div className='text-3xl font-bold text-gray-900'>
            What are people saying about us
        </div>
        <div className='h-1 w-15 my-3 bg-yellow-400 rounded-full mb-4 '></div>


        <div className='flex justify item-center bg-white pt-10  rounded gap-20'>
            <div className='flex flex-col justify py-1 w-100 h-60 bg-white text-center items-center '>
                <AiFillCaretUp className='text-6xl text-orange-500'/>
                <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quasi consequuntur nam dicta, deserunt illo praesentium mollitia molestiae dignissimos. Voluptatum ipsam vitae, necessitatibus deserun</p>
                <p className='pt-9 text-gray-600'>- charlibaltimore</p>
            </div>
            <div className='flex flex-col justify py-1 w-100 h-60 bg-white text-center items-center '>
                <AiFillCaretUp className='text-6xl text-orange-500'/>
                <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quasi consequuntur nam dicta, deserunt illo praesentium mollitia molestiae dignissimos. Voluptatum ipsam vitae, necessitatibus deserun</p>
                <p className='pt-9 text-gray-600'>- charlibaltimore</p>
            </div>
            <div className='flex flex-col justify py-1 w-100 h-60 bg-white text-center items-center '>
                <AiFillCaretUp className='text-6xl text-orange-500'/>
                <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quasi consequuntur nam dicta, deserunt illo praesentium mollitia molestiae dignissimos. Voluptatum ipsam vitae, necessitatibus deserun</p>
                <p className='pt-9 text-gray-600'>- charlibaltimore</p>
            </div>


        </div>

        <div className='flex gap-2'>
                <div className='flex h-2 w-2 rounded-full bg-yellow-600 my-4'>

                </div>
                <div className='flex h-2 w-2 rounded-full bg-gray-300 my-4'>

                </div>
        </div>
    </div>
  )
}

export default Testemonial
