import React from 'react';
import { heroData } from '../../data';

const Hero = () => {
    const { title, subtitle, image, btnText } = heroData;
    return (
        <section className='lg:h-[900px] py-12'>
            <div className="w-[80%] mx-auto">
                <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
                    <div className='text-center xl:text-left'>
                        <h1 className='text-[#212353] text-[40px] lg:text-[70px] font-bold leading-[1.1] lg:max-w-[700px] mb-6 lg:mb-12'>{title}</h1>
                        <p className='font-medium leading-relaxed text-base xl:max-w-[380px] mb-6 lg:mb-12 text-[#4B5D68]'>{subtitle}</p>
                        <button className=' bg-[#9C69E2] text-lg h-[50px] px-[25px] rounded-full transition text-white mb-8 xl:mb-0'>{btnText}</button>
                    </div>
                    <div className='xl:absolute xl:-right-5 xl:-bottom-5'>
                        <img className='w-[90%]' src={image} alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;