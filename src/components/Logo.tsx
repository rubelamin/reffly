import React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddLinkIcon from "@mui/icons-material/AddLink";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

export default function() {
    return <>  
      
      <Box sx={{ flexGrow: 1, my: 7, }} >
          <Grid container spacing={2}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3} sx={{ alignItems: 'center' }}>
                <StyledBadge sx={{ float: 'left', mr: 2, }}
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                  variant="dot"
                  
                 >
                  <Link href="#">
                  <Avatar variant="rounded" sx={{ bgcolor: 'background.grey', }}>
                    <AddLinkIcon sx={{ transform: 'rotate(-45deg)' }} />
                  </Avatar>
                  </Link>
                </StyledBadge>
                  <Link href="#">
                  <Avatar variant="rounded" sx={{ bgcolor: 'background.grey' }}>
                    <GitHubIcon />
                  </Avatar>
                  </Link>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{ width:70, height: 70, bgcolor: 'warning.main' }} >
                    <InsertLinkIcon sx={{ 
                      fontSize: 50, 
                      transform: 'rotate(-45deg)',
                      color: 'primary.black'
                      }} />
                  </Avatar>
                </StyledBadge>
                
              </Grid>
              <Grid item xs={6}>
              <Typography variant="h2"
                  sx={{ display: { xs: 'none', sm: 'block' }, 
                  color: 'primary.grey', fontFamily: 'Beth Ellen', mt:1, }}
                  >
                    reffly
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography component="div" variant="h6" noWrap
                sx={{ display: { xs: 'none', sm: 'block' }, color: 'secondary.dark', }}
                >
                  RBL Practice
              </Typography>
              </Grid>
          </Grid>
        </Box>
         
     </>
}