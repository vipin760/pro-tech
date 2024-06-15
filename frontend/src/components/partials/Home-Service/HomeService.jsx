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

const HomeService = ({ service }) => {
  return (
    <div className="w-full bg-slate-950 p-4">
      <div>
        <h1 className="text-center" data-aos="fade-right">
          OUR SERVICES
        </h1>
        <h1 className="text-4xl text-center" data-aos="zoom-in-down">
          Fulfilment with customer focus
        </h1>
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
                      <i className={item.icon} data-aos="zoom-in"></i>
                    </div>
                    <h2
                      className="text-white dark:text-white text-2xl font-medium"
                      data-aos="zoom-in-up"
                    >
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <p
                      className="leading-relaxed text-base text-white dark:text-gray-300"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      {item.description}
                    </p>
                    <a data-aos="zoom-out-down"
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
