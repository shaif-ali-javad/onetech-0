import React from "react";
import "./framer-m.css";
import { motion, useTransform, useScroll } from "framer-motion";
import IMG_TXT from "./home/Services/img-component/img-txt.jsx";
import img0 from "./home/Services/image/parelall-scroll/0(1).jpg";
import img1 from "./home/Services/image/parelall-scroll/1(1).jpg";
import img2 from "./home/Services/image/parelall-scroll/2(1).jpg";
import img3 from "./home/Services/image/parelall-scroll/3(1).jpg";
import img4 from "./home/Services/image/parelall-scroll/4.jpg";
import img5 from "./home/Services/image/parelall-scroll/5(1).jpg";
import img6 from "./home/Services/image/parelall-scroll/6(1).jpg";
import img7 from "./home/Services/image/parelall-scroll/7(1).jpg";
import img8 from "./home/Services/image/parelall-scroll/8(1).jpg";
import img9 from "./home/Services/image/parelall-scroll/9(1).jpg";
import img10 from "./home/Services/image/parelall-scroll/10(1).jpg";
import img11 from "./home/Services/image/parelall-scroll/11(1).png";
import img12 from "./home/Services/image/parelall-scroll/12(1).jpg";

function ServicesPage() {
  const content = [
    {
      img: img0,
      title: "Office Automation",
      description: "Maximize office productivity and streamline workflow with an efficient fleet of office equipment including Colour & B/W Multifunctional Printers."
    },
    {
      img: img1,
      title: "Software Solutions",
      description: "Capture, store, and manage your documents digitally to improve accessibility and collaboration while reducing paper clutter."
    },
    {
      img: img2,
      title: "AV Solutions",
      description: "Comprehensive IT solutions including network setup, cybersecurity, and data backup to keep your business running smoothly."
    },
    {
      img: img3,
      title: "Structured Cabling",
      description: "Custom website development services to help you establish a strong online presence and engage with your customers effectively."
    },
    {
      img: img4,
      title: "ELV Systems",
      description: "Scalable cloud computing services to store, manage, and process your data, enabling remote access and collaboration."
    },
    {
      img: img5,
      title: "Backup and Disaster Recovery Management",
      description: "Reliable technical support to assist you with any hardware or software issues, ensuring minimal downtime for your business."
    },
    {
      img: img6,
      title: "Home Automation",
      description: "Creative graphic design services for branding, marketing materials, and more to help your business stand out."
    },
    {
      img: img7,
      title: "Cloud Services",
      description: "Effective digital marketing strategies including SEO, social media marketing, and email campaigns to grow your online presence."
    },
    {
      img: img8,
      title: "Maintenance & Support",
      description: "Professional training and workshops to upskill your workforce and enhance their productivity and efficiency."
    },
    {
      img: img9,
      title: "AI Based Solutions",
      description: "Expert consulting services to help you identify opportunities for improvement and implement effective solutions."
    },
    {
      img: img10,
      title: "Data Centre Solutions",
      description: "Outsource your non-core activities to us and focus on your main business while we handle the rest."
    },
    {
      img: img11,
      title: "Microsoft Azure / Office 365",
      description: "Regular maintenance and repair services for your office equipment to ensure they are always in top working condition."
    },
    {
      img: img12,
      title: "Web development",
      description: "Advanced security solutions including surveillance cameras and alarm systems to protect your business premises."
    }
  ];

  return (
    <>
    
    <div className="App">
      <h1 className="box-h">
        <IMG_TXT />
      </h1>
      <div className="line text-center p-11 text-black">
            <h1 className="text-3xl font-medium mb-3">Value Added Range of ICT Solutions</h1>
            <p className="">
              Providing you best-in-class Communication & Technology Solutions
              to meet
              <br /> today’s business development challenges
            </p>
          </div>
      <div className="services-container">
        {content.map((item, index) => {
          const ref = React.useRef(null);
          const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"]
          });
          
          const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

          return (
            <div key={index} className="service-item" ref={ref}>
              <div className="boxes">
                <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                  <motion.div style={{ y }}>
                    <img 
                      src={item.img}
                      alt={item.title}
                      className="service-image"
                    />
                  </motion.div>
                </div>
                <div className="text-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default ServicesPage;