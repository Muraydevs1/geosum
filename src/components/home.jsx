import React from 'react'
import Navbar from './navbar'

function Home() {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style = {{backgroundImage:"url('https://images.squarespace-cdn.com/content/v1/65f0c5f9883425744c97e855/1727825544461-9DPSSSQP0L3U9VZAZ4V6/image-asset.jpeg')"}} id='Home'>
            <Navbar/>
            <div
             className='text-white container text-center py-4 px-6 mx-auto  md:px-20 lg:px-32 md:items-center' >
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
                <span className='text-orange-400'>We provide the best</span>  industrial and technology services.
                </h2>
          <div className='space-x-6 mt-16'>
            <a href="#Projects" className='bg-orange-400 hover:bg-gray-700 px-8 py-3 font-semibold rounded cursor-pointer'>Services</a>
            <a href="#Contacts" className='border-2 hover:bg-white hover:text-gray-700 border-white px-8 py-3 font-semibold rounded cursor-pointer'>Contact Us</a>
          </div>
        </div>
        </div>
    )
}

export default Home



 