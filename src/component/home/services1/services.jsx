import React, { Component } from "react";
// import "./services.css";

// mui
import Box from "@mui/material/Box";
import { Button, Paper, Typography } from "@mui/material";
import {Backup, DesktopMac, Hub, Recommend, Security, Storage} from '@mui/icons-material';
export class Services1 extends Component {
  render() {
    return (
      <Box textAlign='center' className="services1" sx={{mt:20}}>
        <Box className="container">
          <Box className="holder">
            <Box className="heading">
              <Typography variant="h1" gutterBottom sx={{fontSize:30}}>SERVICES WE OFFER</Typography>
              <Typography variant="body1" sx={{fontSize:50, fontWeight:'bold'}}>Solid IT Solutions That Make You Worry-Free</Typography>
            </Box>
            <Box sx={{width:1}}>
              <Box display={'grid'} gridTemplateColumns={{xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)"}} gap={2} sx={{mb:10, mt:10, p:10}}>
                <Box className="box color">
                <Paper sx={{p:5}}>
                <Recommend sx={{fontSize:50}}/>
                <Typography variant="h3" gutterBottom>Complete IT Support</Typography>
                <Typography variant="body1" className="p-main">
                  We take a proactive approach to IT support and focus on what
                  matters most to our customers.
                </Typography>
                <Box className="more">
                  <Button variant='contained'>Learn more</Button>
                </Box>
                </Paper>
              </Box>
              <Box className="box">
                <Paper sx={{p:5}}>
                <Backup sx={{fontSize:50}}/>
                <Typography variant="h3" gutterBottom>Data Backup</Typography>
                <Typography variant="body1" className="p">
                  We can back up all your data for an affordable monthly fee,
                  and our service includes a free tech support line
                </Typography>
                <Box className="more">
                  <Button variant='contained'>Learn more</Button>
                </Box>
                </Paper>
              </Box>
              <Box className="box">
                 <Paper sx={{p:5}}>
                <Security sx={{fontSize:50}}/>
                <Typography variant="h3" gutterBottom>Cyber Security</Typography>
                <Typography variant="body1" className="p">
                  Invest in a cyber security plan today to ensure your company
                  has a solid defense against the latest threats
                </Typography>
                <Box className="more">
                  <Button variant='contained'>Learn more</Button>
                </Box>
                </Paper>
              </Box>
              <Box className="box">
                 <Paper sx={{p:5}}>
                <Storage sx={{fontSize:50}}/>
                <Typography variant="h3" gutterBottom>Server Management</Typography>
                <Typography variant="body1" className="p">
                  Our team of IT professionals can manage servers and servers
                  infrastructure, including Virtualization, NAS , Exchange and
                  SQL
                </Typography>
                <Box className="more">
                   <Button variant='contained'>Learn more</Button>
                </Box>
                </Paper>
              </Box>
              <Box className="box">
                 <Paper sx={{p:5}}>
                <DesktopMac sx={{fontSize:50}}/>
                <Typography variant="h3" gutterBottom>Desktop/PC Support</Typography>
                <Typography variant="body1" className="p">
                  Comprehensive and trusted web-based system and computer
                  support platform delivers, top quality PC and laptop help 24/7
                </Typography>
                <Box className="more">
                  <Button variant='contained'>Learn more</Button>
                </Box>
                </Paper>
              </Box>
              <Box className="box">
                 <Paper sx={{p:5}}>
                <Hub sx={{fontSize:50}}/>
                <Typography variant="h3" gutterBottom>Networking</Typography>
                <Typography variant="body1" className="p">
                  We manage your enterprise-level network with our certified
                  staffs and tools that helps keep monitoring for any possible
                </Typography>
                <Box className="more">
                  <Button variant='contained'>Learn more</Button>
                </Box>
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
    );
  }
}

export default Services1;
