import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import Socials from '../components/Socials'
import {motion} from 'framer-motion'
import logoImg from '../assets/img/logo-removebg-preview.png'
import {staggerContainer, fadeIn} from '../variant'

// header variants
const headerVariants = {
  hidden: {
    padding: '0 0 9px 0',
    background: 'rgb(66, 173, 88)',
  },
  show: {
    margin: '4px',
    padding: '10px 0 10px 0',
    background: 'rgb(66, 173, 88)',
    transition: {
      type: 'spring',
    }
  }
}

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    }
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    }
  }
}
const Header = () => {
       // header state
       const [isActive, setIsActive] = useState(false);
      //  nav state
      const [nav, setNav] = useState(false)
       // event listener
       useEffect(()=> {
        window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
        })
       })
    return (
        <motion.header 
        variants={headerVariants}
        initial='hidden'
        animate={isActive ? 'show' : ''}
        className='bg-green-200/20 top-[0] left-[0] xl:w-full lg:w-full fixed md:w-[750px] w-[320px] max-w-[1800px] z-50 py-4'>
        <motion.div 
        variants={staggerContainer(0.3, 1)} 
        intial="hidden" 
        animate={'show'} className='container mx-auto'>
          <div className='flex justify-between items-center px-4 lg:px-0
          relative text-white '>
            {/* Menu button */}
            <motion.div
            variants={fadeIn('down', 'tween', 1, 1.4)}
            className={`${ nav ? 'gap-y-0': 'gap-y-2'} t-2 flex bg-chartreuse-400 flex-col
             items-center justify-center w-12 h-12 p-3 order-2
            lg:order-none cursor-pointer border-2 rounded-full
            `}
            onClick={()=> setNav(!nav)}>
              {/* bar1 */}
              <motion.div initial={{
                 rotate: 0
                }} 
                animate={{rotate: nav ? -45 : 0, translateY: nav ? 3 : 0}}
              className='w-full  h-[3px] bg-white'></motion.div>
              {/* bar2 */}
              <motion.div initial={{
                 rotate: 0
                }} 
                animate={{rotate: nav ? 45 : 0}}
              className='w-full h-[3px] bg-white'></motion.div>
            </motion.div>
            {/* logo */}
            <motion.div variants={fadeIn('down', 'tween', 1.2, 1.4)}>
              <a href='/'>
                <img className={`${isActive ? 'w-[90px] h-[90px]'
                : 'w-[100px] h-[100px'}`} src={logoImg} alt=''/>
              </a>
            </motion.div>
            {/* social icons */}
            <motion.div 
            variants={fadeIn('down', 'tween', 1.4, 1.4)}
            className='hidden lg:flex'>
              <Socials />
            </motion.div>
            {/* nav */}
            <motion.div variants={navVariants} initial="hidden" animate={nav ? 'show' : ''} className='absolute bg-green-500 w-[170px] h-[50vh] right-0 lg:left-0
            top-[120px] bottom-0 z-50 rounded-lg shadow-xl'>
              <Nav />
            </motion.div>
          </div>
        </motion.div>
        </motion.header>
    )
}

export default Header;


// import React, { useState } from 'react';

// import link
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// // import logo


// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => setToggle(!toggle)
//   return(
//     <header className='py-3 sticky bg-green-500'>
//      <div className='container mx-auto flex lg:justify-between justify-around  items-center'>
//       {/* Logo */}
//       <Link to='/'>
//         <img src={logoImg} className='w-[80px] h-[80px]' alt=''/>
//       </Link>

//       {/* Desktop Nav */}
//       <div className='hidden md:flex items-center lg:gap-6 gap-3'>
//         <Link className='hover:text-dark transition text-white' style={{fontWeight: '600'}} to='/about'>
//           About
//         </Link>
//         <Link className='hover:text-dark transition text-white'  style={{fontWeight: '600'}}
//           to='/product'
//         >
//           Product
//         </Link>
//         <Link className='hover:text-dark transition text-white'  style={{fontWeight: '600'}}
//           to='/contact'
//         >
//           Contact
//         </Link>
//       </div>

//       {/* Mobile Nav  */}
//       <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav right-0"}
//           style={{width: 200, zIndex: 1, }}
//       >
//         <div className='flex flex-col gap-y-6 mt-2 px-4 '
//           style={{ fontSize: '1.3em', cursor: 'pointer', 
//             color: 'white', float: 'left',}}
//         size={20}>
//           <Link className='hover:text-violet-900 transition'  to="/">
//               Home
//           </Link>
//         <Link className='hover:text-violet-900 transition' to='/about'>
//           About
//         </Link>
//         <Link  className='hover:text-violet-900 transition'
//           to='/testimonials'
//         >
//           Testimonials
//         </Link>
//         <Link className='hover:text-violet-900 transition'
//         to='/contact'
//         >
//           Contact
//         </Link>
//           </div>   
//       </nav>


// {/* Toggle button */}
// <button onClick={handleToggle} className='block  md:hidden'>
//             {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
//         </button>
//      </div>

      
      
//     </header>
//   );
// };

// export default Header;
