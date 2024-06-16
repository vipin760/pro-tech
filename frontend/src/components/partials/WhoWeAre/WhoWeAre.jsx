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
        <h1 className="text-sm m-3 font-bold text-opacity-35">WHO WE ARE</h1>
        <h2 className="text-3xl">WE PROVIDE TOPNOTCH NETWORK
        INFRASTRUCTURE SERVICES</h2>
        
        <p className="text-xl mt-5">
        At Cats N Tech Pvt Ltd is a leading provider of data center services, headquartered in
India with a global reach. With a team of experienced professionals and a commitment
to excellence, we strive to exceed our clients expectations and provide innovative
solutions to meet the evolving demands of the data center industry.

        </p>


      </div>

    </div>
    </>
  );
};

export default WhoWeAre;
