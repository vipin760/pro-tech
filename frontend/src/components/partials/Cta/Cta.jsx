import React from 'react'
import "./Cta.css"
import TextGenerateEffects from '../../ui/TextGenerateEffects'

const Cta = ({title,description,url,page}) => {
   title =  title ||"WELCOME CATSNTECH"
   url = url || "https://cdn.pixabay.com/photo/2015/12/04/17/21/fractal-1076861_1280.jpg"
  description = description || "OUR NEW TECHNOLOGY GOING WITH YOUR DREAMS"
  return (
    <div className=''>
      <div className="cta min-h-screen w-full flex items-center justify-center flex-col" style={{backgroundImage:`url(${url})`}}>
     <div className='text'>
     <TextGenerateEffects words={title}/>
     <TextGenerateEffects words={description} />
     </div>
     <h1 className='text-4xl mt-16 z-100'>{page}</h1>
      </div>
    </div>
  )
}

export default Cta
