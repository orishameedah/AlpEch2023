import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../slider.css'
import {testimonialData} from '../data';

const TestimonialCarousel = () => {
    const {slider} = testimonialData;
    return (
        <Carousel 
            showThumbs={false} 
            showStatus={false} 
            showIndicators={false}
            autoPlay={false}
            infiniteLoop={true}
            className='w-full max-w-[1024px] flex items-center justify-center'
        >
        {slider.map((item, index) => {
            const {image, message, name, occupation} = item;
            return (
                <div className='max-w-[840px] mx-auto px-24 text-white' key={index}>
                    <div className='text-lg mg-9 lg:text-2xl leading-snug'>{message}</div>
                    <div className='max-w-[70px] lg:max-w-[80px] mx-auto mb-3'>
                        <img src={image} className='rounded-full' alt=''/>
                    </div>
                    <div className='font-bold text-[22px] text-green-500 '>{name}</div>
                    <div className='font-medium italic'>{occupation}</div>
                </div>
            )
        })}
        </Carousel>
    )
}

export default TestimonialCarousel;