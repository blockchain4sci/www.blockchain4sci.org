import { useState } from "react";
import { close, logo_atcg, menu } from "../assets";
import { navLinks } from "../constants";

import React from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="navbar" className="w-full bg-black flex flex-col navbar">

      <div className=" bg-black flex flex-row justify-between items-center">
        <img
          src={logo_atcg}
          alt="cancerdao"
          className="mt-auto px-2 aspect-auto h-[64px]"
        />
        <div className="flex flex-col">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`mt-auto font-bold cursor-pointer text-[20px] ${
                  active === nav.title ? "text-gradient" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-2" : "mr-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="absolute top-5 w-[48px] h-[48px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 z-10 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-gradient" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
