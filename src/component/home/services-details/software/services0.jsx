import React from 'react'

// mui
import { Box, Grid, Paper, Typography } from '@mui/material'

function software() {
  return (
    <Box textAlign='center' sx={{m:10}}>
      <Box>
      <Typography variant='h1' gutterBottom>SOFTWARE ROBUSTNESS</Typography>
      <Typography variant='body1'>We help companies to focus on core business by taking over complete responsibility. We provide both black-box and white-box testing support on demand.</Typography>
      </Box>
      <Box sx={{mt:20}}>
    <Typography variant='h2' gutterBottom>BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY</Typography>
      <Typography variant='h3' sx={{borderBottom:4,borderRadius:10}}>OUR SERVICES</Typography>
      </Box>

      <Grid container spacing={2} sx={{mt:10}}>
        <Grid item xs={4}>
      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4}}>
        <Typography variant='h4' gutterBottom>SOFTWARE DEVELOPMENT</Typography>
      <Typography variant='body1'>It is a process involving the creation, maintenance of applications, frameworks of software, design, programming, testing, and bug fixing</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>
      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4}}>
        <Typography variant='h4' gutterBottom>MOBILE APP DEVELOPMENT</Typography>
      <Typography variant='body1'>It is the act of developing app suitable for mobile devices that involve writing software for small, wireless computing devices.</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4}}>
        <Typography variant='h4' gutterBottom>WEBSITE DEVELOPMENT</Typography>
      <Typography variant='body1'>It involves building and maintaining the websites; it makes the website look great, works quickly with firm user experience.</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>CRM SOFTWARE DEVELOPMENT</Typography>
      <Typography variant='body1'>It is the tool or technique that helps companies make a healthy relationship with their customers by organizing the data.</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>UI / UX DESIGNING</Typography>
      <Typography variant='body1'>It increases the user experience and customer satisfaction, which ultimately increases the number of customers, resulting in the growth of the business.</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>DIGITAL MARKETING</Typography>
      <Typography variant='body1'>It is a strategy that uses multiple channels to attract engage and convert customers online.</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>Custom Software Development</Typography>
      <Typography variant='body1'>Radixweb, a reputable custom software development company in Dubai, UAE, helps you build feature-rich custom solutions</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>Dedicated Development Team</Typography>
      <Typography variant='body1'>Our dedicated development team in Dubai uses engagement models ideal for your long-term projects and address your business</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>SaaS Development</Typography>
      <Typography variant='body1'>Our dedicated development team in Dubai uses engagement models ideal for your long-term projects and address your business</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>Cloud Applications</Typography>
      <Typography variant='body1'>As a trusted cloud application development company in Dubai, our professionals develop sustainable cloud solutions for your business</Typography>
      </Paper>
        </Grid>
        <Grid item xs={4}>

      <Paper sx={{mt:10, p:5, borderBottom:10, borderRadius:4, height: '58%'}}>
        <Typography variant='h4' gutterBottom>Web App Development</Typography>
      <Typography variant='body1'>Collaborate with dedicated software developers in Dubai to create top-notch web apps using ultra-modern tools and technologies</Typography>
      </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default software
