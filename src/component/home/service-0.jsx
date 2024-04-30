import { useEffect, useRef } from "react";
import "./service-0.css";

import Img_txt from "./home/Services/img-component/img-txt.jsx";

import Img0 from "./home/Services/img-component/img0.jsx";
import Img1 from "./home/Services/img-component/img1.jsx";
import Img2 from "./home/Services/img-component/img2.jsx";
import Img3 from "./home/Services/img-component/img3.jsx";
import Img4 from "./home/Services/img-component/img4.jsx";
import Img5 from "./home/Services/img-component/img5.jsx";
import Img6 from "./home/Services/img-component/img6.jsx";
import Img7 from "./home/Services/img-component/img7.jsx";
import Img8 from "./home/Services/img-component/img8.jsx";
import Img9 from "./home/Services/img-component/img9.jsx";
import Img10 from "./home/Services/img-component/img10.jsx";
import Img11 from "./home/Services/img-component/img11.jsx";
import Img12 from "./home/Services/img-component/img12.jsx";

// animation
import { motion } from "framer-motion";

// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function ServicesPage() {

    return (
    <>
      <Box className="App" textAlign='center'>
        <motion.h1 className="box-h">
          <Img_txt />
        </motion.h1>
        <Box className="grid-container">
          <Box className="line" sx={{mb:10}}>
            <Typography variant="h1" gutterBottom className="text-red-500">Value Added Range of ICT Solutions</Typography>
            <Typography variant="body1" className="">
              Providing you best-in-class Communication & Technology Solutions
              to meet
              <br /> today’s business development challenges
            </Typography>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img0 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Office Automation</Typography>
              <Typography variant="body1" className="">
                Maximize office productivity and streamline workflow with an
                efficient fleet of office equipment including Colour & B/W
                Multifunctional Printers.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img1 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Software Solutions</Typography>
              <Typography variant="body1">
                Enabling Digital Transformation of Organizations for enhanced
                Customer Experience & smarter Business Processes leading to
                tangible business outcomes.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img2 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>AV Solutions</Typography>
              <Typography variant="body1">
                Your System Integrator & Technology Partner offers rich
                experience from Pre-Project Consulting & Designing, to complete
                Project Management.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img3 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Structured Cabling</Typography>
              <Typography variant="body1">
                Maximize office productivity and streamline workflow with an
                efficient fleet of office equipment including Colour & B/W
                Multifunctional Printers.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img4 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>ELV Systems</Typography>
              <Typography variant="body1">
                ELV or Extra Low Voltage systems is a huge industry in itself
                Onetech is proud of the fact that we have carried out multiple
                projects related to ELV Systems successfully..
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img5 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Backup and Disaster Recovery Management</Typography>
              <Typography variant="body1">
                When a Corporate has a running system Disaster Management is an
                essential part of it, which also includes Data Backup and
                Recovery. Onetech has a team of highly skilled professionals
                that has enabled multiple corporates for implementing Data
                Recovery and Disaster Management Systems.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img6 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Home Automation</Typography>
              <Typography variant="body1">
                As the world is continuously progressing and working on making
                more and more things automated Home Automation is a huge
                concept. Onetech has received a lot of appreciation when it
                comes to the implementation of Home Automation Systems from the
                beginning right till the handover. Our services include Air
                Conditioning Control, Lighting Control, Curtain Control, Gate
                Barrier Control, Audio/Visual Control and Satellite Connection.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img7 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Cloud Services</Typography>
              <Typography variant="body1">
                Cloud Services is something that is continuously growing every
                day. Onetech has partnered with a lot of multinational firms
                like Microsoft and CISCO. We take pride in our specialist team
                of Microsoft Azure and Microsoft Office 365 whether it is a one
                time sale or subscription-based services or SAAS ( Software as a
                Subscription ) Onetech has all the solutions for you.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img8 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Maintenance & Support</Typography>
              <Typography variant="body1">
                Onetech has a competitive and qualified team of technicians to
                support all your IT needs. Whether it is Annual Maintenance
                Contract on-call basis, short project, HR Augmentation, Monthly
                Contract or Support Visits. We are only a call away, give us a
                call and let us help you. We’ll make sure that you don’t have to
                worry about IT issues as we are available daily, weekly and
                monthly basis.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img9 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>AI Based Solutions</Typography>
              <Typography variant="body1">
                AI stands for Artificial Intelligence it is the basis of almost
                everything in this world. Onetech has been pr oviding AI
                services that has a huge portfolio of successful AI
                Implementation projects.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img10 />
            </Box>
            <Box className="Data-Centre-Solutions" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Data Centre Solutions</Typography>
              <Typography variant="body1">
                Data Center Solution is a combined form of software, hardware,
                electrical, data and voice solutions. Whether it is right from
                the start i.e. commissioning of data center or upgrading to new
                technology Onetech has proved itself to be the best in business
                when it comes to Data Centers. Onetech has a team of
                professional CDCDP ( Certified Data Center Professional ) and we
                can provide Data Center services right from designing and
                commissioning.
              </Typography>
            </Box>
          </Box>
          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img11 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Microsoft Azure / Office 365</Typography>
              <Typography variant="body1">
                Microsoft 365 and Azure are software programs that are helping
                in making the work and implementation easier and faster. Onetech
                has worked with these software programs and their
                implementations and finding solutions for multiple clients.
                These software programs are helping in making the processes
                easier
              </Typography>
            </Box>
          </Box>

          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img12 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Web development</Typography>
              <Typography variant="body1">
                Web development services help create all types of web-based
                software and ensure great experience for web users. Different
                types of web solutions may seem similar from the outside but we
                approach them differently and know what factors are winning in
                each case.
              </Typography>
            </Box>
          </Box>

          <Box className="grid">
            <Box
              className="boxes"
            >
              <Img12 />
            </Box>
            <Box className="office-automation" sx={{p:10}}>
              <Typography variant="h3" className="" gutterBottom>Software development</Typography>
              <Typography variant="body1">
                Web development services help create all types of web-based
                software and ensure great experience for web users. Different
                types of web solutions may seem similar from the outside but we
                approach them differently and know what factors are winning in
                each case.
              </Typography>
              <NavLink className='link' to='/software'>Learn more</NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default ServicesPage;
