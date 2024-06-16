import React from 'react'
import FormData from '../FormData/FormData'

const HomeContact = () => {
  return (
    <div className='p-4 flex flex-col items-center'>
        <h1 className='text-sm m-3 font-bold text-opacity-35 md:text-center'>CONTACT US</h1>
        <h1 className='text-3xl text-center my-2'>Get in Touch</h1>
        <p className='max-w-4xl'>Ready to take your data center operations to the next level? Contact us today to learn
more about our services and how we can help you achieve your business goals. Reach
out at support@catsntech.com or call us at +91 9778 191325. We look forward to
partnering with you!</p>
        <FormData/>
      
    </div>
  )
}

export default HomeContact
