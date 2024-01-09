import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 5,
      link: "Skills",
    },
    {
      id: 6,
      link: "Contact",
    }
  ];

  return (
    <div className="bg-black w-full h-14 flex justify-between items-center text-white px-5 fixed">
      <div>
        <h1 className="font-signature text-5xl capitalize cursor-not-allowed">Naveen</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-2 font-medium cursor-pointer text-gray-400 hover:scale-110 duration-75"
          >
            <Link to={link} smooth duration={500}>{link}</Link> 
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-600 pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ link, id }) => (
            <li key={id} className="px-4 py-6 cursor-pointer capitalize text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link> 
              </li>
          ))}
      </ul>

      )}

    </div>
  );
};

export default Navbar;
