import React from 'react'
import "./Loading.css"
import logo from "../../../assets/logo.png"

const Loading = () => {
  return (
 <>
 <div className='loading'>
 <div className="loader">
  <div className="load-inner load-one"></div>
  <div className="load-inner load-two"></div>
  <div className="load-inner load-three"></div>
  <span className="text">
    <img src={logo} alt="" />
    <p>Loading...</p>
  </span>
</div>
 </div>
 </>

  )
}

export default Loading
