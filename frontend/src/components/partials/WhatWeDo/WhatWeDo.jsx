import "./WhatWeDo.css"
import React from "react";

import { twMerge } from "tailwind-merge";
import TracingBeam from "../../ui/TracingBeam";
const operations = [
    {title:"Remote Network",subtitle:"Operation & Maintenance",url:"https://prohandstech.com/wp-content/uploads/2019/03/Remote-Network-Operation-and-Maintenance.jpg"},
    {title:"Network",subtitle:"Equipment Installation",url:"https://prohandstech.com/wp-content/uploads/2019/03/Network-Equipment-Installation-3.jpg"},
    {title:"Structured",subtitle:"Cabling & Connectivity",url:"https://prohandstech.com/wp-content/uploads/2019/03/Structured-Cabling-Connectivity.jpg"},
    {title:"Fibre Links deployment",subtitle:"Troubleshooting",url:"https://prohandstech.com/wp-content/uploads/2019/03/Fibre-Links-deployment-Troubleshooting.jpg"},
    {title:"Software",subtitle:"Configurations & Updates",url:"https://prohandstech.com/wp-content/uploads/2019/10/glenn-carstens-peters-npxXWgQ33ZQ-unsplash-e1571695375344.jpg"}
]

const WhatWeDo = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h1 className="text-sm m-3 font-bold text-opacity-35">WHAT WE DO</h1>
          <h2 className="text-3xl uppercase">
            Hassle free execution with quality and trust
          </h2>
        </div>
      </div>
      <TracingBeam className="px-10">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {operations.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full md:text-7xl text-4xl  w-fit px-4 mb-4">
              {item.title} &
            </h2>
 
            <p className={twMerge("text-3xl md:text-5xl mb-4 z-10 relative ")}>
              {item.subtitle}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.url && (
                <div className="element">
                    <img
                  src={item.url}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  data-aos="zoom-in"
                  className="rounded-lg mb-10 object-cover w-[210%]  "
                />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
        

      </TracingBeam>
    </div>
  );
};

const dummyContent = [
  {
    title: "Remote Network",
    subtitle: "Operation & Maintenance",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default WhatWeDo;
