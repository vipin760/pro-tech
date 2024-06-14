import React from "react";

const Benefits = () => {
  return (
    <div className="flex justify-center">
      <div className="md:max-w-3xl">
        {/* engagements */}
        <div className="m-2 py-10">
          <h1 className="md:text-center text-4xl">ENGAGEMENTS</h1>
          <div className="md:flex md:w-full md:justify-center text-2xl">
            <ul>
              <li className="m-2">- Turnkey deployments</li>
              <li className="m-2">- Project based outsourcing</li>
              <li className="m-2">- Regular & routine maintenance</li>
            </ul>
            <ul>
                <li className="m-2">- Ad-hoc and emergency support</li>
                <li className="m-2">- Managed services Operation</li>
                <li className="m-2">- Management & Control consulting</li>
            </ul>
          </div>
        </div>
        {/* benefits */}
        <div className="m-2">
            <h1 className="md:text-center text-4xl">BENEFITS</h1>
            <div className="md:flex md:w-full md:justify-center text-2xl">
            <ul className="">
                <li className="m-2">- Rapid resource mobilization</li>
                <li className="m-2">- Versatile and experienced workforce</li>
                <li className="m-2">- Multinational dedicated teams</li>
            </ul>
            <ul>
                <li className="m-2">- 24×7 emergency support</li>
                <li className="m-2">- Familiar to major Data Centre facilities</li>
                <li className="m-2">- Partner team support in many locations</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
