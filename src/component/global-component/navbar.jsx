import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./image/Artboard 1@00x.png";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <Box flex={{flexGrow:1, top:0, zIndex:1}} position='fixed'>
        <Paper id="navbar"
              className={this.state.clicked ? "#navbar active1" : "#navbar"}>
            <Toolbar>
            <img src={logo} alt="" width={'10%'}/>
                <Typography variant='h6' component={'div'} sx={{pl:5}}>
                <NavLink className="link" to="/">
                   HOME
                 </NavLink>
                </Typography>
                <Typography variant='h6' component={'div'} sx={{pl:5, pr:5}}>
                 <NavLink className="link" to="/services">
                   SERVICES
                 </NavLink>
                </Typography><Typography variant='h6' component={'div'} sx={{pr:5}}>
                 <NavLink className="link" to="/about">
                   ABOUT
                 </NavLink>
                </Typography>
                <Typography variant='h6' component={'div'} sx={{}}>
                 <NavLink className="link" to="/contact">
                   CONTACT
                 </NavLink>
                </Typography>
            </Toolbar>
        </Paper>
    </Box>
      </>
    );
  }
}
export default Navbar;
