import React, { useRef } from "react";
import "./partner.css";
import { motion, useInView } from "framer-motion";
import LogoSlider from "./carousel/logo-carousel";
import whatsappLogo from "../../../assets/image/WhatsApp-logo.png";

// Simple Icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "50+", label: "Global Partners" },
  { value: "24/7", label: "Support Available" },
];

const solutions = [
  "Office Automation & MFPs",
  "Currency Handling Solutions",
  "ELV & AV Systems",
  "Enterprise Software (ERP)",
  "Document Management",
  "HR Management Solutions",
  "Digital Signature Solutions",
  "Location-aware Solutions",
];

export default function Partners() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });

  return (
    <section className="partners">
      {/* Header */}
      <div className="partners-header" ref={headerRef}>
        <div className="header-container">
          <motion.span
            className="header-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Strategic Partnerships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our Global <span>Partners</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Over two decades, Onetech Technologies maintains a strategic IT
            presence in UAE, forging long-standing partnerships with key global players.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="header-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Logo Slider */}
      <div className="partners-logos">
        <div className="logos-container">
          <LogoSlider />
        </div>
      </div>

      {/* Content Section */}
      <div className="partners-content" ref={contentRef}>
        <div className="content-container">
          {/* About */}
          <motion.div
            className="content-about"
            initial={{ opacity: 0, y: 40 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>UAE's Leading ICT Solutions Company</h2>
            <p>
              Onetech Technologies is UAE's leading ICT Solutions Company offering
              Office Automation products ranging from Printers & MFPs, Currency
              Handling Solutions, ELV, AV, Telecom, IT, and Enterprise Software
              Applications like ERP, Document & Business Process Management
              Solutions, HR Management Solutions, School Management Solutions,
              Digital Signature Solutions and Location-aware Solutions.
            </p>
            <p>
              We have exclusive partnerships with international brands to ensure
              the best IT Support Services in quality and technology with offices
              in Dubai and RAK to provide maximum reach for all our Customers.
            </p>

            <div className="about-cta">
              <motion.a
                href="/about"
                className="btn-learn"
                whileHover={{ x: 5 }}
              >
                Learn More About Us
                <ArrowIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            className="content-solutions"
            initial={{ opacity: 0, y: 40 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Our Solutions</h3>
            <ul className="solutions-list">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="partners-cta">
        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to Partner with Us?</h3>
            <p>
              Let's discuss how we can help transform your business with our
              cutting-edge IT solutions.
            </p>

            <div className="cta-buttons">
              <motion.a
                href="/contact"
                className="btn-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <ArrowIcon />
              </motion.a>

              <motion.a
                href="https://wa.me/971504153141"
                className="btn-whatsapp"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={whatsappLogo} alt="WhatsApp" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}