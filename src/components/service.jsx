import React from 'react'
import { services } from '../assets/assets'

function Service() {
    return (
        <section id="Services" className="py-12 text-gray-700 text-center" >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 "><span className='text-orange-400'>|</span> Our <span className='text-orange-400'>Services</span></h2>
        
              <div className="max-w-5xl mx-3 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover  mb-4"
                    />
                    <h3 className="font-semibold">{service.name}</h3>
                  </div>
                ))}
              </div>
            </section>
    )
}

export default Service
