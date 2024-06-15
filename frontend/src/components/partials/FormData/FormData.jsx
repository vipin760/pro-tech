import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"

const FormData = () => {
    const [formData,setFormData] = useState({Name:"",Email:"",Message:""})
    const [ error,setError] = useState({})

    const handleChage=(e)=>{
        setError({})
        const {name,value} = e.target
        setFormData({
            ...formData,[name]:value
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const validationErrors = {}
        if(!formData.Name.trim()){
            validationErrors.Name="Please Enter Name"
        }
        if(!formData.Email.trim()){
            validationErrors.Email="Please Enter Email"
        }
        if(!formData.Message.trim()){
            validationErrors.Message="Please Enter Message"
        }
        setError(validationErrors)
        if(Object.keys(validationErrors).length ===0){
         await axios.post("https://sheet.best/api/sheets/fb14f60c-2d4b-4e5c-9020-10a66fdb567c",formData).then((res)=>{
            toast.success("Success we will contact you soon....!")
            setFormData({
                Name: '',
                Email: '',
                Message: ''
              });
            console.log(res)
            
          }).catch((error)=>{
            toast.error("Something went wrong please try after sometimes...!")
            console.log(error.response.data.message);
          })
        }

    }

  return (
    <div>
      <div>
            <div className="card h-fit max-w-6xl mx-2" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>
              <form id="contactForm" className='text-black' onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        onChange={handleChage}
                        value={formData.Name}
                        className="mb-2 w-full text-black rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="Name"
                      />
                      {
                      error.Name&&(<p className='text-red-300'>* {error.Name}</p>)
                      }

                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        onChange={handleChage}
                        value={formData.Email}
                        className="mb-2 w-full text-black rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="Email"
                      />
                      {
                      error.Email&&(<p className='text-red-300'>* {error.Email}</p>)
                      }
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="Message"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      onChange={handleChage}
                      value={formData.Message}
                      className="mb-2 w-full text-black rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                    {
                      error.Message&&(<p className='text-red-300'>* {error.Message}</p>)
                      }
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default FormData
