import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png'
import { FaBars } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
const Header = () => {
    const [navMobile, setNavMobile] = useState(false)
    return (
        <header className='relative z-20 mb-12 lg:mb-0'>
            <div className="w-[90%] mx-auto">
                <div className='flex items-center  justify-between relative py-5 '>
                    <div className='flex gap-x-52 items-center '>
                        <a href="#">
                            <img className='h-[35px]' src={Logo} alt="" />
                        </a>
                        <div className='hidden lg:flex gap-x-8 text-[#212353]'>
                            <p>About</p>
                            <p>Help</p>
                            <p>Features</p>
                            <p>Signup</p>

                        </div>
                    </div>
                    {/* mobile responsive item */}
                    <div className={`${navMobile ? 'max-h-96' : 'max-h-0'} lg:hidden bg-red-400 absolute top-16 w-full left-0 right-0  rounded transition-all overflow-hidden`}>
                        <div className='p-8 flex flex-col gap-y-4'>
                            <p>Home</p>
                            <p>About</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <button className='bg-[#FFFFFF] lg:h-[50px] h-[40px]  lg:w-[200px] w-[150px] rounded-[50px] font-bold shadow-[0px_5px_5px_rgba(75, 93, 104, 0.1)]  flex justify-center items-center lg:gap-x-[20px] text-[#212353] '> 
                      Request demo {" "} <BsArrowRight className='text-xl text-[#9C69E2]' />
                    </button>
                    <div onClick={() => setNavMobile(!navMobile)} className='mt-2 text-2xl lg:hidden'>
                        <FaBars />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;