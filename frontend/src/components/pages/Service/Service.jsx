import React from 'react'
import "./Service.css"
import Cta from '../../partials/Cta/Cta'
import HomeService from '../../partials/Home-Service/HomeService'
import WhatWeDo from '../../partials/WhatWeDo/WhatWeDo'
import logo from "../../../assets/logo.png"
const service = [
  {
    icon: "fas fa-wrench",
    title: "Equipment installation",
    description:
      "Equipment installation involves setting up and configuring machinery or devices for operational use. This process ensures that equipment functions correctly and safely, requiring expertise in assembly, calibration, and testing. Proper installation is crucial for optimal performance, longevity, and compliance with industry standards.",
  },
  {
    icon: "fas fa-tools",
    title: "Hardware replacement",
    description:
      "Hardware replacement involves swapping out old or faulty components in a device or system with new or functional ones. This process ensures the equipment operates efficiently and can extend its lifespan. It typically includes steps like diagnosing the issue, removing the defective part, and installing the new hardware.",
  },
  {
    icon: "fas fa-cogs",
    title: "S/w configuration & updates",
    description:
      "Software configuration and updates involve setting up and maintaining software applications to ensure optimal performance and security. This process includes installing, configuring, and updating software components to meet operational requirements and mitigate vulnerabilities. Regular updates enhance functionality, fix bugs, and strengthen cybersecurity measures, ensuring reliable and efficient system operation.",
  },
  {
    icon: "fas fa-exchange-alt",
    title: "Network migrations",
    description:
      "Network migrations involve transferring data, applications, or services from one network environment to another, often to enhance performance, security, or scalability. It requires meticulous planning to minimize downtime and ensure seamless integration of new infrastructure while maintaining operational continuity and data integrity.",
  },
  {
    icon: "fas fa-network-wired",
    title: "Structured cabling",
    description:
      "Structured cabling refers to the organized installation of network cabling infrastructure that supports various communication technologies within a building or campus. It provides a systematic approach to managing and transmitting data, voice, and video signals, ensuring scalability, flexibility, and efficiency in network operations.",
  },
  {
    icon: "fas fa-cog",
    title: "Inspection & troubleshooting",
    description:
      "Inspection & troubleshooting involves systematic evaluation and identification of issues in machinery, equipment, or systems to ensure optimal functionality. It includes diagnostic assessments, analysis of performance data, and remedial actions to resolve faults efficiently, enhancing reliability and operational efficiency",
  },
  {
    icon: "fas fa-truck",
    title: "Logistics support",
    description:
      "Logistics support involves managing the flow of goods, services, and information to ensure efficient operations. It encompasses tasks like transportation, warehousing, packaging, and route optimization. Effective logistics support facilitates timely delivery, reduces costs, and enhances overall supply chain management efficiency.",
  },
];
const Service = () => {
  const title = "WE ARE PROVIDING"
  const description="MANY LARGE AND MEDIUM GLOBAL FIRMS FOR THEIR INFRASTRUCTURE SERVICE NEEDS IN VARIOUS WELL-KNOWN DATA CENTRES AND INTERNET EXCHANGES. FAMILIARISATION WITH THEIR FACILITIES AND PROCEDURES BENEFITS OUR CLIENT IN EASING THEIR TASKS."
  const url ="https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_1280.jpg"
  return (
    <>
    <div>
      <div>
      <div className="logo">
                   <a href="/">
                   <img
                        src={logo}
                        className="h-40 w-40 bg-transparent"
                        alt=""
                    />
                   </a>
                </div>
        <Cta title={title} description={description} url={url} page={'Service'}/>
        <WhatWeDo/>
        <HomeService service={service} show={false} />
</div>
    </div>
    </>
  )
}

export default Service
