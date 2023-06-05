import React from 'react';

import fruitVegetables from '../assets/img/fotor_2023-6-3_10_1_38.jpg'
import Footer from '../components/Footer'

// import {menuItems} from '../data'

// import motion 
import { motion } from 'framer-motion';

// import variants
import { fadeIn, staggerContainer } from '../variant';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Testimonial from '../components/Testimonial';

const Hero = () => {

    return (
        <>
        <section className='bg-green-200 min-h-[700px] bg-hero bg-cover
        bg-center'>
        {/* header */}
        <div className='container mx-auto  min-h-[700px]
        flex justify-center items-center 
        '>
            {/* text */}
            <motion.div variants={staggerContainer(0.3, 1)}
            initial="hidden" whileInView={'show'}
            className='text-center flex flex-col items-center'>
                {/* pretitle */}
                <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className='text-white text-[24px] lg:text-[28px] font-primary italic
                lg:font-medium mb-1'>Harvesting Health, Connecting Communities</motion.div>
                {/* title */}
                <motion.h1 
                variants={fadeIn('down', 'tween', 0.3, 1.1)}
                className='h1 mb-5'>AlpEch</motion.h1>
                {/* subtitle */}
                <motion.p 
                variants={fadeIn('down', 'tween', 0.4, 1.1)}
                className='text-white font-primary max-w-[540px] mb-8'>Experience the essence of farm freshness.</motion.p>
                {/* button */}
                <motion.div
                variants={fadeIn('down', 'tween', 0.5, 1.1)}
                >
                <Link to='/product'>
                <button className='btn'><p className='font-primary'>Shop Now</p></button>
                </Link>
                
                </motion.div>
                
            </motion.div>
        </div>
        </section>

{/* About */}
    <section className='mt-4  min-h-[620px]'>
    <div className='container  mx-auto min-h-[620px] justify-center'>
     <motion.div  variants={staggerContainer}
            initial="hidden" whileInView={'show'}
     className=' min-h-[600px] flex flex-col lg:flex-row items-center'>
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)} className=' flex-1 text-center lg:text-left'>
            <div className=' capitalize font-primary'>Our Story</div>
            <h2 className='h2 capitalize font-primary'>Who We Are</h2>
            <p className='mb-8 max-w font-primary'>
            Welcome to AlpEch, the premier platform dedicated to connecting farmers directly with their customers. Our mission is to revolutionize the way we access farm produce by eliminating middlemen and unnecessary transportation. By doing so, we ensure 
            that you receive the freshest and most nutritious produce straight from the source, delivered right to your doorstep.</p>
            <Link to='/about'><button className='btn text capitalize mx-auto items-left justify-left'><p className='font-primary'>Find Out More</p></button></Link>
       </motion.div>
        {/* image */}
        <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1.8)}
        className='-mb-[100px] 9 w-1000 z-10 '>
            <img className='w-250 h-120 rounded-full' alt='' src={fruitVegetables}/>
        </motion.div>
    </motion.div>
    </div>
    </section>
        <Menu/>
        <Testimonial/>
               {/* grid */}
         <motion.div variants={staggerContainer}
            initial="hidden" whileInView={'show'} className=' relative mt-8 min-h-[400] mb-20 top-[340px] lg:top-[390px] z-10'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1.8)} className='container mx-auto z-1 min-h-[400] text-center justify center'>
            <h1 className='text-2xl lg:text-6xl font-bold text-green-500 mb-4 italic'>
            "Not a moment of life is wasted on a farm. Others may have been more places, but haven't outlived me." - <span className='text-green-500 text-xl'>Jim Fisher</span>
            </h1>
            </motion.div>


        </motion.div> 
    <div className='pt-96'>
    <Footer/>
    </div>
</>
    )
}

export default Hero;