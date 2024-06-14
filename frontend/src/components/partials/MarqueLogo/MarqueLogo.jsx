import React from 'react'
import "./MarqueLogo.css"
import Marquee from "react-fast-marquee";
const MarqueLogo = () => {
  return (
    <div className=''>
   <div className='md:flex my-16'>
    <div className='w-full p-2 md:w-1/2'>
        <h1>Clients & Data Centres</h1>
        <h1 className='text-4xl'>Rendering services to Market leaders and global Entreprises</h1>
    </div>
    <div className='w-full p-2 md:w-1/2'>
    OUR TEAM IS SERVING MANY LARGE AND MEDIUM GLOBAL FIRMS FOR THEIR INFRASTRUCTURE SERVICE NEEDS IN VARIOUS WELL-KNOWN DATA CENTRES AND INTERNET EXCHANGES. FAMILIARISATION WITH THEIR FACILITIES AND PROCEDURES BENEFITS OUR CLIENT IN EASING THEIR TASKS.
    </div>
   </div>

   <Marquee className='bg-transparent'>
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/2.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/3.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/11.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/4.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/5.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/5.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/7.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/8.jpg" alt="" />
    <img className='bg-transparent mix-blend-color-burn object-contain' src="https://prohandstech.com/wp-content/uploads/2020/12/9.jpg" alt="" />
</Marquee>
    </div>
  )
}

export default MarqueLogo
