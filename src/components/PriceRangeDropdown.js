import React, { useState, useEffect, useContext } from 'react';

// import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import { RiMapPinLine } from 'react-icons/ri';

// import headless ul
import { Menu } from '@headlessui/react';

// import house context
import { ProductContext } from './ProductContext';

const PriceRangeDropdown = () => {
  const {price, setPrice}= useContext(ProductContext);

  // console.log(prices);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '5,000 - 20,000',
    },
    {
      value: '20,000 - 35,000',
    },
    {
      value: '35,000 - 50,000',
    },
    {
      value: '50,000 - 65,000',
    },
    {
      value: '80,000 - 95,000',
    },
    {
      value: '110,000 - 125,000',
    },
  ]

  return ( 
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiWallet3Line 
        className='dropdown-icon-primary'/>
        <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose Price range</div>
        </div>
        {
          isOpen ?  (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )
        }
      </Menu.Button>

        <Menu.Items className='dropdown-menu'>
          {prices.map((price, index)=>{
            return (
              <Menu.Item onClick={() => setPrice(price.value)}
               className='cursor-pointer hover:text-green-500 transition' as="li" key={index}>
                {price.value}
              </Menu.Item>
            )
          })}
        </Menu.Items>
     </Menu>
     
     ) 
};

export default PriceRangeDropdown;