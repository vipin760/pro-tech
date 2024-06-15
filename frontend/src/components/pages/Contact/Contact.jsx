import React from "react";
import "./Contact.css";
import Cta from "../../partials/Cta/Cta";
import Geograph from "../../partials/Geograph/Geograph";
import logo from "../../../assets/logo.png"

const Contact = () => {
  const title = "Get in Touch with CatsnTech";
  const description =
    "Whether you have a question, need assistance, or want to collaborate, our team at CatsnTech is here to help. Reach out to us and let's create something amazing together!";
  const url =
    "https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_640.jpg";
  return (
    <>
    <div>
    <div className="logo">
                    <img
                        src={logo}
                        className="h-40 w-40 bg-transparent"
                        alt=""
                    />
                </div>
      <Cta url={url} title={title} description={description} />
      <div className="min-h-screen p-3 flex flex-col items-center">
        <h1 className="m-3 text-sm font-bold text-opacity-35">
          Welcome to Prohands
        </h1>
        <div className="m-3">
          <h1 className="text-5xl">Come visit us and say hello !!</h1>
          <div className="my-4 md:flex gap-6">
            <span>
              <h1 className="font-bold text-xl my-1">Address</h1>
              <p>PROHANDS TECHNOLOGIES SARL.</p>
              <p>250 Bis, Boulevard Saint-Germain</p>
              <p>Paris 75007, France.</p>
            </span>
            <span>
              <h1 className="font-bold text-xl my-1">Phone</h1>
              <p>+33 7 87 97 05 40</p>
            </span>
            <span>
              <h1 className="font-bold text-xl my-1">Email</h1>
              <p>support@prohandstech.com</p>
            </span>
          </div>
        </div>

        {/* contact form */}
        <div className="md:flex md:gap-5">
          {/* enquire form */}
          <div>
            <div className="card h-fit max-w-6xl mx-2" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
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
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
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
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
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

           {/* google map */}
           <div className="flex items-center">
            <iframe
              className="h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185485.29204306155!2d75.70473942493376!3d10.90499405478827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b18ce2f8645d%3A0x460f5865302bbabc!2sTirur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718442025632!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Geograph/>
    </div>
    </>
  );
};

export default Contact;
