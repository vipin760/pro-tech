import React from "react";
import TextGenerateEffect from "../../ui/TextGenerateEffects";
import { IconChevronRight } from "@tabler/icons-react";

const header = `Partnering in Business Sustainability through Network Technical Support Partnering in Business Sustainability`;
const WhoWeAre = () => {
   const headerColor = "text-blue-100 text-3xl"
  return (
    <>
    <div className="flex justify-center p-5 bg-slate-950" style={{backgroundImage:"url()"}}>
      {/* left */}
      <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="text-sm m-3 font-bold text-opacity-35" data-aos="fade-left">WHO WE ARE</h1>
        <h2 className="text-3xl" data-aos="zoom-in-down">WE PROVIDE TOPNOTCH NETWORK
        INFRASTRUCTURE SERVICES</h2>
        <p className="text-xl" data-aos="zoom-in-down">
        Catsntechs is an independent, privately owned company providing network infrastructure deployment and maintenance services. Catsntechs offers value-based hands and eyes services available to clients at their remote network premises and facilities in various countries.
        </p>
        <p className="text-xl mt-5" data-aos="zoom-in-down">
        Our goal is to help our customers to succeed in their business by partnering with their IT network deployments and maintenance requirements. We ensure customer satisfaction through high quality and flexible services in secure and trusted means by utilizing our multi-skilled workforce and industry experiences.
        </p>


      </div>

    </div>
    </>
  );
};

export default WhoWeAre;
