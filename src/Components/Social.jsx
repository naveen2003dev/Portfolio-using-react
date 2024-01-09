import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoGoogleCloud } from "react-icons/bi";
const Social = () => {
  const Slink = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/naveen-bhadouria/",
      style: "rounded-tr-md",
      target: "_blank",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/naveen2003dev",
      target: "_blank",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:naveen223singh@gmail.com",
      target: "_blank",
    },
    {
      id: 4,
      child: (
        <>
          Google Cloud <br /> Skillboost <BiLogoGoogleCloud size={30} />
        </>
      ),
      href: "https://www.cloudskillsboost.google/public_profiles/088b3970-9915-412b-a1f7-36021c8cdce2",
      target: "_blank",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
      target: "_blank",
    }
  ];

  return (
    <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {Slink.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}
          >
            <>
              <a
                href={href}
                className="text-white flex justify-between items-center w-full"
                download={download}
                target="_blank"
              >
                {child}
              </a>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
