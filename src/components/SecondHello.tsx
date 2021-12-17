import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Link from '@mui/material/Link';


const StyledBadge = styled(Badge) (( {theme} ) => ({
      '& .MuiBadge-badge' : {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          animation: 'ripple 1.2s infinite ese-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: '1',
        },
        '100%': {
          transform: 'scale(2.4)',
          opacity: '0',
        },
      },
}));


export default function() {
    return (
      <>
        <Grid container >
          <Grid item xs={12} sx={{ textAlign: 'center', }}>
              <Typography variant="h3" sx={{ letterSpacing: 0, }}>
                    FOR ENTERPRISE
              </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'right', pt: 5, }}>
            <Typography variant="h4" sx={{ py: 4, }}>
                Self host <i><b>reffly</b></i> for full features including Link tracking Statistics, 
                Branding & more...or Try <i><b>reffly plus</b></i>
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
              <Typography variant="h1"
              sx={{ color: 'primary.grey', fontFamily: 'Beth Ellen', mt:1, }}
              >reflly+</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{ bgcolor: 'background.teal', }}>
                    <AddLinkIcon sx={{ transform: 'rotate(-45deg)' }} />
                  </Avatar>
                </StyledBadge>
                
              </Box>
              
            </Box>

          </Grid>
          <Grid item xs={12} md={6} sx={{ pl: 8, pt: 5,}}>
            <Paper>
              <CardMedia
                component="img"
                image="https://www.reff.ly/images/others/nicechartjs-v1.png"
                alt="Chart Bar"
                sx={{
                  filter: 'grayscale(70%)',
                  opacity: 0.2,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ py: 8, }}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Play with <i><b>reffly</b></i> using freemium technologies, <Link> learn more ...</Link>
            </Typography>
          </Grid>
          
        </Grid>
        <Grid container spacing={3}>
        
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 1, bgcolor: 'background.paperdark' }}>
              <Typography component="p">
                <CardMedia
                  component="img"
                  image="https://www.reff.ly/images/logos/nodejs-v2.svg"
                  height="70"
                  width="auto"
                  sx={{ my: '10px', filter: 'grayscale(90%)',}}
                  />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 1, bgcolor: 'background.paperdark' }}>
              <Typography component="p">
                <CardMedia
                  component="img"
                  image="https://www.reff.ly/images/logos/mongodb-v1.svg"
                  height="70"
                  sx={{ my: '10px', filter: 'grayscale(90%)',}}
                  />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 1, bgcolor: 'background.paperdark' }}>
              <Typography component="p">
                <CardMedia
                  component="img"
                  image="https://www.reff.ly/images/logos/nginx-v1.svg"
                  sx={{ 
                    my: '10px',
                    filter: 'grayscale(90%)',
                    width: '260px',
                    height: '70px'
                  }}
                  />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 1, bgcolor: 'background.paperdark' }}>
              <Typography component="p">
                <CardMedia
                  component="img"
                  image="https://www.reff.ly/images/logos/heroku-v1.svg"
                  height="70"
                  sx={{ my: '10px', filter: 'grayscale(90%)',}}
                  />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography component="p" sx={{ mt: '16px', textAlign: 'center', }}>
            Need help? hire me on <Link>Freelancer.com</Link>
        </Typography>
      </> 
    );

    
}