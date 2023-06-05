import React, { useContext } from 'react';

// import components
import StateDropdown from './StateDropdown';
import ProductTypeDropdown from './ProductTypeDropdown';
// import PriceRangeDropdown from './PriceRangeDropdown';

// import icons
import {RiSearch2Line} from 'react-icons/ri'

// import house context
import { ProductContext } from './ProductContext';

const Search = () => { 
  const {handleClick} = useContext(ProductContext)
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 
      lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <StateDropdown />
      <ProductTypeDropdown />
      {/* <PriceRangeDropdown /> */}
      <button onClick={()=> handleClick()} className='bg-green-500 hover:bg-green-600 transition w-full lg:max-w-[162px] h-16 rounded-lg 
        flex justify-center items-center text-white text-lg'>
        <RiSearch2Line />
      </button>
    </div>
  )
};

export default Search;
