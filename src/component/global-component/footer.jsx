import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <Box className="style0" sx={{pt:10}}>
        <footer className="text-lg-left">
          <section className="justify-content-between p-4 style1">
            <Box textAlign={'center'} className="text-center me-5">
              <span>Get connected with us on social networks</span>
            </Box>
            <Box className="">
              <Box className="row text-center mt-5">
                <p href="" className="col-2 text-white me-0">
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p href="" className="col-2 text-white me-0">
                  <i className="fab fa-twitter"></i>
                </p>
                <p href="" className="col-2 text-white me-0">
                  <i className="fab fa-google"></i>
                </p>
                <p href="" className="col-2 text-white me-0">
                  <i className="fab fa-instagram"></i>
                </p>
                <p href="" className="col-2 text-white me-0">
                  <i className="fab fa-linkedin"></i>
                </p>
                <p href="" className="col-2 text-white me-0">
                  <i className="fab fa-github"></i>
                </p>
              </Box>
            </Box>
          </section>

          <Box className="mx-auto mt-5 container" textAlign={'left'} sx={{pt:10, pl:10, pr:10}}>
            <Typography variant="h4" gutterBottom className="text-uppercase fw-bold">Services</Typography>
            <Grid2 container className="row">
              <Grid2 xs={4}>

                <p href="#!" className="service-link">
                  Office Automation
                </p>
                <p href="#!" className="service-link">
                  Software Solutions
                </p>
                <p href="#!" className="service-link">
                  AV Solutions
                </p>
              
                <p href="#!" className="service-link">
                  Structured Cabling
                </p>
              </Grid2>
              <Grid2 xs={4}>
                <p href="#!" className="service-link">
                  ELV Systems
                </p>
                <p href="#!" className="service-link">
                  Home Automation
                </p>

                <p href="#!" className="service-link">
                  Cloud Services
                </p>
                <p href="#!" className="service-link">
                  Maintenance & Support
                </p>
              </Grid2>
              <Grid2 xs={4}>
                <p href="#!" className="service-link">
                  AI Based Solutions
                </p>
                <p href="#!" className="service-link">
                  Data Centre Solutions
                </p>
                <p href="#!" className="service-link">
                  Microsoft Azure / Office 365
                </p>
                <p href="#!" className="service-link">
                  Backup and Disaster Recovery Management
                </p>
              </Grid2>
            </Grid2>
          </Box>

          <section className="">
            <Box className="container" textAlign={'left'} sx={{p:10}}>
              <Box className="mx-auto mb-md-0 mb-4">
                <Typography variant="h4" gutterBottom className="text-uppercase fw-bold mt-4">Contact</Typography>
                <Box className="row">
                  <p className="d-flex col-12 col-lg-4">
                    <i className="fas fa-telephone mr-3 mt-1"></i>+971 4 552 0889
                  </p>
                  <p className="d-flex col-12 col-lg-4">
                    <i className="fas fa-phone mr-3 mt-1"></i>+971 504 153 141
                  </p>
                  <p className="d-flex col-12 col-lg-4">
                    <i className="fas fa-envelope mr-3 mt-1"></i>{" "}
                    sales@onetechuae.com
                  </p>
                  <p className="d-flex col-12 col-lg-4">
                    <i className="fas fa-home mr-3 mt-1"></i>
                    G11, Madina Mall, Muhaisnah 4, Dubai, UAE, P.O Box: 120735
                  </p>
                </Box>
              </Box>
            </Box>
          </section>

          <Box textAlign={'center'} className="text-center p-3 style3">
          Copyright © 2024 onetech
          </Box>
        </footer>
      </Box>
    );
  }
}

export default Footer;
