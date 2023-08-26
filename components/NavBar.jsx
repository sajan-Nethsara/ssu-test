import React from "react";
import { Link } from "react-router-dom";
import Logo from "../src/img/logo.svg";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <div className=" flex flex-row justify-between items-center">
      <Link to='/' className="flex items-center flex-row">
        <img
          src={Logo}
          alt="ssu-logo"
          height={70}
          width={70}
          className="mx-7 my-5 logo"
        />
        <h1 className="font-bold text-2xl logo-text">Socialist Students Union</h1>
      </Link>
      <div className=" flex flex-row gap-2 mx-7">
        <NavButton path={"/about"} label={"About"} />
        <NavButton path={"/articles"} label={"Articles"} />
        <NavButton path={"/magazines"} label={"Magazines"} />
        <NavButton path={"/upevents"} label={"Upcoming"} />
      </div>
    </div>
  );
};

export default NavBar;
