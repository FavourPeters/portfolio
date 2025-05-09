"use client";
import Link from "next/link";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { useActiveSection } from "../hooks/useActiveSection";

const Navbar = () => {
  const activeSection = useActiveSection();

  const navItems = [
    { id: "home", icon: <AiOutlineHome className="text-xl" />, label: "Home" },
    {
      id: "projects",
      icon: <AiOutlineFundProjectionScreen className="text-xl" />,
      label: "My Work",
    },
    { id: "skills", icon: <BiCodeAlt className="text-xl" />, label: "Skills" },
    { id: "about", icon: <BsPerson className="text-xl" />, label: "About" },
  ];

  return (
    <div className="px-8 py-3 md:py-4 md:px-15 lg:px-25 bg-white/5 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="logo text-xl font-bold hover:scale-105 transition-transform duration-300">
          Favour<span className="text-basic">Peters</span>
        </div>
        <div className="links font-medium hidden md:block">
          <ul className="p-0 m-0 flex justify-between space-x-8 text-basic md:space-x-14 lg:space-x-24">
            {navItems.map((item) => (
              <li key={item.id} className="relative group cursor-pointer">
                <Link href={`#${item.id}`}>
                  <span
                    className={`flex items-center gap-2 transition-colors duration-300 
                    ${
                      activeSection === item.id
                        ? "text-basic"
                        : "hover:text-basic"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-basic to-basic/50 
                    transition-all duration-300 
                    ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="#hire"
          className="btn btn-sm rounded-full bg-basic text-white font-bold md:btn-md 
          hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105
          hover:shadow-lg hover:shadow-basic/20"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
