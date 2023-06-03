import React from 'react';


const Nav = () => {
    return (
       <nav className='w-full h-full '>
        <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
            <li>
                <a className='text-xl capitalize font-primary hover:text-dark
                transition-all duration-300' href='/'>Home</a>
            </li>
            <li>
                <a className='text-xl capitalize font-primary hover:text-dark
                transition-all duration-300' href='/about'>About</a>
            </li>
            <li>
                <a className='text-xl capitalize font-primary hover:text-dark
                transition-all duration-300' href='/product'>Product</a>
            </li>
            <li>
                <a className='text-xl capitalize font-primary hover:text-dark
                transition-all duration-300' href='/contact'>Contact</a>
            </li>
        </ul>
       </nav>
    )
}

export default Nav;