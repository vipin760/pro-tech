import React, { useEffect } from 'react'
import Hero from '../../partials/Hero/Hero'
import WhoWeAre from '../../partials/WhoWeAre/WhoWeAre'
import WhatWeDo from '../../partials/WhatWeDo/WhatWeDo'
import HomeService from '../../partials/Home-Service/HomeService'
import Geograph from '../../partials/Geograph/Geograph'
import MarqueLogo from '../../partials/MarqueLogo/MarqueLogo'
import Benefits from '../../partials/Benefits/Benefits'
const service = [
 
  {
    icon: "fas fa-exchange-alt",
    title: "Network migrations",
    description:
      "Network migrations involve transferring data, applications, or services from one network environment to another, often to enhance performance, security, or scalability. It requires meticulous planning to minimize downtime and ensure seamless integration of new infrastructure while maintaining operational continuity and data integrity.",
  },
  {
    icon: "fas fa-network-wired",
    title: "Structured cabling",
    description:
      "Structured cabling refers to the organized installation of network cabling infrastructure that supports various communication technologies within a building or campus. It provides a systematic approach to managing and transmitting data, voice, and video signals, ensuring scalability, flexibility, and efficiency in network operations.",
  },
  {
    icon: "fas fa-cog",
    title: "Inspection & troubleshooting",
    description:
      "Inspection & troubleshooting involves systematic evaluation and identification of issues in machinery, equipment, or systems to ensure optimal functionality. It includes diagnostic assessments, analysis of performance data, and remedial actions to resolve faults efficiently, enhancing reliability and operational efficiency",
  }
];
const Home = () => {

  return (
    <>
   <div className='min-h-screen w-full'> 
   <Hero/>
   <WhoWeAre/>
   <WhatWeDo/>
   <HomeService service={service}/>
   <Benefits/>
   <Geograph/>
   <MarqueLogo/>
   </div>
   
    </>

  )
}

export default Home
