import React from 'react'
import "./Service.css"
import Cta from '../../partials/Cta/Cta'
import HomeService from '../../partials/Home-Service/HomeService'
import WhatWeDo from '../../partials/WhatWeDo/WhatWeDo'

const Service = () => {
  return (
    <div>
      <div>
        <Cta/>
        <div className='min-h-screen'>
        </div>
        <WhatWeDo/>
        <HomeService/>
</div>
    </div>
  )
}

export default Service
