import React from 'react'
import { services } from '../assets/assets'

function Service() {
    return (
        <section id="Services" className="py-12 text-gray-700 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                <span className='text-orange-400'>|</span> Our <span className='text-orange-400'>Services</span>
            </h2>

            <div className="max-w-5xl mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className="bg-orange-400 rounded-xl overflow-hidden shadow-lg border border-orange-200 hover:shadow-xl hover:scale-105 hover:border-orange-400 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-48 sm:h-52 md:h-60 object-cover object-center"
                        />
                        <div className="p-2">
                            <h3 className="text-lg md:text-lg font-semibold text-gray-800 dark:text-white">{service.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Service