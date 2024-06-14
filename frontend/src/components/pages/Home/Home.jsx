import React, { useEffect } from 'react'
import Hero from '../../partials/Hero/Hero'
import WhoWeAre from '../../partials/WhoWeAre/WhoWeAre'
import WhatWeDo from '../../partials/WhatWeDo/WhatWeDo'
import HomeService from '../../partials/Home-Service/HomeService'
import Geograph from '../../partials/Geograph/Geograph'
import MarqueLogo from '../../partials/MarqueLogo/MarqueLogo'
import Benefits from '../../partials/Benefits/Benefits'

const Home = () => {

  return (
    <>
   <div className='min-h-screen w-full'> 
   <Hero/>
   <WhoWeAre/>
   <WhatWeDo/>
   <HomeService/>
   <Benefits/>
   <Geograph/>
   <MarqueLogo/>
   </div>
   
    </>

  )
}

export default Home
