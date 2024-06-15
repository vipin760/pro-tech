import React from "react";

const Benefits = () => {
  return (
    <div className="flex justify-center">
      <div className="md:max-w-3xl">
        {/* engagements */}
        <div className="m-2 py-10">
          <h1 className="md:text-center text-4xl" data-aos="zoom-in">ENGAGEMENTS</h1>
          <div className="md:flex md:w-full md:justify-center text-2xl">
            <ul>
              <li className="m-2" data-aos="zoom-in">- Turnkey deployments</li>
              <li className="m-2" data-aos="zoom-in">- Project based outsourcing</li>
              <li className="m-2" data-aos="zoom-in">- Regular & routine maintenance</li>
            </ul>
            <ul>
                <li className="m-2" data-aos="zoom-in">- Ad-hoc and emergency support</li>
                <li className="m-2" data-aos="zoom-in">- Managed services Operation</li>
                <li className="m-2" data-aos="zoom-in">- Management & Control consulting</li>
            </ul>
          </div>
        </div>
        {/* benefits */}
        <div className="m-2">
            <h1 className="md:text-center text-4xl" data-aos="zoom-in">BENEFITS</h1>
            <div className="md:flex md:w-full md:justify-center text-2xl">
            <ul className="">
                <li className="m-2" data-aos="zoom-in">- Rapid resource mobilization</li>
                <li className="m-2" data-aos="zoom-in">- Versatile and experienced workforce</li>
                <li className="m-2" data-aos="zoom-in">- Multinational dedicated teams</li>
            </ul>
            <ul>
                <li className="m-2" data-aos="zoom-in">- 24×7 emergency support</li>
                <li className="m-2" data-aos="zoom-in">- Familiar to major Data Centre facilities</li>
                <li className="m-2" data-aos="zoom-in">- Partner team support in many locations</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
