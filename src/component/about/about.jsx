import React, { Component } from "react";
// import "./about.css";

// mui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import img from './image/About-Us-400x324.png'

export class About extends Component {
  render() {
    return (
      <>
        <section className="course">
          <Box className="heading" textAlign={'center'}>
            <Typography variant="h1" sx={{mt:20, ml:10, mr:10, fontSize:30}}>
              Onetech Technologies is a Systems Integrator focused on advancing
              human experience through IT enabled Innovation
            </Typography>
          </Box>
          <Box sx={{ width: 1 }}>
          <Box display={'grid'} className="text" 
            gridTemplateColumns={{ xs: "1fr", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={2} sx={{mb:10, mt:10, p:10}}>
            <Box className="text-enter col-12 col-lg-5 mb-5 img-abt">
              <img className="img" src={img} alt="" />
            </Box>
            <Box className="col-12 col-lg-7" sx={{mt:6}}>
              <p>
                With a proven track record spanning over two decades, Onetech
                Technologies brings forth a wide range of high end products and
                services that address all the present and future technology
                needs for your business. Our key areas of expertise include
                Office Automation Solutions (MFP’s, Scanners & Printers),
                Currency Handling Solutions, CCTV & Security Solutions,
                Audio-Visual Solutions, Telecom & PABX, IT Infrastructure,
                Cloud, ERP, IoT, Blockchain, Mobility, E-commerce, Enterprise
                Content Management, Business Process Management, Robotic Process
                Automation and Business Analytics & Intelligence Solutions. We
                combine products that lead the industry along with System
                Integrator Services from our accredited and experienced design
                and delivery team to offer Customers a seamless experience.
                Headquartered in Dubai, we are a 100% local company with a
                global outlook.
              </p>
            </Box>
          </Box>
          </Box>
        </section>
        <Box className="mv" sx={{m:10}}>
          <Box className="mission" sx={{mb:5}}>
            <Typography variant="h2" gutterBottom>Mission</Typography>
            <Typography variant="body1">
              Our mission is to offer complete and innovative IT solutions and
              services to the clients in order for them to achieve their
              business objectives, become their trusted partner and to keep up
              with a continuing evolving world.
            </Typography>
          </Box>
          <div className="vision">
            <Typography variant="h2" gutterBottom>Vision</Typography>
            <Typography variant="body1">
              Our Vision is to help our customers to get the most out of the
              available technologies and solutions enabling them to achieve
              their desired business goals. Our Services Technology Services Web
              Services Design & Implement Premises Wiring (SCN) Design &
              Implement Active Network Unified Communication & Collaboration
              Wireless LAN, PTP & Microwave Solution CCTV & IP Networked
              Security System Network Security
            </Typography>
          </div>
        </Box>
      </>
    );
  }
}

export default About;
