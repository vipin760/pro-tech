import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="m-0 p-0">
    <div className="relative min-h-screen w-full">
  
      <video src="https://videos.pexels.com/video-files/4496268/4496268-sd_640_360_25fps.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover"></video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
        <div className="bg-opacity-100 text-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Your Heading Here</h1>
          <p className="text-lg">Your content goes here. This content is centered on the left side of the screen.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
