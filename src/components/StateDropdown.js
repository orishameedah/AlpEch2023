import React, { useState, useEffect, useContext } from 'react';

// import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import { RiMapPinLine } from 'react-icons/ri';

// import headless ul
import { Menu } from '@headlessui/react';

// import house context
import {ProductContext} from './ProductContext'

const StateDropdown = () => {
  const {state, setState, states}= useContext(ProductContext);

  // console.log(countries)

  const [isOpen, setIsOpen] = useState(false);

  return ( 
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiMapPinLine 
        className='dropdown-icon-primary'/>
        <div>
        <div className='text-[15px] font-medium leading-tight'>{state}</div>
        <div className='text-[13px]'>Select your place</div>
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
          {states.map((state, index)=>{
            return (
              <Menu.Item onClick={() => setState(state)}
               className='cursor-pointer hover:text-green-500 transition' as="li" key={index}>
                {state}
              </Menu.Item>
            )
          })}
        </Menu.Items>
     </Menu>
     
     ) 
};

export default StateDropdown;