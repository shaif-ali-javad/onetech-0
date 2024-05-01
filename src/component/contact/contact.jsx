import React, { Component } from "react";
import "./contact.css"; 

// mui
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export class Contact extends Component {
  render() {
    return (
      <>
        <Box className="contact-container">
          <Typography variant="h1" sx={{mt:20}} textAlign='center' gutterBottom>Contact</Typography>
            <Box sx={{ width: 1 }}>
            <Box display="grid" 
            gridTemplateColumns={{ xs: "1fr", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
             gap={2} sx={{mb:10, mt:10, p:10}}>
              <Box>
              <Item sx={{borderRadius:20, p:10, height:170}}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/outdated/128/icon_Telephone.png"
                alt="" width={100}
                />
              <p> 
                <strong>landline</strong>
                <br />
                +971 4 552 0889
              </p>

              </Item>
            </Box>
              <Box sx={{borderRadius:20}}>
              <Item sx={{borderRadius:20, p:10, height:170}}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/Primo_Icons/PNG/128x128/telephone_black.png"
                alt="" width={100}
                />
              <p>
                <strong>Phone</strong>
                <br />
                +971 504 153 141
              </p>
              </Item>
              </Box>
                <Box>
              <Item sx={{borderRadius:20, p:10, height:170}}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/android-png/256/Android-Email.png"
                alt="" width={100}
                />
              <p>
                <strong>Email</strong>
                <br />
                sales@onetechuae.com
              </p>

              </Item>
            </Box>
            <Box>
              <Item sx={{borderRadius:20, p:10, height:170}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/gpsmapicons/red/gpsmapicons01.png"
                alt="" width={100}
                />
              <p>
                <strong>Location</strong>
                <br />
                G11, Madina Mall, Muhaisnah 4, Dubai, UAE, P.O Box: 120735
              </p>

          </Item>
        </Box>
          </Box>
        </Box>
      </Box>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8784910406803!2d55
        .3067914144859!3d25.27467263475643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x3e5f434c2736314d%3A0x8d0bce90d1cfafb6!2sNaif%20Intersection%202!5e0!3m2!1sen!2sin!
        4v1674999325590!5m2!1sen!2sin"
            width="99.4%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Box className="container0" sx={{p:10, textAlign: 'center'}}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb:10}} gutterBottom>
            technical assistance by <a href="http://">chat</a>
          </Typography>
          <Paper sx={{p:10, width:400, textAlign: 'center'}} className='container0-0'>
          <Typography variant="h3" gutterBottom>
          GET IN TOUCH
          </Typography>
          <TextField label='name' type="text" required sx={{width:400, mb:1}}/><br />
          <TextField label='email' type="email" required  sx={{width:400, mb:1}}/><br />
          <TextField aria-label="minimum height" placeholder="message" required sx={{width:400}}/>
          </Paper>
          </Box>
          {/* <form id="submit-form" action="">
            <h3>GET IN TECH</h3>
            <input type="text" id="fname" placeholder="Your name" name="name" />
            <input
              type="text"
              id="email"
              placeholder="Your email"
              name="email"
            />
            <textarea
              id="subject"
              rows="4"
              placeholder="Enter your message"
              name="message"
              value="00"
            ></textarea>
            <button type="submit">Send</button>
          </form> */}
        <div className="whatsapp">
          <a href="https://wa.me/971504153141">
            <img
              id="whatsapp"
              height="40px"
              src="image/WhatsApp-logo.png"
              alt=""
            />
          </a>
        </div>
      </>
    );
  }
}

export default Contact;
