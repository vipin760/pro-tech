import React from 'react'

const Geograph = () => {
  return (
    <div className='flex flex-col items-center p-4 bg-blue-950'>
      <div className='md:flex max-w-7xl my-3'>
        <div className='w-full md:w-1/2 m-2 text-start'>
            <h2 className='text-3xl'>Geographical Presence</h2>
            <h2 className='text-6xl'>Multinational presence & regional experiences</h2>
        </div>
        <div className='w-full m-2 md:w-1/2'>
            <h3 className='text-lg'>PROHANDS HAS PRESENCE IN MAJOR CITIES ACROSS EUROPE, MIDDLE EAST AND SOUTH EAST ASIA WITH DEDICATED WORK FORCES. WE ALSO PROVIDE SERVICES IN MAJOR CITIES IN ALL CONTINENTS BY MOBILIZING OUR OWN OR PARTNER RESOURCES BASED ON DEMANDS.</h3>
        </div>
      </div>
      <div className='w-full m-3'>
        <img src="https://prohandstech.com/wp-content/uploads/2021/01/map.svg" alt="" />
      </div>
    </div>
  )
}

export default Geograph
