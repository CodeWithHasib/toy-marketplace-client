import React from 'react';
import Hero_category from './Hero_category';
import HeroSlider from './HeroSlider';
import Hero_Category_sm from './Hero_Category_sm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import HeroSlider2 from './HeroSlider2';

const Hero = () => {
    return (
        <div className='grid w-full lg:min-h-[70vh] mx-auto grid-cols-5'>
            <div className="col-span-1 hidden md:block">
                <Hero_category />
            </div>
            <div className="md:col-span-4 col-span-5">
               <Swiper navigation={true}
               loop={true}
                modules={[Navigation]}
               className='h-full'>
                     <SwiperSlide>
                        <HeroSlider />
                    </SwiperSlide>
                     <SwiperSlide>
                        <HeroSlider2 />
                    </SwiperSlide>
               </Swiper>
            </div>
            <div className="md:hidden col-span-5">
                <Hero_Category_sm />
            </div>
        </div>
    );
};

export default Hero;