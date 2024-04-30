import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function services1() {
  return (
    <Box textAlign={'center'}>
      <Typography variant='h3' gutterBottom sx={{fontSize:20, fontWeight:'bold'}}>INDUSTRIES</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>TECHNOLOGY</Typography>
        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>ECOMMERCE</Typography>

        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>BANKING</Typography>

        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>LOGISTIC & SHIPPING</Typography>

        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>HOSPITAL</Typography>

        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>TRAVEL</Typography>

        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>EDUCATION</Typography>

        </Grid>
        <Grid item xs={3}>
            <Typography variant='h4' sx={{fontSize:15}}>MANUFACTURING</Typography>

        </Grid>
      </Grid>
    </Box>
  )
}

export default services1
