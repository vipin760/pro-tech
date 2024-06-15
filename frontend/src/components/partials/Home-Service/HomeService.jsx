import React from "react";
import "./HomeService.css";

// const service = [
//   "Equipment installation",
//   "Hardware replacement",
//   "S/w configuration & updates",
//   "Network migrations",
//   "Structured cabling",
//   "Inspection & troubleshooting",
//   "Logistics support",
// ];
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
const engagements = [
  "Turnkey deployments",
  "Project based outsourcing",
  "Regular & routine maintenance",
  "Ad-hoc and emergency support",
  "Managed services Operation",
  "Management & Control consulting",
];

const benefits = [
  "Rapid resource mobilization",
  "Versatile and experienced workforce",
  "Multinational dedicated teams",
  "24×7 emergency support",
  "Familiar to major Data Centre facilities",
  "Partner team support in many locations",
];

const HomeService = () => {
  return (
    <div className="w-full bg-slate-950 p-4">
      <div>
        <h1 className="text-center">OUR SERVICES</h1>
        <h1 className="text-4xl text-center">Fulfilment with customer focus</h1>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center mt-10">
            {/* <!-- card 1 --> */}
            {service.map((item, idx) => (
              <div key={idx} className="p-4 max-w-sm">
                <div className="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                      <i className={item.icon}></i>
                    </div>
                    <h2 className="text-white dark:text-white text-2xl font-medium">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      {item.description}
                    </p>
                    <a
                      href="/service"
                      className="mt-3 dark:text-white hover:text-blue-600 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
