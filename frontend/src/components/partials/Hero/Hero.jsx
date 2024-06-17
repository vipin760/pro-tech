import React from 'react'
import "./Hero.css"
import TextGenerateEffects from '../../ui/TextGenerateEffects'

const header = `Partnering in Business Sustainability through Network Technical Support Partnering in Business Sustainability`;
const Hero = () => {
  return (
    <div className="m-0 p-0">
    <div className="relative min-h-screen w-full">
      <video src="https://videos.pexels.com/video-files/4496268/4496268-sd_640_360_25fps.mp4" autoPlay muted loop playsinline className="absolute top-0 left-0 w-full h-full object-cover"></video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
        <div className="bg-opacity-100 text-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4"><TextGenerateEffects words={"WE ARE"}/></h1>
        <TextGenerateEffects words={header}/>
        <div className='m-5'>
        <a href="/contact" className='bg-gray-500 bg-opacity-40 p-1 py-2 px-3 hover:bg-opacity-85 cursor-pointer rounded-xl'>Contact us</a>
        </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Hero
