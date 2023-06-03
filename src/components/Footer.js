import React from "react";
import { motion } from "framer-motion";
import {fadeIn, staggerContainer} from '../variant';

import Socials from "./Socials";


const Footer = () => {
    return <footer className="relative top-96 h-full flex bg-cover flex-col gap-y-12 z-20 bg-dark lg:bg-transparent lg:min-h-[620px]
    lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 ">
        <motion.div variants={staggerContainer} 
        initial= 'hidden'
        whileInView={'show'}
        className="container mx-auto h-full lg:mt-40">
            <motion.div 
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className=" flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12
            lg:gap-y-0 lg:mb-12 ">
                {/* contact */}
                <div className="flex-1 lg:max-w-[170px] ">
                    <div className="capitalize text-[20px] lg:text-[22px]
                    font-normal text-white font-primary mb-[22px]">location</div>
                    <div className="capitalize">Lagos Island, Lagos State, Nigeria</div>
                    <div className="capitalize">091224274398</div>
                </div>
                {/* program */}
                <div className="flex-2 ">
                <div className="capitalize text-[20px] lg:text-[22px]
                    font-normal text-white font-primary mb-[22px]">Avaliable hours</div>
                    <div className="capitalize">
                        <div>
                            <div>
                                <div>Monday - friday</div>
                                <div className="text-[20px] text-green-500">9:00AM - 6:00PM</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* socials */}
                <div className="flex-1 lg:max-w-[280px] mb-12 ">
                <div className="capitalize text-[20px] lg:text-[22px]
                    font-normal text-white font-primary mb-[22px]">Social Network</div>
                    <Socials />
                </div>
            </motion.div>

            <div className="border-t border-white/20">
                <div className="container mx-auto">
                    <div className="py-6">
                        <p className="text-base text-center">Copyright &copy; 2023 AlpEch. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </motion.div>
    </footer>
}

export default Footer;