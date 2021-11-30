import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import AddLinkIcon from '@mui/icons-material/AddLink';


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
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ textAlign: 'center', }}>
              <Typography variant="h2">
                    FOR ENTERPRISE
              </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'right', }}>
            <Typography variant="h3" sx={{ py: 4, }}>
                Self host reffly for full features including Link tracking Statistics, 
                Branding & more...or Try reffly plus
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
              <Typography>reflly</Typography>
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
          <Grid item xs={12} md={6}>
            <ImageList>
              <ImageListItem>
                <img 
                  src="https://www.reff.ly/images/others/nicechartjs-v1.png"
                  alt="middle image"
                  />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </> 
    );

    
}