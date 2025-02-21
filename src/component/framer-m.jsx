import { useRef } from "react";
import "./framer-m.css";

import { motion, useTransform, useScroll } from "framer-motion";

import IMG_TXT from "./home/Services/img-component/img-txt.jsx";

import img0 from "./home/Services/image/parelall-scroll/0(1).jpg";
import img1 from "./home/Services/image/parelall-scroll/1(1).jpg"
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

  return (
    <>
      <div className="App">
        <motion.h1 className="box-h">
          <IMG_TXT />
        </motion.h1>
        <div className="grid-container">
          <div className="line text-center p-8 text-gray-900">
            <h1 className="text-3xl font-medium mb-3">Value Added Range of ICT Solutions</h1>
            <p className="">
              Providing you best-in-class Communication & Technology Solutions
              to meet
              <br /> today’s business development challenges
            </p>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // style={{ y: backgroundY }}
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img0 /> */}
                <img src={img0} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
              {/* <Img1/> */}
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Office Automation</h3> 
              <p>
                Maximize office productivity and streamline workflow with an
                efficient fleet of office equipment including Colour & B/W
                Multifunctional Printers.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img1 /> */}
              <img src={img1} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Software Solutions</h3>
              <p>
                Enabling Digital Transformation of Organizations for enhanced
                Customer Experience & smarter Business Processes leading to
                tangible business outcomes.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img2 /> */}
              <img src={img2} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">AV Solutions</h3>
              <p>
                Your System Integrator & Technology Partner offers rich
                experience from Pre-Project Consulting & Designing, to complete
                Project Management.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img3 /> */}
              <img src={img3} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Structured Cabling</h3>
              <p>
                Maximize office productivity and streamline workflow with an
                efficient fleet of office equipment including Colour & B/W
                Multifunctional Printers.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img4 /> */}
              <img src={img4} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">ELV Systems</h3>
              <p>
                ELV or Extra Low Voltage systems is a huge industry in itself
                Onetech is proud of the fact that we have carried out multiple
                projects related to ELV Systems successfully..
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img5 /> */}
              <img src={img5} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Backup and Disaster Recovery Management</h3>
              <p>
                When a Corporate has a running system Disaster Management is an
                essential part of it, which also includes Data Backup and
                Recovery. Onetech has a team of highly skilled professionals
                that has enabled multiple corporates for implementing Data
                Recovery and Disaster Management Systems.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img6 /> */}
              <img src={img6} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Home Automation</h3>
              <p>
                As the world is continuously progressing and working on making
                more and more things automated Home Automation is a huge
                concept. Onetech has received a lot of appreciation when it
                comes to the implementation of Home Automation Systems from the
                beginning right till the handover. Our services include Air
                Conditioning Control, Lighting Control, Curtain Control, Gate
                Barrier Control, Audio/Visual Control and Satellite Connection.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img7 /> */}
              <img src={img7} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Cloud Services</h3>
              <p>
                Cloud Services is something that is continuously growing every
                day. Onetech has partnered with a lot of multinational firms
                like Microsoft and CISCO. We take pride in our specialist team
                of Microsoft Azure and Microsoft Office 365 whether it is a one
                time sale or subscription-based services or SAAS ( Software as a
                Subscription ) Onetech has all the solutions for you.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img8 /> */}
              <img src={img8} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Maintenance & Support</h3>
              <p>
                Onetech has a competitive and qualified team of technicians to
                support all your IT needs. Whether it is Annual Maintenance
                Contract on-call basis, short project, HR Augmentation, Monthly
                Contract or Support Visits. We are only a call away, give us a
                call and let us help you. We’ll make sure that you don’t have to
                worry about IT issues as we are available daily, weekly and
                monthly basis.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img9 /> */}
              <img src={img9} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">AI Based Solutions</h3>
              <p>
                AI stands for Artificial Intelligence it is the basis of almost
                everything in this world. Onetech has been pr oviding AI
                services that has a huge portfolio of successful AI
                Implementation projects.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: -200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img10 /> */}
              <img src={img10} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="Data-Centre-Solutions">
              <h3 className="mb-3 text-2xl">Data Centre Solutions</h3>
              <p>
                Data Center Solution is a combined form of software, hardware,
                electrical, data and voice solutions. Whether it is right from
                the start i.e. commissioning of data center or upgrading to new
                technology Onetech has proved itself to be the best in business
                when it comes to Data Centers. Onetech has a team of
                professional CDCDP ( Certified Data Center Professional ) and we
                can provide Data Center services right from designing and
                commissioning.
              </p>
            </div>
          </div>
          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img11 /> */}
              <img src={img11} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Microsoft Azure / Office 365</h3>
              <p>
                Microsoft 365 and Azure are software programs that are helping
                in making the work and implementation easier and faster. Onetech
                has worked with these software programs and their
                implementations and finding solutions for multiple clients.
                These software programs are helping in making the processes
                easier
              </p>
            </div>
          </div>

          <div className="grid">
            <div
              className="boxes"
              // initial={{ y: 200 }}
              // viewport={{ once: true }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 1 }}
            >
              {/* <Img12 /> */}
              <img src={img12} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-82 rounded-lg bg-gray-200 object-cover"/>
            </div>
            <div className="office-automation">
              <h3 className="mb-3 text-2xl">Web development</h3>
              <p>
                Web development services help create all types of web-based
                software and ensure great experience for web users. Different
                types of web solutions may seem similar from the outside but we
                approach them differently and know what factors are winning in
                each case.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServicesPage;




const Img1 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ y: x }} className="flex">
          <img src="https://shaif-ali-javad.github.io/image-storage/image/parelall-scroll/0(1).jpg" alt="" width={700} />
        </motion.div>
      </div>
    </section>
  );
};