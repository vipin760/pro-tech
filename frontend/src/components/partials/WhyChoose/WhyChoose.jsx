import React from "react";
import "./WhyChoose.css"

const chooseItmes = [
  {
    icon: "",
    title: "Rapid Resource Mobilization",
    description:
      "We understand the importance of quick response times s in the data center industry and are committed to mobilizing resources promptly to address your needs",
  },
  {
    icon: "",
    title: "Experienced Workforce",
    description:
      "Our team comprises versatile and experienced professionals who are dedicated to delivering high-quality services",
  },
  {
    icon: "",
    title: "24x7 Emergency Support",
    description:
      "We offer round-the-clock emergency support to ensure minimal disruption to your operations",
  },
  {
    icon: "",
    title: "Familiarity with Major Data Center Facilities",
    description:
      " Our team is familiar with major data center facilities, allowing us to provide tailored solutions that meet your specific requirements",
  },
];
const WhyChoose = () => {
  return (
    <div className="w-full md:flex md:flex-col md:items-center bg-slate-950 my-10 py-4">
      <h1 className="text-sm m-3 font-bold text-opacity-35 md:text-center"> WHY CHOOSE US </h1>
      <h1 className="text-3xl text-center my-2">The Cats N Tech Advantage</h1>
      <div className="flex w-full flex-col justify-center items-center ">
    <div className="flex flex-col max-w-4xl justify-center items-center p-2 md:flex-row md:items-start">
        <div className="element">
            <img className=" bg-slate-500" src="https://cdn.pixabay.com/photo/2016/11/23/14/49/controls-1853330_640.jpg" alt="" />
        </div>
        {/* cards */}
<div className="container mx-auto px-4 max-w-md my-2">
    <div className="grid grid-cols-2 gap-6">
     {
        chooseItmes.map((items,idx)=>(
            <div className="border rounded-ss-sm rounded-lg p-2 shadow-lg text-white" data-aos="zoom-in" key={idx}>
            <h2 className="text-sm font-semibold mb-2">{items.title}</h2>
            <p className="text-gray-200 text-sm line-clamp-3">{items.description}</p>
          </div>
        ))
     }

      
     
    </div>
  </div>
{/* cards end */}

    </div>


    
</div>
    </div>
  );
};

export default WhyChoose;


