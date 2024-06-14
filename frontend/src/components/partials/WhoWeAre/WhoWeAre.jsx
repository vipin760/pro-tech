import React from "react";
import TextGenerateEffect from "../../ui/TextGenerateEffects";

const header = `Partnering in Business Sustainability through Network Technical Support Partnering in Business Sustainability`;
const WhoWeAre = () => {
   const headerColor = "text-blue-100 text-3xl"
  return (
    <>
    <div className="mt-3 text-center flex-col flex justify-center md:items-start items-center m-5">
        <div className="w-full text-center md:text-start">
            <h1 className="text-sm m-3 text-white font-bold">WHO WE ARE</h1>
        </div>
      <div className="w-full md:w-1/2 text-justify md:text-start"><TextGenerateEffect words={header}  className={headerColor}/></div>
    </div>
    <div>
        <div>
            <h1>WE PROVIDE TOPNOTCH NETWORK
            INFRASTRUCTURE SERVICES</h1>
        </div>
    </div>
    </>
  );
};

export default WhoWeAre;
