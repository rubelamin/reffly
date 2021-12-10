import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function() {
    return <>
       <Grid container spacing={1}>
           <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block', } }}> </Grid>
           <Grid item xs={12} md={4}>
               
                <Box sx={{ flexGrow: 1, textAlign: 'right', }}>
                    <img width="325" src="https://www.reff.ly/images/others/carbonad-v1.png" />
                </Box>
                    
               
           </Grid>
           <Grid item xs={12} md={2}>
               <Typography>Find Us On-</Typography>
               <img height="40" src="https://cdn.buymeacoffee.com/assets/img/home-page-v3/bmc-new-logo.png" />
           </Grid>
           <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block', } }}> </Grid>

       </Grid>
    </>
}