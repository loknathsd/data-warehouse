import React from 'react';
import { heroData } from '../../data';

const Hero = () => {
    const { title, subtitle, image, btnText } = heroData;
    return (
        <section className='lg:h-[900px]  '>
            <div className="w-[90%] mx-auto  relative">
                
                <div className='flex flex-col xl:flex-row items-center h-full md:py-24 '>
                    <div className='text-center xl:text-left'>
                        <h1 className='text-[#212353] text-[40px] lg:text-[65px] font-bold leading-[1.1] xl:max-w-[640px]  mb-6 lg:mb-12'>{title}</h1>
                        <p className='font-medium leading-relaxed text-base xl:max-w-[350px] mb-6 lg:mb-12 text-[#4B5D68]'>{subtitle}</p>
                        <button className=' bg-[#9C69E2] text-lg h-[50px] px-[25px] rounded-full transition text-white mb-8 xl:mb-0'>{btnText}</button>
                    </div>
                    <div  className='xl:absolute xl:-right-60 xl:-bottom-10'>
                        <img src={image} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;