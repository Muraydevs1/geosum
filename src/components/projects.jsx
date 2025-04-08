import React from 'react'
import { assets, ProjectS } from '../assets/assets'


function Projects() {
    return (
        <div 
        className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow:hidden' id='Projects'>
            <h1 className='text-center font-bold mb-2 text-2xl sm:text-4xl'><span className='text-orange-400'>|</span> Projects <span className='text-orange-400'>Completed</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Space, Building Legacies-Explore our Portfolio</p>
            <div className='flex justify-end items-center mb-8'>
            </div>
            <div className=''>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {ProjectS.map((projects, index)=>(
                        <div key={index} className='relative w-full'> 
                        <img src={projects.image} alt={projects.title} className='w-full h-auto mb-14'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-orange-400 w-3/4 px-2 py-2 shadow-md'>
                                <h2 className='text-xl text-center font-semibold text-white'>
                                    {projects.title}
                                </h2>
                                <p className='text-gray-500 text-sm text-center'>{projects.location} </p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
