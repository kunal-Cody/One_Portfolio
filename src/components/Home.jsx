import React from 'react';
import HeroImage from '../assets/ProfilePic.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import{Link} from 'react-scroll';


const Home = () => {
    return (
        <div name="home"
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>
                        I'm a Web Devloper
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 3 year experience building and designing software.
                        Currently I love to work on web Aapplication using techology Like
                        React,Redux,Node.
                    </p>
                    <div>
                        <Link to="Portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                        bg-gradient-to-r from-lime-500 to-green-800 cursor-pointer' >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                           
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Home;
