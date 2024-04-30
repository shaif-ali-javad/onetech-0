import React from 'react'

import Box from "@mui/material/Box";
import { Paper, Typography } from '@mui/material'
import {Check, CloseSharp} from '@mui/icons-material';

function services() {
  return (
    <Box>
      <Typography variant='h3' gutterBottom>Choose Your IT Support Package</Typography>
      <Typography variant='h4'>Get the most out of your IT budget with a package that includes everything you need to have a premium IT AMC support</Typography>
      <Box sx={{width:1}}>
      <Box display={'grid'} 
          gridTemplateColumns={{ xs: "1fr", sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={2} sx={{mb:10, mt:10, p:10}}>
      <Box xs={4}>
        <Typography variant='h5'>BREAK & FIX</Typography>
        <Typography variant='h6'>2 Hours of Tech Support</Typography>
        <Typography variant='body1'>ONE TIME COST</Typography>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Remote Support</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>4 Hours response time</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Preventive Maintenance</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>On-site support</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Periodic checkup</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>24/7 Remote Monitoring</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Managed Data Backup</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Data Backup to Cloud</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Advanced Cyber Security</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Act as IT department</Typography>
          </Box>
        </Box>
          <Typography variant='body1'>Get started</Typography>
          <Typography variant='body1'>*Terms & Conditions Apply</Typography>
      </Box>
      <Box xs={4}>
        <Paper sx={{p:5}}>

        <Typography variant='h5'>ESSENTIAL CARE</Typography>
        <Typography variant='h6'>Monthly Support</Typography>
        <Typography variant='body1'>PER DEVICE/MONTH</Typography>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Unlimited Remote Support</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>2 Hours response time</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Preventive Maintenance</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>On-site support</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Periodic checkup</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>24/7 Remote Monitoring</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Managed Data Backup</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Data Backup to Cloud</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Advanced Cyber Security</Typography>
          </Box>
        </Box>
        <Box container spacing={0} justifyContent={'center'}>
          <Box xs={6}>
            <CloseSharp/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1' textAlign={'left'} sx={{ml:-7}}>Act as IT department</Typography>
          </Box>
        </Box>
          <Typography variant='body1'>Get started</Typography>
          <Typography variant='body1'>*Terms & Conditions Apply</Typography>
        </Paper>
      </Box>
      <Box xs={4}>
        <Typography variant='h5'>ESSENTIAL CARE</Typography>
        <Typography variant='h6'>Monthly Support</Typography>
        <Typography variant='body1'>PER DEVICE/MONTH</Typography>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Unlimited Remote Support</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>2 Hours response time</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Preventive Maintenance</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>On-site support</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Periodic checkup</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>24/7 Remote Monitoring</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Managed Data Backup</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Data Backup to Cloud</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Advanced Cyber Security</Typography>
          </Box>
        </Box>
        <Box container spacing={2} justifyContent={'center'}>
          <Box xs={6}>
            <Check/>
          </Box>
          <Box xs={6}>
            <Typography variant='body1'>Act as IT department</Typography>
          </Box>
        </Box>
          <Typography variant='body1'>Get started</Typography>
          <Typography variant='body1'>*Terms & Conditions Apply</Typography>
      </Box>
    </Box>
    </Box>
    </Box>
  )
}

export default services
