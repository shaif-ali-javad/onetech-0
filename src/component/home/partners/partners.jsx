import React, { Component } from "react";
import LogoSlider from "./carousel/logo-carousel.jsx";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export class Partners extends Component {
  render() {
    return (
      <Box className="text" textAlign={'left'} sx={{p:10}}>
        <Box className="some-text">
          <Typography variant="h1" className="p" gutterBottom>Our Partners</Typography>
          <Typography variant="body1" className="text-0">
            Over two decades, Onetech Technologies maintains a strategic IT
            presence in UAE, forging long-standing
            <br /> partnerships with key global players.
          </Typography>
        </Box>
        <LogoSlider />
        <Box className="text-a">
          <Typography variant="body1">
            Onetech Technologies is UAE’s leading ICT Solutions Company offering
            Office Automation products ranging from Printers & MFPs, Currency
            Handling Solutions, ELV, AV, Telecom, IT, and Enterprise Software
            Applications like ERP, Document & Business Process Management
            Solutions, HR Management Solutions, School Management Solutions,
            Digital Signature Solutions and Location-aware Solutions.
          </Typography>
          <Typography variant="body1">
            Onetech Technologies have exclusive partnerships with international
            brands to ensure the best IT Support Services in quality and
            technology with offices in Dubai and RAK to provide maximum reach
            for all our Customers. In our two decades of successful operations,
            we have established a strong position as an IT Solutions Company
            serving major clientele ranging from Corporates, Government and all
            other verticals.
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Partners;
