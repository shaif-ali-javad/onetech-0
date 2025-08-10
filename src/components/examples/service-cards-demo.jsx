import React from "react";
import { ServiceCard } from "../ui/service-card";
import { ServiceGrid } from "../ui/service-grid";

// Mock icons for demonstration
const ServerIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const ShieldIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const CloudIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
    />
  </svg>
);

const ComputerIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ServiceCardsDemo = () => {
  // Sample service data
  const services = [
    {
      id: 1,
      title: "IT Infrastructure",
      description:
        "Complete IT infrastructure solutions including servers, networking, and data center management for businesses of all sizes.",
      icon: ServerIcon,
      category: "Infrastructure",
      features: [
        "Server Installation & Configuration",
        "Network Design & Implementation",
        "Data Center Management",
        "Infrastructure Monitoring",
        "Disaster Recovery Planning",
      ],
      href: "/services/it-infrastructure",
      expandable: true,
      variant: "elevated",
    },
    {
      id: 2,
      title: "ELV & Security Systems",
      description:
        "Advanced security solutions including CCTV, access control, fire alarm systems, and integrated security management.",
      icon: ShieldIcon,
      category: "Security",
      features: [
        "CCTV Surveillance Systems",
        "Access Control Solutions",
        "Fire Alarm Systems",
        "Intrusion Detection",
        "Security System Integration",
      ],
      href: "/services/security",
      expandable: true,
      variant: "outlined",
    },
    {
      id: 3,
      title: "Cloud Services",
      description:
        "Comprehensive cloud solutions including migration, management, and optimization for modern business needs.",
      icon: CloudIcon,
      category: "Cloud",
      features: [
        "Cloud Migration Services",
        "Multi-Cloud Management",
        "Cloud Security & Compliance",
        "Backup & Disaster Recovery",
        "Cost Optimization",
      ],
      href: "/services/cloud",
      expandable: true,
      variant: "glass",
    },
    {
      id: 4,
      title: "Computer Services",
      description:
        "Professional computer repair, maintenance, and support services for desktops, laptops, and workstations.",
      icon: ComputerIcon,
      category: "Support",
      features: [
        "Hardware Repair & Replacement",
        "Software Installation & Updates",
        "Performance Optimization",
        "Data Recovery Services",
        "Preventive Maintenance",
      ],
      href: "/services/computer",
      expandable: true,
      variant: "filled",
    },
    {
      id: 5,
      title: "IT AMC Services",
      description:
        "Annual Maintenance Contracts providing comprehensive IT support with 24/7 monitoring and rapid response.",
      icon: ServerIcon,
      category: "Support",
      features: [
        "24/7 System Monitoring",
        "Preventive Maintenance",
        "Remote & On-site Support",
        "Regular Health Checks",
        "Priority Response Times",
      ],
      href: "/services/amc",
      expandable: true,
      variant: "elevated",
    },
    {
      id: 6,
      title: "Network Security",
      description:
        "Advanced network security solutions to protect your business from cyber threats and ensure data integrity.",
      icon: ShieldIcon,
      category: "Security",
      features: [
        "Firewall Configuration",
        "Intrusion Prevention Systems",
        "Network Monitoring",
        "Security Audits",
        "Threat Detection & Response",
      ],
      href: "/services/network-security",
      expandable: true,
      variant: "outlined",
    },
  ];

  const categories = ["Infrastructure", "Security", "Cloud", "Support"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to transform and optimize your
          business operations
        </p>
      </div>

      {/* Service Grid with Filters */}
      <ServiceGrid
        services={services}
        columns={3}
        showFilters={true}
        categories={categories}
        className="mb-16"
      />

      {/* Individual Card Examples */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Card Variants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Elevated Card */}
          <ServiceCard
            title="Elevated Card"
            description="Default elevated card with shadow and hover effects"
            icon={ServerIcon}
            variant="elevated"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            category="Example"
          />

          {/* Outlined Card */}
          <ServiceCard
            title="Outlined Card"
            description="Clean outlined card with border styling"
            icon={ShieldIcon}
            variant="outlined"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            category="Example"
          />

          {/* Filled Card */}
          <ServiceCard
            title="Filled Card"
            description="Subtle filled background card variant"
            icon={CloudIcon}
            variant="filled"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            category="Example"
          />

          {/* Glass Card */}
          <ServiceCard
            title="Glass Card"
            description="Modern glass morphism card effect"
            icon={ComputerIcon}
            variant="glass"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            category="Example"
          />
        </div>
      </div>

      {/* Expandable Card Example */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Expandable Card Example
        </h2>

        <div className="max-w-md mx-auto">
          <ServiceCard
            title="Expandable Service Card"
            description="Click to expand and see additional features and information"
            icon={ServerIcon}
            variant="elevated"
            expandable={true}
            features={[
              "Progressive disclosure pattern",
              "Smooth expand/collapse animation",
              "Enhanced user experience",
              "Better information hierarchy",
              "Reduced cognitive load",
            ]}
            category="Interactive"
            href="/services/example"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsDemo;
