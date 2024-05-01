import React, { Component } from "react";
import "./services.css";

// mui
import {Box, Typography} from '@mui/material'

export class Services extends Component {
  render() {
    return (
      <Box>
        <Box className="line" textAlign={'center'} sx={{mt:20}}>
          <Typography variant="h1" sx={{mt:20, fontSize:90, fontWeight: 600, borderBottom: 2, borderRadius: 10}} textAlign='center' gutterBottom component={'span'}>Our Services</Typography>
        </Box>
        <Box className="text" sx={{m:10}}>
          <Box className="box cabling p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30, fontWeight: "bold"}} gutterBottom>Fortifying Your IT Infrastructure with Tailored Solutions</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
            y providing IT Services and Solutions in UAE we create value across the IT spectrum through deploying innovation, structuring transformation, and unlocking growth for your company. Our IT Services 
            are designed to help businesses stay ahead of the curve by keeping their IT systems up-to-date and 
            running smoothly. With our services, your company can focus on what it does best, while we take 
            care of the IT infrastructure.
            <br />
            <br />
            Our Services Includes; Managed IT Support Services, Web & On-Prem Software Design Services, 
            Server Infrastructure Solutions, Design & Implement Premises Wiring (SCN), Design & Implement 
            Active Network System, Unified Communication & Collaboration, Wireless LAN, PTP Microwave Solution, CCTV & IP Networked Security System, Network Security.
            </Typography>
          </Box>
          <Box className="box elv p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30, fontWeight: "bold"}} gutterBottom>01.TRUST</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
            We know first-hand the power of 
            IT systems, and the importance to 
            keep them working reliably. We 
            give our customers peace of mind 
            as trusted IT partner for support, 
            and enable transformation 
            through our design and delivery 
            of projects
            </Typography>
          </Box>
          <Box className="box backup p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30, fontWeight: "bold"}} gutterBottom>02. TRANSFORMATION</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
            We enable organisations to 
            benefit from the technologies 
            and opportunities of the connected world. By increasing competitiveness, lowering operational 
            costs, reducing risks and increasing revenue, we deliver measurable results to the bottom line
            </Typography>
          </Box>
          <Box className="box home p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30, fontWeight: "bold"}} gutterBottom>03. EXPERTISE</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
            We enable organisations to 
            benefit from the technologies 
            and opportunities of the connected world. By increasing competitiveness, lowering operational 
            costs, reducing risks and increasing revenue, we deliver measurable results to the bottom line
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Services;
