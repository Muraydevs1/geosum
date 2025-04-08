import React, {useEffect, useState} from 'react'
import { assets } from '../assets/assets'

function Navbar() { 
    const [showMobileMenu, setshowMobilemenu] = useState(false)
    useEffect(()=>{
        if (showMobileMenu){
            document.body.style.overflow="hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    })

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify justify-between -mt-5 items-center px-6 md:px-20 lg:px-32 bg-transparent'>
                <div className='flex justify-start'>
                <img src={assets.geolo} alt="" className='w-28 h-28'/>
                </div>
                <ul className='hidden md:flex gap-7 text-white font-semibold'>
                    <a href="#About" className='cursor-pointer hover:text-orange-400 underline-animation'>About Us</a>
                    <a href="#Services" className='cursor-pointer hover:text-orange-400 underline-animation'>Services</a>
                    <a href="#Projects" className='cursor-pointer hover:text-orange-400 underline-animation'>Projects</a>
                    <a href="#Contacts" className='cursor-pointer hover:text-orange-400 underline-animation'>Contact Us</a>
                </ul>
                <a href='tel:+233 (0) 554061972' className=" hidden md:flex items-center gap-2 text-white font-semibold px-4 py-2 hover:underline ">
                    <img  className='w-6 h-6' src={assets.phone} alt="" />
                    +233 (0) 554061972</a>
                    <img onClick={()=>(setshowMobilemenu((currentstate)=>(!currentstate)))} src={assets.menu} alt="" className='md:hidden w-7 cursor-pointer hover:opacity-55 '/>
            </div>

            <div className={`md:hidden ${showMobileMenu? 'fixed w-full' : 'w-0 h-0'}  right-0 left-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6'>
                    <img onClick={()=>{setshowMobilemenu((currentstate)=>(!currentstate))}} src={assets.close} className='w-6 bg-white hover:bg-slate-300 cursor-pointer' alt="" />
                </div>
                <ul className=' flex flex-col items-center gap-2 text-lg font-medium mt-5 px-5'>
                    <a  onClick={()=>(setshowMobilemenu(false))} href="#About" className='px-4 py2 inline-block rounded-full hover:underline-animation'>About Us</a>
                    <a  onClick={()=>(setshowMobilemenu(false))} href="#Service" className='px-4 py2 inline-block hover:underline-animation rounded-full'>Services</a>
                    <a onClick={()=>(setshowMobilemenu(false))}  href="#Projects" className='px-4 py2 inline-block hover:underline-animation rounded-full'>Projects</a>
                    <a onClick={()=>(setshowMobilemenu(false))} href="#Contacts" className='px-4 py2 inline-block hover:underline-animation rounded-full'>Contacts</a>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
 