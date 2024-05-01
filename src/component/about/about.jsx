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
          <Box className="heading" textAlign={'center'} sx={{mt:30}}>
            <Typography variant="h1" sx={{mt:20, ml:10, mr:10, fontSize:60, fontWeight:600, borderBottom:3, borderRadius:10}}component={'span'}> 
              About Us
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
            <Typography variant="h2" sx={{ fontSize:30, fontWeight:600 }} gutterBottom> 
            Empowering Business Efficiency
            with Technology Expertise
            </Typography>
              <Typography variant="body1">
              Onetech legally registered under “Technology One Genereral Trading LLC” is an innovative IT solutions company in UAE with a dedicated team led by a group of intelligent professionals who are 
              technically proficient and innovatively distinctive. We offer comprehensive IT support in UAE to help 
              our clients achieve their company goals effectively and efficiently. Onetech, manages IT infrastructure, builds and maintains upgrades and support, provides cloud-based services, offers strategic IT 
              consulting, plans disaster recovery, and manages IT projects.
              <br />
              <br />
              With a proven track record, Onetech brings forth a wide range of high end products and services that 
              address all the present and future technology needs for your business. We combine products that 
              lead the industry along with System Integrator Services from our accredited and experienced design 
              and delivery team to offer Customers a seamless experience. Headquartered in Dubai, we are a 
              100% local company with a global outlook.
              <br />
              <br />
              For the past 6+ years, we have been delivering highly personalized IT services & Solutions in UAE that 
              streamline technology operations for our clients.
              <br />
              <br />
              Our founders have been part of the IT sector for decades and possess a deep understanding of IT, 
              Networking, and Security System. Today, we are a growing team of passionate technologists with a 
              single motto of serving our customers better.
              </Typography>
            </Box>
          </Box>
          </Box>
        </section>
        <Box className="mv" sx={{m:10}}>
          <Box className="mission" sx={{mb:5}}>
            <Typography variant="h2" gutterBottom sx={{fontWeight: 400, borderBottom:3, borderRadius:4}}component={'span'}>Our Vision</Typography>
            <Typography variant="body1" sx={{mt:2}}>
              To be the company of choice in the provision of quality information communication 
              technology services and timely solutions. Our Vision is to help our customers to get the 
              most out of the available technologies and solutions enabling them to achieve their 
              desired business goals
            </Typography>
          </Box>
          <Box className="vision">
            <Typography variant="h2" gutterBottom sx={{fontWeight: 400, borderBottom:3, borderRadius:4  }}component={'span'}>Our Mission</Typography>
            <Typography variant="body1" sx={{mt:2}}>
              To be the IT Company of choice in by providing quality service and timely solutions 
              through professional delivery of services . Our mission is to offer complete and innovative IT solutions and services to the clients in order for them to achieve their business 
              objectives, become their trusted partner and to keep up with a continuing evolving 
              world
            </Typography>
          </Box>
        </Box>
      </>
    );
  }
}

export default About;
