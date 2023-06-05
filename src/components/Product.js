import React from 'react';

// import icons

const Product = ({ product }) => {
  const {image, type, state, price} = product;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px]  w-full max-w-[352px]
      mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img src={image} className='w-[300px] h-[312px] rounded-tl-[90px] mb-8' alt=''/>
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
        <div className='bg-gray-500 rounded-full text-white px-3'>{state}</div>
      </div>
      {/* <div className='text-lg font-semibold max-w-[260px]'>{address}</div> */}
      {/* <div className='flex gap-x-4 my-4 '>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'><BiBed/></div>
          <div>{bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'><BiBath/></div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'><BiArea/></div>
          <div>{surface}</div>
        </div>
      </div> */}
      <div className='text-lg font-semibold text-green-600 mb-4 '>₦{price}</div>
    </div>
    );
};

export default Product;
