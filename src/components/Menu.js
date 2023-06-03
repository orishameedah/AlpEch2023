import React from 'react';
import { menuItems } from '../data';
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../variant';
const Menu = () => {
    return (
        <section className='min-h-[780px]'>
            {/* background */}
            <div className='h-[780px] bg-menu bg-cover bg-no-repeat absolute w-full max-w-[1800px] z-1'></div>
            {/* text */}
            <div className='relative z-10 top-72 lg:top-52'>
                <motion.div 
                variants={staggerContainer} initial="hidden" whileInView={"show"}
                className='container mx-auto flex flex-col items-center text-center'>
                    <motion.h2 
                    variants={fadeIn('down', 'tween', 0.4, 1.6)}
                    className='h2 capitalize text-white lg:max-w-[400px] max-w-[300px] text-center'>Fresh & Organic Product</motion.h2>
                    <motion.p variants={fadeIn('down', 'tween', 0.2, 1.6)}
                     className='text-white/70 capitalize mb-8'>We produce and deliver fresh organic product</motion.p>
                    {/* <div>
                        
                    </div> */}
                </motion.div>
            </div>
            {/* menu gallery */}
            <motion.div initial={{
                opacity:0,
                y: 150,
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                type: 'tween',
                delay: 0.2,
                duration: 1.6,
                ease: 'easeOut'
            }}
             className='relative top-80 lg:top-60 '>
                <div className='container mx-auto'>
                   <div className='lg:mt-24 min-h-[590px] z-30 md:mb-4 xl:mb-6'>
                    <div className='grid grid-cols-1 gap-0 lg:grid-cols-4 min-h-[590px]'>
                        {menuItems.map((item, index) => {
                            const {image, name, price, description} = item;
                            // console.log(index)
                            return (
                                <div key={index}>
                                    <div className='flex flex-row lg:flex-col h-full'>
                                    {/* image */}
                                    <div className={`lg:w-[100%] w-[40%] md-w-auto ${index === 1 || index === 3 ? 'lg:order-1' :'order-none'}`}>
                                        <img src={image} alt='' className='lg:w-[320px] w-[200px] lg:h-[295] h-[295]'/>
                                    </div>
                                    {/* text */}
                                    <div className='bg-[#fff3e4] flex-1 flex flex-col px-6 justify-center lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                                        <div className='text-center'>
                                            <div className='text-xl font-semibold text-dark xl:text-2xl lg:mb-0 mb-2'>{name}</div>
                                            <div className='my-1 text-[20px] lg:text-[40px] lg:my-6 text-green-500 font-semibold'>{price}</div>
                                            <div>{description}</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                   </div>
                </div>
            </motion.div>
        </section>
    )
}
export default Menu;