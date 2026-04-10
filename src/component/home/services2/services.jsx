import React, { useRef } from "react";
import "./services.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const pricingPlans = [
  {
    name: "Break & Fix",
    tagline: "On-Demand",
    description: "Perfect for businesses that need occasional IT support without long-term commitments.",
    priceLabel: "ONE TIME COST",
    tier: "basic",
    features: [
      "Remote Support",
      "4 Hours Response Time",
      "Preventive Maintenance",
      "On-site Support",
    ],
  },
  {
    name: "Essential Care",
    tagline: "Most Popular",
    description: "Comprehensive IT management for growing businesses that need reliable, always-on support.",
    priceLabel: "PER DEVICE / MONTH",
    tier: "pro",
    popular: true,
    features: [
      "Unlimited Remote Support",
      "2 Hours Response Time",
      "Preventive Maintenance",
      "Periodic Checkup",
      "24/7 Remote Monitoring",
      "Managed Data Backup",
      "Cloud Backup",
      "Advanced Cyber Security",
      "Act as IT Department",
    ],
  },
  {
    name: "Complete Care",
    tagline: "Enterprise",
    description: "Full-scale IT infrastructure management with dedicated resources and priority support.",
    priceLabel: "PER DEVICE / MONTH",
    tier: "enterprise",
    features: [
      "Everything in Essential",
      "1 Hour Response Time",
      "Unlimited On-site Support",
      "Dedicated Account Manager",
      "Priority Support Queue",
      "Custom SLA Agreement",
      "Quarterly Business Reviews",
    ],
  },
];

// const metrics = [
//   { value: "500+", label: "Active Clients", icon: "users" },
//   { value: "99.9%", label: "Uptime SLA", icon: "chart" },
//   { value: "<15min", label: "Avg Response", icon: "clock" },
//   { value: "24/7", label: "Support", icon: "headset" },
// ];

// Icons
const Icons = {
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

// Floating Shapes
function FloatingShapes() {
  return (
    <div className="floating-shapes">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`shape shape-${i + 1}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

// Metric Card
function MetricCard({ metric, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="metric-card"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.5, type: "spring" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="metric-icon">{Icons[metric.icon]}</div>
      <div className="metric-content">
        <span className="metric-value">{metric.value}</span>
        <span className="metric-label">{metric.label}</span>
      </div>
    </motion.div>
  );
}

// Feature Item
function FeatureItem({ feature, index, isInView }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 + index * 0.05 }}
    >
      <span className="feature-check">{Icons.check}</span>
      <span>{feature}</span>
    </motion.li>
  );
}

// Pricing Card
function PricingCard({ plan, index, size = "normal" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      className={`pricing-card ${plan.tier} ${size}`}
      style={{ y: size === "featured" ? y : 0 }}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
    >
      {/* Card Glow */}
      <div className="card-glow" />

      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          className="popular-badge"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <span className="badge-dot" />
          {plan.tagline}
        </motion.div>
      )}

      {/* Card Header */}
      <div className="card-header">
        <motion.span
          className="card-tagline"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {plan.tagline}
        </motion.span>
        <h3>{plan.name}</h3>
        <p className="card-description">{plan.description}</p>
        <div className="price-label">{plan.priceLabel}</div>
      </div>

      {/* Divider */}
      <div className="card-divider">
        <motion.div
          className="divider-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </div>

      {/* Features */}
      <ul className="card-features">
        {plan.features.map((feature, idx) => (
          <FeatureItem
            key={idx}
            feature={feature}
            index={idx}
            isInView={isInView}
          />
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        className="card-cta"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Get Started</span>
        <span className="cta-arrow">{Icons.arrow}</span>
      </motion.button>

      <p className="card-terms">*Terms & Conditions Apply</p>

      {/* Decorative Elements */}
      <div className="card-pattern" />
    </motion.div>
  );
}

// Main Component
export default function Services2() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="pricing-section" ref={containerRef}>
      {/* Background */}
      <motion.div className="section-bg" style={{ y: bgY }}>
        <div className="bg-gradient-1" />
        <div className="bg-gradient-2" />
        <div className="bg-grid" />
        <FloatingShapes />
      </motion.div>

      <div className="section-container">
        {/* Header */}
        <motion.header
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          <motion.div
            className="header-label"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <span className="label-icon">{Icons.shield}</span>
            <span>IT Support Packages</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Enterprise-Grade IT Solutions
            <span className="title-highlight"> Tailored to Your Business</span>
          </motion.h1>

          <motion.p
            className="header-description"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Choose a plan that scales with your needs. All packages include
            our commitment to security, reliability, and exceptional support.
          </motion.p>
        </motion.header>

        {/* Metrics */}
        {/* <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div> */}

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* Left Column - Basic */}
          <div className="bento-item bento-left">
            <PricingCard plan={pricingPlans[0]} index={0} size="normal" />
          </div>

          {/* Center Column - Featured */}
          <div className="bento-item bento-center">
            <PricingCard plan={pricingPlans[1]} index={1} size="featured" />
          </div>

          {/* Right Column - Enterprise */}
          <div className="bento-item bento-right">
            <PricingCard plan={pricingPlans[2]} index={2} size="normal" />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="bottom-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="cta-conten">
            <h3>Not sure which plan is right for you?</h3>
            <p>
              Our IT specialists will analyze your needs and recommend the
              perfect solution for your business.
            </p>
          </div>
          <motion.a
            href="/contact"
            className="cta-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Schedule Free Consultation</span>
            <span className="btn-arrow">{Icons.arrow}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}