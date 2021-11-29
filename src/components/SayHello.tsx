import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function() {
    return <>
       <Grid container spacing={1}>
           <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block', } }}> </Grid>
           <Grid item xs={12} md={4}>
               <Card sx={{ display: 'flex', boxShadow: 0, p: 1, }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                        <CardMedia component="img"
                        image="https://www.reff.ly/images/others/nicechartjs-v1.png" 
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <CardContent sx={{ flex: '1 0 auto', pt: 0, }}>
                        <Typography component="div" variant="body2">
                        According to the Worldwide Screen Resolution Stats (Jan 2020 – Jan 2021), 
                        the most commonly used resolutions across mobile, desktop, and tablet
                        </Typography>
                    </CardContent>
                    </Box>
                    
               </Card>
           </Grid>
           <Grid item xs={12} md={2}>
               <Typography>Find Us On-</Typography>
           </Grid>
           <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block', } }}> </Grid>

           <Grid item xs={12} sx={{ textAlign: 'center', py: 5, }}>
               <Typography variant="h2">
                    FOR ENTERPRISE
               </Typography>
           </Grid>

       </Grid>
    </>
}