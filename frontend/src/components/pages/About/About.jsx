import React from "react";
import "./About.css";
import TextGenerateEffects from "../../ui/TextGenerateEffects";

const About = () => {
    const text = "OUR STORY";
    const text1 = "OUR MISSION";
    return (
        <div>
            <div className="w-min-h-screen bg-green-600 h-[400px] ">
                LANDING
            </div>
            <div className="m-5">
                <h1 className="text-white text-center text-3xl font-semibold pb-5">
                    Why Choose Us
                </h1>
                <div className="flex justify-center  gap-5">
                    <div className="bg-green-300 size-60 flex flex-col items-center">
                        <img
                            src="https://experionglobal.com/wp-content/uploads/2023/04/ethics.png"
                            className=""
                        />
                        <div className="w-3 h-3  rounded-custom bg-red-700 "></div>
                        <h1>Ethics</h1>
                        <p>
                            {" "}
                            we are always doing what's right for our customers,
                            partners, and society.
                        </p>
                    </div>
                    <div className="bg-green-300 size-60 flex flex-col items-center">
                        <img
                            src="https://experionglobal.com/wp-content/uploads/2023/04/Empathy.png"
                            className=""
                        />
                        <div className="w-3 h-3  rounded-custom bg-red-700 "></div>
                        <h1>Empathy</h1>
                        <p>
                            {" "}
                            we are always doing what's right for our customers,
                            partners, and society.
                        </p>
                    </div>
                    <div className="bg-green-300 size-60 flex flex-col items-center">
                        {" "}
                        <img
                            src="https://experionglobal.com/wp-content/uploads/2023/04/Excel.png"
                            className=""
                        />
                        <div className="w-3 h-3  rounded-custom bg-red-700 "></div>
                        <h1>Excellence</h1>
                        <p>
                            {" "}
                            we are always doing what's right for our customers,
                            partners, and society.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-evenly bg-black pt-10 text-white ">
                <div className=" w-2/6 ">
                    <TextGenerateEffects
                        words={text}
                        className="text-blue-500"
                    />

                    <p className="text-xl text-justify leading-8">
                        Born from the convergence of innovation and necessity,
                        Optora was founded on a simple yet powerful idea: to
                        revolutionize the way businesses harness the potential
                        of their networks. Our journey began with a deep-seated
                        belief that every organization, irrespective of its size
                        or industry, deserves access to cutting-edge network
                        solutions that not only meet their needs but surpass
                        their expectations.
                    </p>
                </div>
                <div className="w-2/6 pb-10 ">
                    <TextGenerateEffects
                        words={text1}
                        className="text-blue-500"
                    />

                    <p className="text-xl leading-8 text-justify">
                        At the heart of Optora lies a mission to empower
                        businesses with the tools and strategies they need to
                        thrive in a digitally connected world. We understand
                        that network infrastructure is the lifeline of modern
                        enterprises, and our mission is to ensure that this
                        lifeline remains strong, secure, and adaptable to meet
                        the evolving demands of the digital age.
                    </p>
                </div>
            </div>
            <div className="w-full  pt-12">
                <div className="bg-red-400 pt-10 about_page_1 h-[900px]">
                    <div>
                        <h1 className="text-4xl font-bold text-white text-center pb-8">
                            At a Glance
                        </h1>
                    </div>
                    <div className="bg-white w-4/6 h-[250px] mx-56">
                        <ul className="flex gap-5 justify-evenly border-spacing-3">
                            <li className="flex my-20 gap-5">
                                <img src="https://experionglobal.com/wp-content/uploads/2023/05/16-Plus-Years.png" />
                                <p>17+ YEARS</p>
                            </li>
                            <li className="flex my-20">
                                <img src="https://experionglobal.com/wp-content/uploads/2023/05/500-Plus-Customers.png" />
                                <p>500+ CUSTOMERS</p>
                            </li>
                            <li className="flex my-20">
                                <img src="https://experionglobal.com/wp-content/uploads/2023/05/11-Locations.png" />
                                <p>11 LOCATIONS</p>
                            </li>
                            <li className="flex my-20">
                                <img src="https://experionglobal.com/wp-content/uploads/2023/05/1500-Employees.png" />
                                <p>1500+ EMPLOYEES</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="pt-10">
                            {" "}
                            <h1 className="text-4xl font-bold text-white text-center pb-8">
                                Development Centers
                            </h1>
                        </div>
                        <div className="w-1/2 flex justify-evenly gap-10 mx-56 my-20">
                            <div className="bg-white w-[350px] h-[350px]">
                                <img src="" />
                            </div>
                            <div className="bg-white w-[350px] h-[350px]">
                                <img src="" />
                            </div>
                            <div className="bg-white w-[350px] h-[350px]">
                                <img src="" />
                            </div>
                            <div className="bg-white w-[350px] h-[350px]">
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
