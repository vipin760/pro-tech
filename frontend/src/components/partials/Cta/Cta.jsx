import React from 'react'
import "./Cta.css"
import TextGenerateEffects from '../../ui/TextGenerateEffects'

const Cta = () => {
  return (
    <div>
      <div className="cta min-h-screen w-full flex items-center justify-center flex-col">
      <TextGenerateEffects words={"SERVICES"}/>
      <TextGenerateEffects words={"Hassle free execution with quality and trust"} />
      </div>
    </div>
  )
}

export default Cta
