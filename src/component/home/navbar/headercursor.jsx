import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">MyApp</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-300 hover:text-white px-4 py-2 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-gray-300 hover:text-white px-4 py-2 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-gray-300 hover:text-white px-4 py-2 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-gray-300 hover:text-white px-4 py-2 ${
              isActive ? "border-b-2 border-white" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-4">
          <button onClick={toggleMenu} className="text-white mb-4">
            Close
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-300 hover:text-white px-4 py-2 ${
                isActive ? "border-b-2 border-white" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-300 hover:text-white px-4 py-2 ${
                isActive ? "border-b-2 border-white" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-300 hover:text-white px-4 py-2 ${
                isActive ? "border-b-2 border-white" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-300 hover:text-white px-4 py-2 ${
                isActive ? "border-b-2 border-white" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
