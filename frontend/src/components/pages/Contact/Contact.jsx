import React from "react";
import "./Contact.css";
import Cta from "../../partials/Cta/Cta";
import Geograph from "../../partials/Geograph/Geograph";
import logo from "../../../assets/logo.png"
import FormData from "../../partials/FormData/FormData";

const Contact = () => {
  const title = "Get in Touch with Catsntechs";
  const description =
    "Whether you have a question, need assistance, or want to collaborate, our team at Catsntechs is here to help. Reach out to us and let's create something amazing together!";
  const url =
    "https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_640.jpg";
  return (
    <>
    <div>
    <div className="logo">
<a href="/">                    <img
                        src={logo}
                        className="h-40 w-40 bg-transparent"
                        alt=""
                    /></a>
                </div>
      <Cta url={url} title={title} description={description} page={'Contact us'}/>
      <div className="min-h-screen p-3 flex flex-col items-center">
        <h1 className="m-3 text-sm font-bold text-opacity-35">
          
        </h1>
        <div className="m-3">
          <h1 className="text-5xl">Come visit us and say hello !!</h1>
          <div className="my-4 md:flex gap-6">
            <span>
              <h1 className="font-bold text-xl my-1">Address</h1>
              <p>CATSNTECHS</p>
              <p>250 Bis, Boulevard Saint-Germain</p>
              <p>Paris 75007, France.</p>
            </span>
            <span>
              <h1 className="font-bold text-xl my-1">Phone</h1>
              <p>+33 7 87 97 05 40</p>
            </span>
            <span>
              <h1 className="font-bold text-xl my-1">Email</h1>
              <p>support@catsntechs.com</p>
            </span>
          </div>
        </div>

        {/* contact form */}
        <div className="md:flex md:gap-5">
          {/* enquire form */}
          
          <FormData/>

           {/* google map */}
           <div className="flex items-center mt-4 md:mt-0">
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
