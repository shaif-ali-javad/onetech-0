import React, { useRef } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";
import {
  CustomerServiceIcon,
  BackupIcon,
  SecurityIcon,
  ServerIcon,
  LaptopIcon,
  NetworkIcon,
} from "../../icons/Icons";

const services = [
  {
    icon: CustomerServiceIcon,
    title: "Complete IT Support",
    description: "We take a proactive approach to IT support and focus on what matters most to our customers.",
    featured: true,
  },
  {
    icon: BackupIcon,
    title: "Data Backup",
    description: "We can back up all your data for an affordable monthly fee, and our service includes a free tech support line.",
  },
  {
    icon: SecurityIcon,
    title: "Cyber Security",
    description: "Invest in a cyber security plan today to ensure your company has a solid defense against the latest threats.",
  },
  {
    icon: ServerIcon,
    title: "Server Management",
    description: "Our team of IT professionals can manage servers and infrastructure, including Virtualization, NAS, Exchange, and SQL.",
  },
  {
    icon: LaptopIcon,
    title: "Desktop/PC Support",
    description: "Comprehensive and trusted system and computer support platform delivers top-quality PC and laptop help 24/7.",
  },
  {
    icon: NetworkIcon,
    title: "Networking",
    description: "We manage your enterprise-level network with certified staff and tools that help keep monitoring for any possible issues.",
  },
];

function ServiceBox({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className={`box ${service.featured ? "color" : ""}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 } 
      }}
      data-index={String(index + 1).padStart(2, "0")}
    >
      {/* Decorative elements */}
      <div className="box-glow" />
      <div className="box-pattern" />
      
      {/* Icon */}
      <motion.div 
        className="icon-container"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon />
      </motion.div>

      {/* Content */}
      <h4>{service.title}</h4>
      <p className={service.featured ? "p-main" : "p"}>
        {service.description}
      </p>

      {/* Button */}
      <div className="more">
        <motion.a 
          href="/" 
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}

function Services1() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="services1">
      {/* Background decorations */}
      <div className="services-bg">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-lines" />
      </div>

      <div className="container mx-auto">
        <div className="holder">
          {/* Header */}
          <motion.div 
            ref={headerRef}
            className="heading"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="tag-line">SERVICES WE OFFER</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Solid IT Solutions That Make You <span>Worry-Free</span>
            </motion.h1>
            <motion.div 
              className="heading-underline"
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          {/* Cards Grid */}
          <div className="container0">
            {services.map((service, index) => (
              <ServiceBox key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services1;