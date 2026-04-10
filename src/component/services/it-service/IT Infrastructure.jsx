import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoSlider from "../../home/partners/carousel/logo-carousel";
import Navbar from "../../home/navbar/header";
import Footer from "../../home/footer/footer";

import {
  ChevronDown,
  ChevronUp,
  Check,
  Shield,
  Clock,
  Headphones,
  Server,
  Database,
  Monitor,
  Wifi,
  Lock,
  ArrowRight,
  ArrowDown,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle,
  Settings,
  HardDrive,
  Network,
  Cpu,
  Cloud,
  Globe,
  Layers,
  Activity,
  Eye,
  Plus,
  Minus,
} from "lucide-react";

export const ITInfrastructurePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero Stats
  const heroStats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "50+", label: "Expert Engineers" },
  ];

  // Main Services
  const mainServices = [
    {
      id: 1,
      icon: Server,
      title: "Server Solutions",
      shortDesc: "Enterprise-grade server infrastructure",
      description:
        "Deploy, manage, and optimize your server infrastructure with our comprehensive solutions including physical servers, virtual environments, and hybrid setups.",
      features: [
        "Server deployment & configuration",
        "Virtualization (VMware, Hyper-V)",
        "Performance optimization",
        "24/7 monitoring & support",
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      icon: Network,
      title: "Network Infrastructure",
      shortDesc: "Robust network design & management",
      description:
        "Build a reliable network backbone with our expert design, implementation, and management services covering LAN, WAN, and wireless solutions.",
      features: [
        "Network design & architecture",
        "LAN/WAN implementation",
        "Wireless solutions",
        "Network security",
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      icon: Cloud,
      title: "Cloud Services",
      shortDesc: "Seamless cloud integration",
      description:
        "Leverage the power of cloud computing with our migration, management, and optimization services for AWS, Azure, and Google Cloud platforms.",
      features: [
        "Cloud migration",
        "Hybrid cloud setup",
        "Cloud optimization",
        "Multi-cloud management",
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      icon: Shield,
      title: "Security Solutions",
      shortDesc: "Comprehensive cybersecurity",
      description:
        "Protect your business with enterprise-grade security solutions including firewalls, threat detection, and security audits.",
      features: [
        "Firewall management",
        "Threat detection & response",
        "Security audits",
        "Compliance management",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Infrastructure Components
  const infraComponents = [
    { icon: Server, title: "Servers", desc: "Physical & Virtual" },
    { icon: Database, title: "Storage", desc: "SAN, NAS, Cloud" },
    { icon: Network, title: "Networking", desc: "LAN, WAN, WiFi" },
    { icon: Shield, title: "Security", desc: "Firewall, VPN" },
    { icon: Cloud, title: "Cloud", desc: "Public, Private, Hybrid" },
    { icon: Monitor, title: "Endpoints", desc: "Desktops, Laptops" },
    { icon: Cpu, title: "Data Center", desc: "Design & Management" },
    { icon: Activity, title: "Monitoring", desc: "24/7 NOC Services" },
  ];

  // Benefits
  const benefits = [
    {
      title: "Reduce Costs",
      description: "Optimize your IT spending with efficient infrastructure solutions that maximize ROI.",
      stat: "40%",
      statLabel: "Cost Reduction",
    },
    {
      title: "Increase Uptime",
      description: "Ensure business continuity with highly available and redundant systems.",
      stat: "99.9%",
      statLabel: "Uptime SLA",
    },
    {
      title: "Enhance Security",
      description: "Protect your data and systems with enterprise-grade security measures.",
      stat: "100%",
      statLabel: "Compliance",
    },
    {
      title: "Scale Easily",
      description: "Grow your infrastructure seamlessly as your business expands.",
      stat: "3x",
      statLabel: "Faster Scaling",
    },
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your current infrastructure, understand your business goals, and identify improvement areas.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our architects create a comprehensive infrastructure blueprint tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "Expert engineers deploy and configure your new infrastructure with minimal disruption.",
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization ensure peak performance and reliability.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Onetech transformed our IT infrastructure completely. We've seen a 50% improvement in system performance.",
      name: "Ahmed Al Rashid",
      role: "CTO, Dubai Tech Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote: "Their expertise in network infrastructure helped us achieve 99.99% uptime. Exceptional service!",
      name: "Sarah Johnson",
      role: "IT Director, Global Logistics",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote: "The cloud migration was seamless. Onetech's team managed everything professionally.",
      name: "Michael Chen",
      role: "CEO, FinTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What are IT Infrastructure Solutions?",
      answer: "IT Infrastructure Solutions encompass the hardware, software, network resources, and services required for the existence, operation, and management of an enterprise IT environment. This includes servers, data centers, network equipment, storage systems, and cloud services.",
    },
    {
      question: "How often should IT infrastructure be upgraded?",
      answer: "Most businesses should evaluate their IT infrastructure every 2-3 years. Signs that indicate an upgrade is needed include frequent downtime, slow performance, security vulnerabilities, and inability to support new applications or increased user demands.",
    },
    {
      question: "What is the difference between on-premise and cloud infrastructure?",
      answer: "On-premise infrastructure is hosted locally within your organization, giving you complete control but requiring significant capital investment. Cloud infrastructure is hosted by third-party providers, offering flexibility, scalability, and reduced upfront costs.",
    },
    {
      question: "How do you ensure data security in IT infrastructure?",
      answer: "We implement multiple security layers including firewalls, encryption, access controls, regular security audits, intrusion detection systems, and compliance with industry standards like ISO 27001 and GDPR.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with your existing systems. We conduct thorough assessments to ensure compatibility and create migration plans that minimize disruption to your operations.",
    },
    {
      question: "What support do you provide after implementation?",
      answer: "We offer comprehensive post-implementation support including 24/7 monitoring, regular maintenance, performance optimization, security updates, and dedicated technical support through multiple channels.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Navbar />

      {/* ==================== HERO SECTION - FULL IMAGE OVERLAY ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="IT Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/85 to-gray-900/95"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center py-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium uppercase tracking-widest">
                Enterprise IT Solutions
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              IT Infrastructure
              <span className="block text-blue-300">Solutions in UAE</span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Complete IT infrastructure design, implementation, and 24/7 support
              to power your business growth and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/50 text-white px-8 py-4 font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
                <ArrowDown className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
              {heroStats.map((stat, index) => (
                <div key={index} className="py-8 text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-blue-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LOGO SLIDER ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <p className="text-gray-400 text-sm uppercase tracking-widest whitespace-nowrap">
              Trusted by Leading Enterprises
            </p>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <LogoSlider />
        </div>
      </section>

      {/* ==================== INFRASTRUCTURE COMPONENTS - GRID ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Infrastructure Ecosystem
            </h2>
            <p className="text-lg text-gray-600">
              We provide end-to-end solutions for every component of your IT
              infrastructure, ensuring seamless integration and optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infraComponents.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 p-8 text-center hover:bg-blue-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Number */}
                <span className="absolute -bottom-4 -right-4 text-8xl font-bold text-gray-100 group-hover:text-blue-800 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <item.icon className="w-12 h-12 text-blue-900 group-hover:text-white mx-auto mb-4 transition-colors duration-500" />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-blue-200 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAIN SERVICES - INTERACTIVE ==================== */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Core Infrastructure Services
            </h2>
            <p className="text-lg text-gray-400">
              Comprehensive solutions designed to build, optimize, and secure your
              IT infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Service Tabs */}
            <div className="space-y-4">
              {mainServices.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`cursor-pointer p-6 transition-all duration-300 ${
                    activeService === index
                      ? "bg-blue-900 border-l-4 border-white"
                      : "bg-gray-800 border-l-4 border-transparent hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <service.icon
                      className={`w-8 h-8 flex-shrink-0 ${
                        activeService === index ? "text-white" : "text-blue-400"
                      }`}
                    />
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          activeService === index ? "text-white" : "text-gray-100"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          activeService === index
                            ? "text-blue-200"
                            : "text-gray-400"
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 ml-auto flex-shrink-0 transition-transform ${
                        activeService === index
                          ? "text-white translate-x-2"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Service Details */}
            <div className="bg-white p-8 lg:p-10 sticky top-24">
              <div className="aspect-video mb-6 overflow-hidden">
                <img
                  src={mainServices[activeService].image}
                  alt={mainServices[activeService].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {mainServices[activeService].title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {mainServices[activeService].description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {mainServices[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 font-semibold hover:bg-blue-800 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS - BENTO GRID ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Main Content */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <span className="text-blue-900 font-semibold uppercase tracking-widest text-sm">
                  Why Choose Us
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                  Benefits of Our Infrastructure Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Transform your IT operations with solutions that deliver
                  measurable business value.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-4 transition-all"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right - Benefit Cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 p-8 hover:bg-blue-900 transition-all duration-500"
                >
                  <div className="text-5xl font-bold text-blue-900 group-hover:text-white mb-4 transition-colors">
                    {benefit.stat}
                  </div>
                  <p className="text-sm text-blue-900 group-hover:text-blue-200 uppercase tracking-wider mb-4 transition-colors">
                    {benefit.statLabel}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS - VERTICAL TIMELINE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-900 font-semibold uppercase tracking-widest text-sm">
              Our Approach
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures successful infrastructure projects
              every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                {/* Left - Number */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-900 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-4"></div>
                  )}
                </div>

                {/* Right - Content */}
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA - SPLIT IMAGE ==================== */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative min-h-[400px] lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          {/* Right - Content */}
          <div className="bg-blue-900 p-12 lg:p-20 flex items-center">
            <div>
              <span className="text-blue-300 font-semibold uppercase tracking-widest text-sm">
                Ready to Transform?
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                Let's Build Your IT Infrastructure Together
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Schedule a free consultation with our infrastructure experts and
                discover how we can optimize your IT operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+971000000000"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +971 00 000 0000
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Mail className="w-6 h-6 text-blue-300 mb-2" />
                  <p className="text-blue-200 text-sm">Email Us</p>
                  <p className="text-white font-semibold">info@onetech.com</p>
                </div>
                <div>
                  <MessageCircle className="w-6 h-6 text-blue-300 mb-2" />
                  <p className="text-blue-200 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold">Chat Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS - CARDS GRID ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-900 font-semibold uppercase tracking-widest text-sm">
              Client Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 relative group hover:bg-blue-900 transition-all duration-500"
              >
                {/* Quote Mark */}
                <div className="text-6xl font-serif text-blue-900/20 group-hover:text-white/20 absolute top-4 right-6 transition-colors">
                  "
                </div>

                <div className="relative">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 group-hover:text-blue-100 mb-8 leading-relaxed transition-colors">
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-white transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 group-hover:text-blue-200 transition-colors">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ - NUMBERED CARDS ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-900 font-semibold uppercase tracking-widest text-sm">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to frequently asked questions about our IT
              infrastructure services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center gap-6 p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl font-bold text-blue-900 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-gray-900 flex-1 text-lg">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 bg-blue-900 flex items-center justify-center flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      {openFaq === index ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pl-20 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to Optimize Your IT Infrastructure?
              </h3>
              <p className="text-blue-200">
                Get a free assessment from our infrastructure experts today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+971000000000"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors"
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

export default ITInfrastructurePage; 