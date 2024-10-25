import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
      <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/delivery">Delivery</a></li>
            <li><a href="/privacy_policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94-112-345-678</li>
            <li><a href="mailto:info@forever.com">info@forever.com</a></li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ Forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
