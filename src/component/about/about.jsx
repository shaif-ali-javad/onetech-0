import React from "react";
import aboutImage from "../../assets/image/About-Us-400x324.png";
import whatsappLogo from "../../assets/image/WhatsApp-logo.png";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="heading text-center py-10">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Onetech Technologies
          </h1>
          <p className="text-xl text-[#1a365d] opacity-90">
            Systems Integrator focused on advancing human experience through IT enabled Innovation
          </p>
        </div>
      </section>

      <section className="about-content container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full lg:w-5/12">
            <img 
              className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform"
              src={aboutImage}
              alt="About Us"
            />
          </div>

          <div className="w-full lg:w-6/12">
            <p className="text-gray-700 leading-relaxed">
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

      <section className="mission-vision bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mission mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-[#1a365d] opacity-90 leading-relaxed">
              Our mission is to offer complete and innovative IT solutions and
              services to the clients in order for them to achieve their
              business objectives, become their trusted partner and to keep up
              with a continuing evolving world.
            </p>
          </div>

          <div className="vision">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-[#1a365d] opacity-90 leading-relaxed">
              Our Vision is to help our customers to get the most out of the
              available technologies and solutions enabling them to achieve
              their desired business goals. Our Services Technology Services Web
              Services Design & Implement Premises Wiring (SCN) Design & 
              Implement Active Network Unified Communication & Collaboration
              Wireless LAN, PTP & Microwave Solution CCTV & IP Networked
              Security System Network Security
            </p>
          </div>
        </div>
      </section>

      <div className="whatsapp-button fixed bottom-8 right-8 z-50">
        <a href="https://wa.me/971504153141" className="hover:scale-110 transition-transform inline-block">
          <img
            className="w-14 h-14 drop-shadow-lg"
            src={whatsappLogo}
            alt="Contact us on WhatsApp"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
