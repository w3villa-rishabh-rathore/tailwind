import React from 'react'

const FeatureProduct = () => {

    const products = [
  {
    id: 1,
    title: 'Headphones',
    brand: 'Ericksson',
    model: 'Model 519',
    price: 999.00,
    originalPrice: 3299.00,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    badges: [
      { type: 'discount', text: '-70%', color: 'bg-red-600' },
      { type: 'hot', text: 'HOT', color: 'bg-yellow-400' },
      { type: 'custom', text: 'CUSTOM LABELS', color: 'bg-blue-600' }
    ]
  },
  {
    id: 2,
    title: 'Women\'s Maria Pump',
    brand: 'NY Fashion',
    model: 'Model 206',
    price: 425.00,
    image: 'https://images.pexels.com/photos/3682293/pexels-photo-3682293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    badges: [
      { type: 'hot', text: 'HOT', color: 'bg-yellow-400' },
      { type: 'delivery', text: '2-3 DAYS', color: 'bg-red-600' },
      { type: 'topBrand', text: 'TOP BRAND', color: 'bg-orange-500' }
    ]
  },
  {
    id: 3,
    title: 'Toshiba 5009 Smart TV',
    brand: 'Ericksson',
    model: 'Model 995',
    price: 0.00,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    badges: [
      { type: 'free', text: 'FREE', color: 'bg-green-500' },
      { type: 'preOrder', text: 'PRE-ORDER', color: 'bg-red-600' }
    ]
  },
  {
    id: 4,
    title: 'Leica Digital Camera',
    brand: 'Ericksson',
    model: 'Model 994',
    price: 2189.00,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    badges: [
      { type: 'hot', text: 'HOT', color: 'bg-yellow-400' },
      { type: 'preOrder', text: 'PRE-ORDER', color: 'bg-red-600' }
    ]
  }
];


  return (
    <>
    
    <div className='bg-gray-50 '>

    <div className='flex flex-col justify-evenly items-center max-w-500 m-auto p-10 rounded w-full sm:w-300'>
        <div className='text-2xl sm:text-3xl font-bold text-gray-900 text-center'>
             Featured Products
        </div>
        <div className='h-1 w-12 sm:w-15 my-3 bg-yellow-400 rounded-full mb-4'></div>
        <div className='text-gray-400 text-sm max-w-full sm:max-w-400 text-center'>
        Display any products you want to highlight on your website. This section can be used to showcase new arrivals, bestsellers, or seasonal products that you want to draw attention to. Each Module can be customized to fit your brand and style, allowing you to create a unique shopping experience for your customers.    
         </div>
      </div>

    <div className='flex justify-evenly items-center  py-4 max-w-500 m-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-4  text-gray-500 uppercase border border-gray-300 rounded '>
        <div className='grid grid-cols-1 gap-2 bg-blue-500 p-2   text-center text-white font-bold'>
            Featured
        </div>
        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Latest
        </div>
        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Bestsellers
        </div>

        <div className='grid grid-cols-1 gap-2  bg-gray-200 p-2  text-center font-bold'>
            Specials
        </div>
      </div>
      
    </div>
    </div>
    </>

  )
}

export default FeatureProduct
