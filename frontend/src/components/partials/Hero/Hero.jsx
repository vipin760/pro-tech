import React from 'react'
import "./Hero.css"
import TextGenerateEffects from '../../ui/TextGenerateEffects'
import Button from '../Button/Button';

const header = 'Welcome to Cats N Tech Pvt Ltd'
const description = `Partnering in Business Sustainability through Network Technical Support`;
const Hero = () => {
  return (
    <div className="m-0 p-0">
    <div className="relative min-h-screen w-full">
      <video src="https://videos.pexels.com/video-files/4496268/4496268-sd_640_360_25fps.mp4" autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover"></video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
        <div className="bg-opacity-100 text-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <h1 className="text-7xl font-bold mb-4"><TextGenerateEffects words={header}/></h1>
        <TextGenerateEffects words={description}/>
        <div className='m-5 w-full flex justify-center'>
        <a href="/contact" className=''> <Button/> </a>
        </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Hero
