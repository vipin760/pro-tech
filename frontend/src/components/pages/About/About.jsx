import React from "react";
import Cta from "../../partials/Cta/Cta";
import logo from "../../../assets/logo.png";
import "./About.css";
const about = [
    {
        img: "https://prohandstech.com/wp-content/uploads/2019/10/icon01.png",
        title: "Requirement Analysis",
        description:
            "Prohands apply best industry practices and standards in all its projects and activities.Involves gathering, documenting, and managing stakeholder needs and expectations to ensure the final deliverables using various elicitation techniques, and prioritizing and validating requirements to align with business goals.",
    },
    {
        img: "https://prohandstech.com/wp-content/uploads/2019/10/icon02.png",
        title: "Planning",
        description:
            " Involves creating a detailed roadmap that includes timelines, resource allocation, risk management, and budgeting to guide the project from initiation to completion.We have continuous correspondence channels with our client, and we assign SPOC for every client to save time and for quick support. ",
    },
    {
        img: "https://prohandstech.com/wp-content/uploads/2019/10/icon03.png",
        title: "Implimentation",
        description:
            "We treat every demand from our customer as new and analyse them properly to provide high quality and optimum result with minimum cost. Ensures that project activities are completed on time, within budget, and to the required quality standards, ultimately achieving the project's objectives.",
    },
    {
        img: "https://prohandstech.com/wp-content/uploads/2019/10/icon04.png",
        title: "Launching",
        description:
            "Here comes successful launch ensures that the project meets stakeholder expectations, gains user acceptance, and achieves the desired impact and  .For our ongoing clients we have dedicated teams in every region, and we provide network specific training to our work force..",
    },
];

const About = () => {
    return (
        <>
            {" "}
            <div className="logo">
                <a href="/">
                    {" "}
                    <img
                        src={logo}
                        className="h-40 w-40 bg-transparent"
                        alt=""
                    />
                </a>
            </div>
            <Cta />
            <div className="flex flex-col items-center w-full">
                <div className="">
                    <h1 className="text-xl text-sans-serif font-medium tracking-widest text-center my-5">
                        {" "}
                        Here It Starts
                    </h1>
                    <h4 className="text-4xl text-sans-serif font-bold text-center">
                        {" "}
                        Hear From Our Story
                    </h4>
                    <div className="my-8 lg:flex ">
                        <div className="p-4 max-w-xl">
                            <img
                                src="https://media.istockphoto.com/id/1465188429/photo/business-performance-monitoring-concept-businessman-using-smartphone-online-survey-filling.jpg?s=612x612&w=0&k=20&c=7c47U-ZeTVL4H1_jPyO-8V3mKVPbeDb25oOxIV7NoEE="
                                data-aos="zoom-in"
                            />
                        </div>
                        <div className="p-4 max-w-xl">
                            <h1 className="font-semibold text-2xl lg:text-3xl text-sans pb-6">
                                {`"CatsnTechs is able to create products that have a longer
                        term viability"`}
                            </h1>
                            <p className="leading-4 sm:leading-5 md:text-lg text-sm text-justify text-serif">
                                {" "}
                                Born from the convergence of innovation and
                                necessity, Optora was founded on a simple yet
                                powerful idea: to revolutionize the way
                                businesses harness the potential of their
                                networks. Our journey began with a deep-seated
                                belief that every organization, irrespective of
                                its size or industry, deserves access to
                                cutting-edge network solutions that not only
                                meet their needs but surpass their expectations.{" "}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 lg:flex">
                    <div className="p-8 flex  justify-center max-w-2xl">
                        <div className="" data-aos="fade-down-left">
                            <div className="">
                                <img
                                    className="-mx-5 h-48 w-72 rounded-se-xl rounded-bl-xl "
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIUMBkLC1gYG0A9D7Gnvw4kY4R0Ybo92N5A&s"
                                />
                            </div>
                            <div className="-translate-y-12 -mx-10">
                                <img
                                    src="https://img.freepik.com/free-photo/laptop-with-blue-optical-fiber_23-2148779308.jpg"
                                    className="border-spacing-3 border-4 h-36 w-48 mx-32  rounded-se-xl rounded-bl-xl "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-8 max-w-2xl ">
                        <h1 className="font-bold text-sans-serif text-2xl  ">
                            {" "}
                            Partnering in Business Sustainability through
                            Network Technical Support
                        </h1>
                        <p className="text-lg text-sans-serif text-gray-400 my-6">
                            {" "}
                            CatsnTech is an independent, privately owned company
                            providing network infrastructure deployment and
                            maintenance services. Prohands offers value-based
                            hands and eyes services available to clients at
                            their remote network premises and facilities in
                            various countries.
                        </p>
                        <div className="pb-6">
                            <div className="flex gap-4 pb-5">
                                <img
                                    src="https://www.creativefabrica.com/wp-content/uploads/2021/03/24/Electrical-Engineering-Logo-or-Icon-Graphics-9921044-1.jpg"
                                    className="size-6"
                                />
                                <h4 className="font-medium text-3xl text-black-900 font-sans -my-2">
                                    1500+ Clients
                                </h4>
                            </div>
                            <p className="text-lg text-serif p-4 pb-6 line-clamp-6 ">
                                Serving 500+ customers across enterprises, ISVs,
                                and startups from 10+ countries
                            </p>
                        </div>
                        <div className="">
                            <div className="flex gap-4 pb-5">
                                <img
                                    src="https://tse2.mm.bing.net/th?id=OIP.1Wu2jD6FbeEc9W1RyTU7XQHaKn&pid=Api&P=0&h=180"
                                    className="size-5"
                                />
                                <h4 className="font-medium text-3xl text-black-900 font-sans -my-3">
                                    11 Global Locations{" "}
                                </h4>
                            </div>
                            <p className="text-lg text-serif p-4 pb-6 line-clamp-6">
                                Headquartered in Trivandrum, India, we have
                                multiple offices in Asia, North America, UK &
                                Europe, and ANZ
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-4 w-full flex justify-center">
                    <div className=" pt-16 pb-32">
                        <h1 className="text-xl text-sans-serif font-medium text-white  tracking-widest  text-center">
                            Our Team
                        </h1>
                        <h4 className="text-4xl text-sans-serif font-bold text-center text-white pt-7 pb-5">
                            CatsnTechs
                        </h4>
                        <p
                            className="max-w-2xl leading-8  text-justify"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            {" "}
                            CatsnTechs has a very versatile team with abundant
                            skills and experiences. Our team members are the
                            main backbone of our company. Our team involves
                            Engineers, Technicians, Subject Matter Experts,
                            administrative personnel in various functional
                            areas. Our resources are fully equipped with enough
                            hardware and software tools and test equipment to
                            serve the customer needs for testing and
                            troubleshooting their network facilities. CatsnTechs
                            has dedicated team around major cities in Europe,
                            Middle East and South East Asia. We mobilise our
                            regional workforce to nearby cities as per demand.
                            We also avail our Partner teams support in various
                            locations for seamless operations across globe{" "}
                        </p>
                    </div>
                </div>
                <div className="w-4/5 p-4 text-justify pt-10 ">
                    <h1 className="text-xl text-sans-serif font-medium tracking-widest pb-7 text-center ">
                        Services
                    </h1>
                    <p className="text-4xl text-sans-serif  font-bold text-center ">
                        How We Work <br />
                    </p>{" "}
                    {/* <p className="text-xl text-sans-serif pb-14 ">
                    Streamlined process ensuring agility and flexibility in
                    operation
                </p> */}
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center mt-10">
                        {about.map((item, index) => (
                            <div className="p-4 max-w-sm" key={index}>
                                <div className="flex rounded-lg h-full dark:bg-gray-800 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                            <img src={item.img} />
                                        </div>
                                        <br />
                                        <h2 className="text-white dark:text-white text-2xl mx-3 font-medium">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col text-justify flex-grow">
                                        <p
                                            className="leading-relaxed text-base  text-gray-400 dark:text-gray-300"
                                            data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500"
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="">
                    <div className=" pt-24 pb-16">
                        <h1 className="text-2xl text-sans-serif font-medium text-white tracking-widest  text-center">
                            Our Mission
                        </h1>
                        <h4 className="text-5xl text-sans-serif text-white font-bold text-center pt-7">
                            We Promise
                        </h4>{" "}
                    </div>
                    <div className="flex items-center p-5 pb-20">
                        <div className="">
                            <div className="flex justify-center ">
                                <img
                                    src="https://www.shutterstock.com/shutterstock/videos/1069162396/thumb/8.jpg?ip=x480 "
                                    className=""
                                    data-aos="zoom-in"
                                />
                            </div>
                            <p
                                className="text-xl font-bold text-justify text-sans-serif pt-7 max-w-2xl"
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                            >
                                {" "}
                                At the heart of CatsnTechs lies a mission to
                                empower businesses with the tools and strategies
                                they need to thrive in a digitally connected
                                world. We understand that network infrastructure
                                is the lifeline of modern enterprises, and our
                                mission is to ensure that this lifeline remains
                                strong, secure, and adaptable to meet the
                                evolving demands of the digital age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
