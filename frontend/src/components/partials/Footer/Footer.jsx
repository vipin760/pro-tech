import React from "react";
import logo from "../../../assets/logo.png";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconChevronRight } from "@tabler/icons-react"
import TextGenerateEffects from "../../ui/TextGenerateEffects";

const Footer = () => {
  return (
    <>
    <div className=" bg-slate-950 w-full p-3 md:p-1">
    {/* logo */}
    <div className="flex flex-col items-start md:m-3 md:flex md:flex-col md:items-center lg:items-start lg:m-10">
        <a href="/"><img src={logo} className="w-40 h-32 bg-gray-950 border-2 border-gray-700 m-2 rounded-xl" alt="" /></a>
        <h1 className="text-white text-4xl font-bold"><TextGenerateEffects words={"Seeking a seamless and quality remote infrastructure support ?"}/></h1>
      </div>
    <div className="w-full md:flex md:justify-around">
      {/* address */}
      <div className="mt-2">
        <div className="text-white">
          <h1 className="font-bold text-xl">Catsntechs</h1>
          <p>
          Z31 KP Arcade
          </p>
          <p>IGBT, Manjeri, Malappuram, Kerala, India.</p>
          <p>Phone: <a href="tel:+91 9778191325">+91 9778191325</a></p>
          <p>Email: <a href="mailto:support@catsntechs.com">support@catsntechs.com</a></p>

        </div>
        <div className="my-4">
          <ul className="flex gap-2">
            <li className="bg-gray-500 w-8 rounded-lg p-1 hover:bg-black cursor-pointer"><a href="" className="text-black hover:text-white"><IconBrandFacebook/></a></li>
            <li className="bg-gray-500 w-8 rounded-lg p-1 hover:bg-black cursor-pointer"><a href="" className="text-black hover:text-white"><IconBrandInstagram/></a></li>
            <li className="bg-gray-500 w-8 rounded-lg p-1 hover:bg-black cursor-pointer"><a href="" className="text-black hover:text-white"><IconBrandTwitter/></a></li>
            <li className="bg-gray-500 w-8 rounded-lg p-1 hover:bg-black cursor-pointer"><a href="" className="text-black hover:text-white"><IconBrandLinkedin/></a></li>
          </ul>
        </div>
      </div>

      {/* global contacts */}
      <div className="text-white mt-4">
        <h1 className="font-bold text-xl">GLOBAL CONTACTS</h1>
        <ul className="text-white">
        <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/>  UAE</li>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/>  Europe</li>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/>UK</li>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/>Singapore</li>
        </ul>
      </div>

      {/* quick links */}
      <div className="text-white mt-4">
        <h1 className="font-bold text-xl">QUICK LINKS</h1>
        <ul>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/><a href="/">Home</a></li>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/><a href="/about">About Us</a></li>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/><a href="/contact">Contact Us</a></li>
          <li className="flex hover:pl-2 transition-all duration-500 ease-in-out"> <IconChevronRight/>  <a href="/service">Our Services</a></li>
        </ul>
      </div>
    </div>
    </div>
    
    <div className="bg-black text-white">
      <h1 className="p-2 text-center">@Copyright © 2024 Cats N Tech Pvt Ltd. All rights reserved.</h1>
    </div>
    </>
  );
};

export default Footer;
