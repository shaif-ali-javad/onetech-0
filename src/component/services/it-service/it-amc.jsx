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
  Settings,
  Wifi,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle,
  Play,
} from "lucide-react";

export const IThomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Stats Data
  const stats = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "99.9%", label: "Uptime Guaranteed", icon: Zap },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  // Services Data
  const services = [
    {
      icon: Shield,
      title: "Comprehensive AMC",
      description: "Full coverage including hardware, software, and network maintenance with priority support.",
    },
    {
      icon: Clock,
      title: "24/7 Critical Support",
      description: "Round-the-clock on-site and remote support for mission-critical systems.",
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Complete server monitoring, maintenance, and optimization services.",
    },
    {
      icon: Database,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with disaster recovery planning.",
    },
    {
      icon: Lock,
      title: "Cyber Security",
      description: "Advanced threat protection, firewall management, and security audits.",
    },
    {
      icon: Wifi,
      title: "Network Management",
      description: "Complete network infrastructure monitoring and optimization.",
    },
  ];

  // Process Steps
  const processSteps = [
    {
      step: "01",
      title: "IT Assessment",
      description: "We analyze your current IT infrastructure and identify areas for improvement.",
    },
    {
      step: "02",
      title: "Custom Plan",
      description: "We create a tailored AMC plan that fits your business needs and budget.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team deploys solutions and sets up monitoring systems.",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "24/7 proactive monitoring and support to keep your systems running.",
    },
  ];

  // Features List
  const features = [
    "Unlimited Remote Support",
    "Dedicated IT Engineer",
    "Monthly Health Reports",
    "Priority Response Time",
    "Hardware Troubleshooting",
    "Software Installation",
    "Network Optimization",
    "Security Updates",
    "Email Configuration",
    "Cloud Management",
    "Backup Monitoring",
    "Vendor Coordination",
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Onetech has transformed our IT operations. Their proactive approach has reduced our downtime by 90%. The team is always available and incredibly responsive.",
      name: "Ahmed Al Rashid",
      role: "CEO, Al Rama International FZCO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      quote: "The best IT AMC provider in Dubai. Their team understands our business needs and provides solutions that actually work. Highly recommended!",
      name: "Sarah Johnson",
      role: "Operations Director, Arabyads",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and always on time. Onetech's IT AMC service has been crucial for our business continuity. We couldn't be happier.",
      name: "Michael Chen",
      role: "IT Manager, Tech Solutions LLC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What is an IT AMC?",
      answer: "An IT AMC (Annual Maintenance Contract) is a comprehensive service agreement that ensures regular maintenance, support, and troubleshooting of your IT infrastructure. It helps businesses operate smoothly without technical disruptions by providing proactive monitoring and quick issue resolution.",
    },
    {
      question: "Why do I need an IT AMC in Dubai?",
      answer: "Dubai's fast-paced business environment demands robust IT systems. An IT AMC provides proactive support, minimizes downtime, ensures optimal system performance, and helps businesses stay competitive. It's a cost-effective way to manage your IT needs without maintaining a full in-house IT team.",
    },
    {
      question: "What services are included in your IT AMC?",
      answer: "Our IT AMC services include: 24/7 remote and on-site support, hardware and software maintenance, network management, data backup and recovery, security updates and monitoring, server management, email configuration, cloud services support, and monthly health reports.",
    },
    {
      question: "How quickly do you respond to support requests?",
      answer: "We offer tiered response times based on priority: Critical issues (system down) - within 1 hour, High priority - within 4 hours, Medium priority - within 8 hours, Low priority - within 24 hours. Our 24/7 support ensures you're never left waiting.",
    },
    {
      question: "Can I customize my IT AMC package?",
      answer: "Absolutely! We understand that every business has unique needs. Our IT AMC packages are fully customizable. We'll work with you to create a plan that covers exactly what you need, whether it's specific equipment, extended hours, or specialized services.",
    },
    {
      question: "Do you provide a dedicated IT engineer?",
      answer: "Yes, depending on your AMC package, we can provide a dedicated IT engineer who will be familiar with your systems and be your primary point of contact. This ensures faster resolution times and a deeper understanding of your IT environment.",
    },
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Starter",
      description: "For small businesses",
      price: "999",
      features: [
        "Up to 10 devices",
        "Remote support only",
        "Email support",
        "8-hour response time",
        "Monthly reports",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Most popular choice",
      price: "2,499",
      features: [
        "Up to 30 devices",
        "Remote & on-site support",
        "24/7 phone support",
        "4-hour response time",
        "Weekly reports",
        "Dedicated engineer",
        "Network monitoring",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Unlimited devices",
        "24/7 on-site support",
        "1-hour response time",
        "Real-time monitoring",
        "Dedicated team",
        "Custom SLA",
        "Priority escalation",
      ],
      highlighted: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-blue-100 text-sm font-medium tracking-wide">
                  24/7 IT Support Available
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                IT AMC Services
                <span className="block text-blue-300">in Dubai</span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
                Keep your IT systems running smoothly with our comprehensive Annual Maintenance Contracts. 
                Expert support, proactive monitoring, and rapid response times.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+971000000000"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">SIRA Approved</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Microsoft Partner</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Card */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">System Status</p>
                      <p className="text-green-400 text-sm">All Systems Operational</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Server Uptime", value: "99.9%" },
                      { label: "Tickets Resolved Today", value: "47" },
                      { label: "Active Clients", value: "500+" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-blue-200">{item.label}</span>
                        <span className="text-white font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">24/7</p>
                      <p className="text-gray-500 text-xs">Support</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 bg-blue-900 rounded-full border-2 border-white" />
                      ))}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold">50+ Engineers</p>
                      <p className="text-gray-500 text-xs">Ready to help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 group-hover:bg-blue-900 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.number}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LOGO SLIDER ==================== */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
            Trusted by 500+ businesses across UAE
          </p>
          <LogoSlider />
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="IT Support Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-2xl font-bold">Expert IT Support</p>
                  <p className="text-blue-200">When you need it most</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-blue-900 text-white rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-blue-200 text-sm">Years Experience</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <span className="inline-block text-blue-900 font-semibold tracking-wider uppercase text-sm mb-4">
                About Our IT AMC Services
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted IT Partner in Dubai
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our IT Annual Maintenance Contract (AMC) is designed to provide you with comprehensive 
                IT support and maintenance. We provide cost-effective and scalable IT AMC in Dubai 
                that covers everything your business needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "24/7 Expert Support",
                  "Proactive Monitoring",
                  "Fast Response Time",
                  "Cost-Effective Plans",
                  "Certified Engineers",
                  "Custom Solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-900" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-900 font-semibold tracking-wider uppercase text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive IT AMC Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We offer a complete range of IT maintenance and support services 
              to keep your business running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-300 font-semibold tracking-wider uppercase text-sm mb-4">
              How It Works
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-blue-200">
              Getting started with our IT AMC services is easy. Here's how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-blue-700" />

            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-32 h-32 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-blue-700">
                  <span className="text-4xl font-bold text-blue-300">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-block text-blue-900 font-semibold tracking-wider uppercase text-sm mb-4">
                What's Included
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Everything You Need for Seamless IT Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our IT AMC packages are designed to cover all aspects of your IT infrastructure, 
                ensuring you have complete peace of mind.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 py-2">
                    <div className="w-5 h-5 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="IT Infrastructure"
                  className="rounded-2xl w-full"
                />
              </div>

              {/* Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-800 transition-colors group">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-900 font-semibold tracking-wider uppercase text-sm mb-4">
              Pricing Plans
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Flexible IT AMC Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose a plan that fits your business needs. All plans include our core support services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-blue-900 text-white shadow-2xl scale-105 z-10"
                    : "bg-white text-gray-900 shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={plan.highlighted ? "text-blue-200" : "text-gray-500"}>
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-bold">Custom</span>
                    ) : (
                      <>
                        <span className="text-lg">AED</span>
                        <span className="text-5xl font-bold">{plan.price}</span>
                        <span className={plan.highlighted ? "text-blue-200" : "text-gray-500"}>/month</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-white/20" : "bg-blue-100"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-blue-900"}`} />
                      </div>
                      <span className={plan.highlighted ? "text-blue-100" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-white text-blue-900 hover:bg-blue-50"
                      : "bg-blue-900 text-white hover:bg-blue-800"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-900 font-semibold tracking-wider uppercase text-sm mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-50 rounded-3xl p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-12 text-blue-900 text-8xl font-serif opacity-20">"</div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  {testimonials[currentTestimonial].quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "w-8 bg-blue-900"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our IT AMC services can 
              transform your business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+971000000000"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +971 00 000 0000
              </a>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:info@onetech.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                info@onetech.com
              </a>
              <a href="https://wa.me/971000000000" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-blue-900 font-semibold tracking-wider uppercase text-sm mb-4">
                FAQ
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our IT AMC services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                    openIndex === index ? "shadow-lg" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openIndex === index ? "bg-blue-900" : "bg-gray-100"
                    }`}>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                Contact our support team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHATSAPP BUTTON ==================== */}
      <a
        href="https://wa.me/971504153141"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <Footer />
    </>
  );
};

export default IThomePage;