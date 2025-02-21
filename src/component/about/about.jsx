import React, { Component } from "react";
// import "./about.css";

export class About extends Component {
  render() {
    return (
      <>
        <section class="course container-fluid">
          <div class="heading text-gray-900">
            <h1 className="">
              Onetech Technologies is a Systems Integrator focused on advancing
              human experience through IT enabled Innovation
            </h1>
          </div>
            <div class="text flex flex-wrap items-center px-4">
            <div class="w-full lg:w-5/12 mb-5 lg:mb-0 flex justify-center">
              <img class="img" src="image/About-Us-400x324.png" alt="" />
            </div>
            <div class="w-full lg:w-7/12 lg:pl-4 lg:pt-4">
              <p className="text-gray-900">
                With a proven track record spanning over two decades, Onetech
                Technologies brings forth a wide range of high end products and
                services that address all the present and future technology
                needs for your business. Our key areas of expertise include
                Office Automation Solutions (MFP’s, Scanners & Printers),
                Currency Handling Solutions, CCTV & Security Solutions,
                Audio-Visual Solutions, Telecom & PABX, IT Infrastructure,
                Cloud, ERP, IoT, Blockchain, Mobility, E-commerce, Enterprise
                Content Management, Business Process Management, Robotic Process
                Automation and Business Analytics & Intelligence Solutions. We
                combine products that lead the industry along with System
                Integrator Services from our accredited and experienced design
                and delivery team to offer Customers a seamless experience.
                Headquartered in Dubai, we are a 100% local company with a
                global outlook.
              </p>
            </div>
          </div>
        </section>
        <section class="mv container m-auto">
          <div class="mission text-gray-900">
            <h1 className="text-4xl font-medium mb-3">Mission</h1>
            <p>
              Our mission is to offer complete and innovative IT solutions and
              services to the clients in order for them to achieve their
              business objectives, become their trusted partner and to keep up
              with a continuing evolving world.
            </p>
          </div>
          <div class="vision text-gray-900">
            <h1 className="text-4xl font-medium mb-3 mt-10">Vision</h1>
            <p>
              Our Vision is to help our customers to get the most out of the
              available technologies and solutions enabling them to achieve
              their desired business goals. Our Services Technology Services Web
              Services Design & Implement Premises Wiring (SCN) Design &
              Implement Active Network Unified Communication & Collaboration
              Wireless LAN, PTP & Microwave Solution CCTV & IP Networked
              Security System Network Security
            </p>
          </div>
        </section>
        <div class="whatsapp">
          <a href="https://wa.me/971504153141">
            <img
              id="whatsapp"
              height="40px"
              src="image/WhatsApp-logo.png"
              alt=""
              width={100}
            />
          </a>
        </div>
      </>
    );
  }
}

export default About;
