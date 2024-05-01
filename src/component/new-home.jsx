import React from 'react'
import './new-home/home.css'

// image
import image0 from '../assets/1.png'
import image1 from '../assets/2.png'
import image2 from '../assets/3.png'

// mui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function newhome() {
  return (
    <Box sx={{ }} className="home-container">
        <Box sx={{ p:10, pt: 20}} className="home-image">
        <Box display={'grid'} gridTemplateColumns={'repeat(2, 1fr)'}>

        <Box sx={{ width:500 }}>
      <Typography variant='h2' sx={{ fontSize:13, fontWeight:600}} gutterBottom className='home-title-0'>
        MANAGED IT SERVICES EXCEPTIONAL.
      </Typography>
      <Typography variant='h1' sx={{fontSize:43, fontWeight:600}} gutterBottom className='home-title-1'>
        TECHNOLOGY OBSESSIVE SERVICE.
      </Typography>
      <Typography variant='h2' sx={{fontSize:16, fontWeight:400}} className='home-title-2'>
        Your Success Requires Sophisticated Tectnological Expertise. Don't Be Held Back. Stay Competitive By Empowering Your Team With Elevated Managed IT.
      </Typography>
        </Box>
        <Box sx={{mt:-15}}>
            <img src={image0} alt="" width={400}/>
        </Box>
    </Box>
    </Box>
    <Box sx={{backgroundColor:'#080e28', p: 10}}>
    <Box sx={{pt:10, pb:-10}} display={'grid'} gridTemplateColumns={'repeat(2, 1fr)'}>
    <Box sx={{ width:500 }}>
      <Typography variant='h2' sx={{ fontSize:13, fontWeight:600}} gutterBottom className='home-title-0'>
        WE DON'T JUST CARE
      </Typography>
      <Typography variant='h1' sx={{fontSize:43, fontWeight:600}} gutterBottom className='home-title-1'>
        Network
      </Typography>
      <Typography variant='h2' sx={{fontSize:16, fontWeight:400}} className='home-title-2'>
        Your Success Requires Sophisticated Tectnological Expertise. Don't Be Held Back. Stay Competitive By Empowering Your Team With Elevated Managed IT.
      </Typography>
    </Box>
    <Box sx={{mt:-15}}>
        <img src={image1} alt="" width={600}/>
    </Box>
    </Box>
    </Box>
    <Box sx={{backgroundColor:'#080e28', p: 10, mt: -10}}>
    <Box sx={{ width:500 }}>
      <Typography variant='h2' sx={{ fontSize:13, fontWeight:600}} gutterBottom className='home-title-0'>
        WE DON'T JUST CARE
      </Typography>
      <Typography variant='h1' sx={{fontSize:43, fontWeight:600}} gutterBottom className='home-title-1'>
        Software
      </Typography>
      <Typography variant='h2' sx={{fontSize:16, fontWeight:400}} className='home-title-2'>
        Your Success Requires Sophisticated Tectnological Expertise. Don't Be Held Back. Stay Competitive By Empowering Your Team With Elevated Managed IT.
      </Typography>
    </Box>
    <Box sx={{mt:-15}}>
        <img src={image2} alt="" width={600}/>
    </Box>
    </Box>
    </Box>
  )
}

export default newhome
