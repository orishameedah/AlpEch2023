import React, { useState, useContext } from 'react';

// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import { RiMapPinLine } from 'react-icons/ri';

// import headless ul
import { Menu } from '@headlessui/react';

// import house context
import { ProductContext } from './ProductContext';

const ProductTypeDropdown = () => {
  const {productType, setProductType, productTypes}= useContext(ProductContext);

  // console.log(properties);

  const [isOpen, setIsOpen] = useState(false);

  return ( 
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiHome5Line 
        className='dropdown-icon-primary'/>
        <div>
        <div className='text-[15px] font-medium leading-tight'>{productType}</div>
        <div className='text-[13px]'>Select your product item</div>
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
          {productTypes.map((productType, index)=>{
            return (
              <Menu.Item onClick={() => setProductType(productType)}
               className='cursor-pointer hover:text-green-500 transition' as="li" key={index}>
                {productType}
              </Menu.Item>
            )
          })}
        </Menu.Items>
     </Menu>
     
     ) 
};

export default ProductTypeDropdown;