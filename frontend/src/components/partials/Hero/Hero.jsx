import React from 'react'
import "./Hero.css"
import TextGenerateEffects from '../../ui/TextGenerateEffects'
const header = `Welcome to Cats N Tech Pvt Ltd`
const description = `At Cats N Tech Pvt Ltd, we deliver tailored data center solutions to meet your business needs globally.`;
const Hero = () => {
  return (
    <div className="m-0 p-0">
    <div className="relative min-h-screen w-full">
  
      <video src="https://videos.pexels.com/video-files/4496268/4496268-sd_640_360_25fps.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover"></video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
        <div className="bg-opacity-100 text-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4"><TextGenerateEffects words={header}/></h1>
        <TextGenerateEffects words={description}/>
        <div className='m-5'>
        <a href="/contact" className='bg-gray-500 bg-opacity-40 p-4 m-20 hover:bg-opacity-85 cursor-pointer rounded-xl'>Contact us</a>
        </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Hero
