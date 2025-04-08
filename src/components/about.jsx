import React from 'react'
import { assets } from '../assets/assets'

function About() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white mx-auto" id='About'>
            {/* Left Side - Image */}
            <div className="relative flex justify-center md:justify-start w-full md:w-1/2 px-10">
                <img 
                    className="w-60 h-52 md:w-fit md:h-100 md:gap-4 " 
                    src={assets.about1} 
                    alt="profile picture" 
                />
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-center text-center md:text-left">
                <h1 className="text-3xl mt-5 md:text-5xl font-bold text-orange-400">| <span className='text-gray-900'>Shortly About Us.</span></h1>
                <span className="text-lg md:text-xl text-center font-semibold bg-[#e48723] px-3 py-2 rounded w-fit mt-2">
                    We provide the best industrial and technological services throughout Ghana.
                </span>
                <p className="text-gray-700 font-serif md:text-xl mt-4 leading-relaxed">
                    We are the leading service provider for all your geological needs, be it construction, 
                    exploration, mining, and oil and gas. We offer you world-class and practically feasible solutions 
                    to your problems.
                </p>
                <p className='text-orange-400 md:text-xl font-light italic'>'GeoSum, we heal the <span className='border-gray-700 border-b-2'>earth'</span></p>

                {/* Statistics Grid - Fixed Positioning */}
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full mt-6">
                    <div>
                        <p className="font-medium text-orange-400 text-4xl">5+</p>
                        <p className="text-gray-500 font-semibold">Years of Experience</p>
                    </div>
                    <div>
                        <p className="font-medium text-orange-400 text-4xl">10+</p>
                        <p className="text-gray-500 font-semibold">Projects Completed</p>
                    </div>
                    <div>
                        <p className="font-medium text-orange-400 text-4xl">20+</p>
                        <p className="text-gray-500 font-semibold">Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className="font-medium text-orange-400 text-4xl">3+</p>
                        <p className="text-gray-500 font-semibold">Ongoing Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About