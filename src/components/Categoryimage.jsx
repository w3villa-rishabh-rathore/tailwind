import React from "react";

const Categoryimage = () => {
  return (

    <div className="flex gap-6 justify-around items-center bg-white py-4 max-w-500 m-auto px-25 ">
      
      <div className="relative w-80 h-100">
        <img
          src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
          alt="Category 1"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-500 mt-75 px-4 py-2 rounded shadow-md hover:bg-gray-100 font-medium">
            Fashion
          </button>
        </div>
      </div>

      <div className="relative w-80 h-100">
        <img
          src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21282946/2024/3/21/f405d9d5-0a6c-47f9-a9df-cafb6c944ca61711010766284-Nestasia-Textured-Structured-Tote-Bag-3591711010765740-1.jpg"
          alt="Category 2"
          className="w-full h-full object-cover rounded-lg"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-500 mt-75 px-4 py-2 rounded shadow-md hover:bg-gray-100 font-medium">
            Bags
          </button>
        </div>
      </div>
      <div className="relative w-80 h-100">
        <img
          src="https://media.istockphoto.com/id/143920428/photo/young-beautiful-woman-having-various-facial-treatment.jpg?s=612x612&w=0&k=20&c=vr_1cfNwvKO7qBSiaR9IoGHrH0onFjMuKVjJYS3NsTE="
          alt="Category 3"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-500 mt-75 px-4 py-2 rounded shadow-md hover:bg-gray-100 font-medium">
            Health & Beauty
          </button>
        </div>
        
        
      </div>
      <div className="relative w-80 h-100">
        <img
          src="https://www.birkenstock.in/cdn/shop/articles/women_footwear.png?v=1730815939"
          alt="Category 2"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-500 mt-75 px-4 py-2 rounded shadow-md hover:bg-gray-100 font-medium">
            Footwear
          </button>
        </div>
      </div>
      <div className="relative w-80 h-100">
        <img
          src="https://homafy.com/wp-content/uploads/2023/05/Modern-Home-Metal-Wall-Art.jpeg"
          alt="Category 3"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-gray-500 mt-75 px-4 py-2 rounded shadow-md hover:bg-gray-100 font-medium">
            Home Decor
          </button>
        </div>

      </div>
    </div>
  );
};

export default Categoryimage;
