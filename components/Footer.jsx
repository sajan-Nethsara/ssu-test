import React from "react";
import Logo from "../src/img/logo.svg";
import { BsFacebook, BsTwitter, BsTwitch } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex bottom-0 flex-col mt-9 right-0 left-0">
      <div className="h-[1px] w-full card rounded-full"></div>
      <div className="w-full text-white flex justify-center flex-row">
        <div className="flex">
          <img
            src={Logo}
            alt="logo"
            className=" grayscale hover:grayscale-0 duration-500 mr-5"
            height={100}
            width={100}
          />
          <p>Socialist Student Union SriLanka</p>
        </div>
        <div>
          <a href="https://facebook.com" target="_blank">
            <BsFacebook className="text-white text-[40px]" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <BsTwitch className="text-white text-[40px]" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <BsTwitter className="text-white text-[40px]" />
          </a>
        </div>
      </div>
      <p>All Rights Reseverd</p>
    </div>
  );
};

export default Footer;
