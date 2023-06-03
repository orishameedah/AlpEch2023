import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import Socials from '../components/Socials'
import {motion} from 'framer-motion'
import logoImg from '../assets/img/logo-removebg-preview.png'
import {staggerContainer, fadeIn} from '../variant'

// header variants
const headerVariants = {
  hidden: {
    padding: '5px 0 9px 0',
    background: 'rgb(66, 173, 88)',
  },
  show: {
    margin: '5px',
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
        className='bg-green-200/20 fixed w-full max-w-[1511px] z-50 py-4'>
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