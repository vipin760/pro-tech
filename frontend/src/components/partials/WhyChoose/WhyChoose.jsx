import React from "react";

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
      ": Our team comprises versatile and experienced professionals who are dedicated to delivering high-quality services",
  },
  {
    icon: "",
    title: "Global Presence",
    description:
      "With multinational dedicated teams and partner support in various locations, we have the global reach to support your operations wherever you are",
  },
  {
    icon: "",
    title: "24x7 Emergency Support",
    description:
      ": We offer round-the-clock emergency support to ensure minimal disruption to your operations",
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
    <div className="bg-slate-950 p-4">
      <h1 className="text-sm m-3 font-bold text-opacity-35"> WHY CHOOSE US </h1>
      <h1 className="text-3xl text-center my-2">The Cats N Tech Advantage</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mt-10">
          {/* <!-- card 1 --> */}
          {chooseItmes.map((item, idx) => (
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
  );
};

export default WhyChoose;
