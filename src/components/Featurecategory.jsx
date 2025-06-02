import React from 'react'
import FeatureCateorycard from './FeatureCateorycard'

const Featurecategory = () => {
  return (
    <div className='bg-neutral-100 py-10'>
      <div className='flex flex-col justify-evenly items-center max-w-500 m-auto p-4 rounded w-full sm:w-300'>
        <div className='text-2xl sm:text-3xl font-bold text-gray-900 text-center'>
            Featured Category
        </div>
        <div className='h-1 w-12 sm:w-15 my-3 bg-yellow-400 rounded-full mb-4'></div>
        <div className='text-gray-400 text-sm max-w-full sm:max-w-400 text-center'>
           Easily create and manage your product categories with our intuitive interface. Organize your products into categories for better navigation and user experience. Whether you have a few products or a large inventory, our category management system is designed to help you keep everything organized and accessible.
        </div>
      </div>
      <FeatureCateorycard/>
    </div>
  )
}

export default Featurecategory