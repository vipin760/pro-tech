import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div id="smooth-wrapper" className="h-[50rem] w-full dark:bg-black bg-[#443a3a]  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div id="smooth-content" transition-style="in:wipe:down" className="absolute pointer-events-none inset-0 dark:bg-black bg-[#1b1313] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

     </div>
    </div>
  )
}

export default Contact
