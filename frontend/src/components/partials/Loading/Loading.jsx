import React from 'react'
import "./Loading.css"
import logo from "../../../assets/logo.png"

const Loading = () => {
  return (
 <>
 <div className='loading'>
 <div class="loader">
  <div class="load-inner load-one"></div>
  <div class="load-inner load-two"></div>
  <div class="load-inner load-three"></div>
  <span class="text">
    <img src={logo} alt="" />
    <p>Loading...</p>
  </span>
</div>
 </div>
 </>

  )
}

export default Loading
