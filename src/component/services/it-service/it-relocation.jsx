import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoSlider from "../../home/partners/carousel/logo-carousel";
import Navbar from "../../home/navbar/header";
import Footer from "../../home/footer/footer";

import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  Check,
  Shield,
  Clock,
  Headphones,
  Server,
  Database,
  Monitor,
  Truck,
  Wifi,
  Lock,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle,
  MapPin,
  Package,
  Settings,
  FileCheck,
  HardDrive,
  Network,
  Building,
  Calendar,
  Target,
  Layers,
  Box,
  RefreshCw,
} from "lucide-react";

export const ITRelocationPage = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  // Services Data
  const services = [
    {
      icon: FileCheck,
      title: "Pre-Move Assessment",
      description:
        "Comprehensive evaluation of your current IT setup and new location requirements.",
      features: ["Site survey", "Network mapping", "Risk assessment", "Timeline planning"],
    },
    {
      icon: Database,
      title: "Data Protection",
      description:
        "Complete backup and security measures to ensure zero data loss during transition.",
      features: ["Full backup", "Encryption", "Disaster recovery", "Data verification"],
    },
    {
      icon: Truck,
      title: "Secure Transport",
      description:
        "Professional packing and insured transportation of all IT equipment.",
      features: ["Expert packing", "GPS tracking", "Insurance coverage", "Climate control"],
    },
    {
      icon: Settings,
      title: "Installation & Setup",
      description:
        "Complete installation and configuration at your new location.",
      features: ["Network setup", "Server config", "Workstation setup", "Testing"],
    },
  ];

  // Timeline Steps
  const timelineSteps = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "Week 1-2",
      tasks: [
        "Initial consultation",
        "Site assessment",
        "Inventory audit",
        "Create relocation plan",
      ],
    },
    {
      phase: "Phase 2",
      title: "Preparation",
      duration: "Week 2-3",
      tasks: [
        "Data backup",
        "Label equipment",
        "Prepare new site",
        "Test network infrastructure",
      ],
    },
    {
      phase: "Phase 3",
      title: "Execution",
      duration: "Week 3-4",
      tasks: [
        "Disconnect systems",
        "Pack equipment",
        "Transport securely",
        "Unpack at new site",
      ],
    },
    {
      phase: "Phase 4",
      title: "Go Live",
      duration: "Week 4",
      tasks: [
        "Install equipment",
        "Configure networks",
        "System testing",
        "User training",
      ],
    },
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      number: "01",
      title: "Zero Downtime Approach",
      description:
        "We plan moves during off-hours and weekends to ensure your business never stops.",
    },
    {
      number: "02",
      title: "Certified IT Experts",
      description:
        "Our engineers are certified professionals with years of relocation experience.",
    },
    {
      number: "03",
      title: "End-to-End Service",
      description:
        "From planning to post-move support, we handle every aspect of your IT move.",
    },
    {
      number: "04",
      title: "Guaranteed Data Safety",
      description:
        "Multiple backup layers and encryption ensure your data is 100% protected.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "The relocation was flawless. We were operational in our new office within hours, not days. Incredible team!",
      name: "Ahmed Hassan",
      role: "CTO, Dubai Tech Solutions",
      company: "Dubai Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "They moved our entire data center without a single issue. Professional, efficient, and reliable.",
      name: "Sarah Al Maktoum",
      role: "IT Director, Emirates Group",
      company: "Emirates Group",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "Best IT relocation service in Dubai. They understood our needs and delivered beyond expectations.",
      name: "Michael Chen",
      role: "Operations Manager, Global Corp",
      company: "Global Corp",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What is included in your IT relocation service?",
      answer:
        "Our service includes pre-move assessment, data backup, equipment packing, secure transportation, installation at new location, network configuration, system testing, and post-move support.",
    },
    {
      question: "How do you ensure data safety during the move?",
      answer:
        "We create multiple encrypted backups before the move, use secure transportation methods, and verify all data integrity after installation. Our zero data loss guarantee protects your business.",
    },
    {
      question: "Can you work outside business hours?",
      answer:
        "Yes, we specialize in after-hours and weekend relocations to minimize disruption to your business operations. Most moves are completed overnight or during weekends.",
    },
    {
      question: "How long does a typical IT relocation take?",
      answer:
        "Small offices (under 20 workstations) typically take 1-2 days. Medium offices take 2-3 days. Large enterprises may require a phased approach over 1-2 weeks.",
    },
    {
      question: "Do you provide post-move support?",
      answer:
        "Yes, we provide 30 days of dedicated post-move support including troubleshooting, optimization, and any adjustments needed to ensure smooth operations.",
    },
  ];

  // Stats
  const stats = [
    { value: "500+", label: "Relocations" },
    { value: "0", label: "Data Loss" },
    { value: "24/7", label: "Support" },
    { value: "99%", label: "On-Time" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      {/* ==================== HERO SECTION - SPLIT DESIGN ==================== */}
      <section className="min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24 lg:py-0 bg-white order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-blue-900"></div>
              <span className="text-blue-900 font-semibold uppercase tracking-wider text-sm">
                IT Relocation Dubai
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Move Your
              <span className="block text-blue-900">IT Infrastructure</span>
              Seamlessly
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Expert IT office relocation services in Dubai. We ensure zero
              downtime, complete data protection, and a smooth transition to
              your new location.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mb-10 py-6 border-y border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold text-blue-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 font-semibold hover:bg-blue-800 transition-all duration-300 group"
              >
                Get Free Quote
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="tel:+971000000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative bg-blue-900 order-1 lg:order-2 min-h-[400px] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="IT Relocation"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-950/90"></div>

          {/* Floating Elements */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4 max-w-md w-full">
              {[
                { icon: Shield, label: "100% Secure" },
                { icon: Clock, label: "24/7 Support" },
                { icon: Truck, label: "Insured Transport" },
                { icon: Check, label: "Zero Data Loss" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white p-4 flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-bold">Ready to Move?</p>
                <p className="text-gray-500 text-sm">
                  Free consultation available
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-900" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LOGO SLIDER ==================== */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-widest">
            Trusted by Industry Leaders
          </p>
          <LogoSlider />
        </div>
      </section>

      {/* ==================== SERVICES - TAB DESIGN ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-blue-900"></div>
              <span className="text-blue-900 font-semibold uppercase tracking-wider text-sm">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete IT Relocation Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From initial planning to final setup, we provide end-to-end IT
              relocation services tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tab Navigation */}
            <div className="lg:col-span-4">
              <div className="space-y-2 sticky top-24">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-4 ${
                      activeTab === index
                        ? "bg-blue-900 text-white border-l-blue-600"
                        : "bg-gray-50 text-gray-900 border-l-transparent hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <service.icon
                        className={`w-6 h-6 ${
                          activeTab === index ? "text-white" : "text-blue-900"
                        }`}
                      />
                      <span className="font-semibold">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-8">
              <div className="bg-gray-50 p-8 lg:p-12 h-full">
                <div className="flex items-center gap-4 mb-6">
                  {React.createElement(services[activeTab].icon, {
                    className: "w-12 h-12 text-blue-900",
                  })}
                  <h3 className="text-3xl font-bold text-gray-900">
                    {services[activeTab].title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeTab].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {services[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-4"
                    >
                      <div className="w-8 h-8 bg-blue-900 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-blue-900 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Learn More About This Service
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE SECTION ==================== */}
      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-blue-300"></div>
              <span className="text-blue-300 font-semibold uppercase tracking-wider text-sm">
                Our Process
              </span>
              <div className="h-px w-12 bg-blue-300"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Relocation Timeline
            </h2>
            <p className="text-lg text-blue-200">
              A structured approach to ensure your IT move is completed on time
              and within budget.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-blue-700"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute top-12 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full items-center justify-center z-10">
                    <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
                  </div>

                  {/* Card */}
                  <div className="bg-blue-800/50 backdrop-blur-sm border border-blue-700 p-6 lg:mt-24 hover:bg-blue-800 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">
                        {step.phase}
                      </span>
                      <span className="text-blue-400 text-sm">{step.duration}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-center gap-2 text-blue-200 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US - ALTERNATING ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-blue-900"></div>
              <span className="text-blue-900 font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <div className="h-px w-12 bg-blue-900"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="space-y-0">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`p-8 lg:p-16 flex items-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white lg:order-2"
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
                    <span className="text-8xl font-bold text-blue-900/10">
                      {item.number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 -mt-8 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`bg-blue-900 p-8 lg:p-16 flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-24 h-24 border-4 border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {item.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION - MINIMAL ==================== */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Relocate Your Office IT?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Get a free consultation and detailed quote for your IT
                relocation project. Our experts are ready to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+971000000000"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +971 00 000 0000
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email Us", value: "info@onetech.com" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat Now" },
                { icon: MapPin, label: "Location", value: "Dubai, UAE" },
                { icon: Clock, label: "Available", value: "24/7 Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300 group cursor-pointer"
                >
                  <item.icon className="w-6 h-6 text-white/50 mb-4 group-hover:text-white transition-colors" />
                  <p className="text-white/50 text-sm mb-1">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS - SLIDER ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-blue-900"></div>
                <span className="text-blue-900 font-semibold uppercase tracking-wider text-sm">
                  Testimonials
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 mb-8">
                Don't just take our word for it. Here's what our clients have to
                say about our IT relocation services.
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center hover:border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center hover:border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-gray-500 ml-4">
                  {currentTestimonial + 1} / {testimonials.length}
                </span>
              </div>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 lg:p-12 shadow-xl relative">
                {/* Quote Mark */}
                <div className="absolute -top-6 left-12 w-12 h-12 bg-blue-900 flex items-center justify-center">
                  <span className="text-white text-3xl font-serif">"</span>
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  <blockquote className="text-2xl lg:text-3xl text-gray-900 font-medium leading-relaxed mb-8">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-500">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ - SIDE BY SIDE ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-12 bg-blue-900"></div>
                  <span className="text-blue-900 font-semibold uppercase tracking-wider text-sm">
                    FAQ
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Common Questions
                </h2>
                <p className="text-gray-600 mb-8">
                  Find answers to frequently asked questions about our IT
                  relocation services.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Still have questions? Contact us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Side - Accordions */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border transition-all duration-300 ${
                      openIndex === index
                        ? "border-blue-900 bg-blue-900"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span
                        className={`font-semibold text-lg pr-4 ${
                          openIndex === index ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 ${
                            openIndex === index ? "text-white" : "text-gray-600"
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div
                        className={`px-6 pb-6 leading-relaxed ${
                          openIndex === index
                            ? "text-blue-100"
                            : "text-gray-600"
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA - FULL WIDTH ==================== */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Start Your IT Relocation Today
              </h3>
              <p className="text-blue-200">
                Free consultation • Zero obligation • Expert advice
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+971000000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP BUTTON ==================== */}
      <a
        href="https://wa.me/971504153141"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <Footer />
    </>
  );
};

export default ITRelocationPage;

