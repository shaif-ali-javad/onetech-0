import React, { Component, useState, createRef } from "react";

import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./image/Artboard 1@00x.png";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

const IThomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-8 text-base">
        <div className="space-y-4">
          <div className="pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg text-gray-700"
              onClick={() => toggleAnswer(0)}
            >
              <span className="font-semibold">IT Services</span>
              {openIndex === 0 ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </div>
            {openIndex === 0 && (
              <div className="mt-2 text-gray-700 bg-slate-100 p-4 rounded-xl">
                <NavLink className=" " to="/itamc">
                  IT AMC
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/itrelocation">
                  IT Relocation
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/itinfrastructure">
                  IT Infrastructure
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/itoutsourcing">
                  IT Outsourcing
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/itconsultancy">
                  IT Consultancy
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/cloudmigration">
                  Cloud Migration
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/ictsolutions">
                  ICT Solutions
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/newofficeitsetup">
                  New Office IT Setup
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg text-gray-700"
              onClick={() => toggleAnswer(1)}
            >
              <span className="font-semibold">Outsourcing</span>
              {openIndex === 1 ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </div>
            {openIndex === 1 && (
              <div className="mt-2 text-gray-700 bg-slate-100 p-4 rounded-xl">
                <NavLink className=" " to="/itoutsourcing">
                  IT Outsourcing
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/bpooutsourcing">
                  BPO Outsourcing
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg text-gray-700"
              onClick={() => toggleAnswer(2)}
            >
              <span className="font-semibold">IT Infrastructure</span>
              {openIndex === 2 ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </div>
            {openIndex === 2 && (
              <div className="mt-2 text-gray-700 bg-slate-100 p-4 rounded-xl">
                <NavLink className=" " to="/vpnsolutions">
                  VPN Solutions
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/databackupdisasterrecoveryservices">
                  Data Backup & Disaster Recovery Services
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/firewallinstallation">
                  Firewall Installation
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/servervirtualizationservices">
                  Server Virtualization Services
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/office365services">
                  Office 365 Services
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/ithardwareservices">
                  IT Hardware Services
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/officetelephonesystem">
                  Office Telephone System
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/structurecabling">
                  Structure Cabling
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="pb-4">
            <div
              className="flex justify-between items-center cursor-pointer text-lg text-gray-700"
              onClick={() => toggleAnswer(3)}
            >
              <span className="font-semibold">ELV & Security</span>
              {openIndex === 3 ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </div>
            {openIndex === 3 && (
              <div className="mt-2 text-gray-700 bg-slate-100 p-4 rounded-xl">
                <NavLink className=" " to="/cctvinstallationdubai">
                  CCTV Installation Dubai
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/accesscontroltimeattendance">
                  Access Control & Time Attendance
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/telephonesolutions">
                  Telephone Solutions
                </NavLink>
                <br className="" />
                <NavLink className=" " to="/siraapprovedcctvinstallation">
                  SIRA Approved CCTV Installation
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="">
            <div
              className="flex justify-between items-center cursor-pointer text-lg text-gray-700"
              onClick={() => toggleAnswer(4)}
            >
              <span className="font-semibold">Computer</span>
              {openIndex === 4 ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-600" />
              )}
            </div>
            {openIndex === 4 && (
              <div className="mt-2 text-gray-700 bg-slate-100 p-4 rounded-xl">
                <NavLink className=" " to="/computer">
                  Computer
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
    this.dropdownRef = createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target)
    ) {
      this.setState({ dropdownOpen: false });
    }
  };

  handleDropdownToggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };
  // const [openIndex, setOpenIndex] = useState(null);

  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // state = { clicked: false, dropdownOpen: false };

  handleNavClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <div className="pb-4">
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active1" : "#navbar"}
            >
              <div className="backdrop"></div>
              <li>
                <NavLink className="link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="relative group">
                {/* Services Button */}
                <button
                  type="button"
                  className="link inline-flex items-center gap-x-1 text-gray-700"
                  onClick={this.handleDropdownToggle}
                >
                  SERVICES
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {this.state.dropdownOpen && (
                  <div
                    class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
                    ref={this.dropdownRef}
                  >
                    <div class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                      <IThomePage />
                    </div>.
                  </div>
                )}
              </li>

              <li>
                <NavLink className="link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/contact">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
