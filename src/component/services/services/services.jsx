import React, { Component } from "react";
import "./services.css";

// mui
import {Box, Typography} from '@mui/material'

export class Services extends Component {
  render() {
    return (
      <Box>
        <Box className="line">
          <Typography variant="h1" sx={{mt:20, fontSize:90}} textAlign='center' gutterBottom>Our Services</Typography>
          <Typography variant="body1" textAlign='center' sx={{mb:5, fontSize:20}}>
            Our team loves to provide wonderful and efficient services to
            clients
          </Typography>
        </Box>
        <Box className="text" sx={{m:10}}>
          <Box className="box cabling p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Structured Cabling</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              Maximize office productivity and streamline workflow with an
              efficient fleet of office equipment including Colour & B/W
              Multifunctional Printers.
            </Typography>
          </Box>
          <Box className="box elv p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>ELV Systems</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              ELV or Extra Low Voltage systems is a huge industry in itself
              OneTech is proud of the fact that we have carried out multiple
              projects related to ELV Systems successfully..
            </Typography>
          </Box>
          <Box className="box backup p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Backup and Disaster Recovery Management</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              When a Corporate has a running system Disaster Management is an
              essential part of it, which also includes Data Backup and
              Recovery. OneTech has a team of highly skilled professionals that
              has enabled multiple corporates for implementing Data Recovery and
              Disaster Management Systems.
            </Typography>
          </Box>
          <Box className="box home p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Home Automation</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              As the world is continuously progressing and working on making
              more and more things automated Home Automation is a huge concept.
              OneTech has received a lot of appreciation when it comes to the
              implementation of Home Automation Systems from the beginning right
              till the handover. Our services include Air Conditioning Control,
              Lighting Control, Curtain Control, Gate Barrier Control,
              Audio/Visual Control and Satellite Connection.
            </Typography>
          </Box>
          <Box className="box cloud p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Cloud Services</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              Cloud Services is something that is continuously growing every
              day. OneTech has partnered with a lot of multinational firms like
              Microsoft and CISCO. We take pride in our specialist team of
              Microsoft Azure and Microsoft Office 365 whether it is a one time
              sale or subscription-based services or SAAS ( Software as a
              Subscription ) OneTech has all the solutions for you.
            </Typography>
          </Box>
          <Box className="box maintenance p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Maintenance & Support</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              OneTech has a competitive and qualified team of technicians to
              support all your IT needs. Whether it is Annual Maintenance
              Contract on-call basis, short project, HR Augmentation, Monthly
              Contract or Support Visits. We are only a call away, give us a
              call and let us help you. We’ll make sure that you don’t have to
              worry about IT issues as we are available daily, weekly and
              monthly basis.
            </Typography>
          </Box>
          <Box className="box ai p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>AI Based Solutions</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              AI stands for Artificial Intelligence it is the basis of almost
              everything in this world. OneTech has been providing AI services
              that has a huge portfolio of successful AI Implementation
              projects.
            </Typography>
          </Box>
          <Box className="box data p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Data Centre Solutions</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              Data Center Solution is a combined form of software, hardware,
              electrical, data and voice solutions. Whether it is right from the
              start i.e. commissioning of data center or upgrading to new
              technology OneTech has proved itself to be the best in business
              when it comes to Data Centers. OneTech has a team of professional
              CDCDP ( Certified Data Center Professional ) and we can provide
              Data Center services right from designing and commissioning.
            </Typography>
          </Box>
          <Box className="box microsoft p-5" sx={{mb:5}}>
            <Typography variant="h2" sx={{fontSize: 30}} gutterBottom>Microsoft Azure / Office 365</Typography>
            <Box className='service-border'/>
            <Typography variant="body1">
              Microsoft 365 and Azure are software programs that are helping in
              making the work and implementation easier and faster. OneTech has
              worked with these software programs and their implementations and
              finding solutions for multiple clients. These software programs
              are helping in making the processes easier
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Services;
