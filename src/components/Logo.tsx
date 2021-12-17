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
      
      <Box sx={{ flexGrow: 1, my: 5, }} >
          <Grid container spacing={1}>
              <Grid item xs={12} md={10}></Grid>
              <Grid item xs={8} sx={{ display: { xs: 'flex', md:'none'}}}></Grid>
              <Grid item xs={4} md={2} sx={{ textAlign: 'right', display: 'flex' }}>
                <Box sx={{ pr: 2}}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                    variant="dot"
                    
                  >
                    <Link href="#">
                    <Avatar variant="rounded" sx={{ bgcolor: 'background.grey', }}>
                      <AddLinkIcon sx={{ transform: 'rotate(-45deg)', fontSize: 35, }} />
                    </Avatar>
                    </Link>
                  </StyledBadge>
                </Box>
                
                <Box>
                  <Link href="#">
                    <Avatar variant="rounded" sx={{ bgcolor: 'background.grey' }}>
                      <GitHubIcon />
                    </Avatar>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} sx={{ textAlign: 'center', mt: 5,}}>
                <Grid container sx={{ justifyContent: 'center', }}>
                  
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
 
                        badgeContent=" "
                      >
                        <Avatar sx={{ width:80, height: 80, bgcolor: 'warning.light' }} >
                          <InsertLinkIcon sx={{ 
                            fontSize: 70, 
                            transform: 'rotate(-50deg)',
                            color: 'primary.grey'
                            }} />
                        </Avatar>
                    </Badge>
                               
                    <Typography variant="h2"
                        sx={{ 
                          color: 'primary.grey', 
                          fontFamily: 'Beth Ellen', 
                          mt:1,
                          fontSize: 40,
                          fontWeight: 'bold'
                        
                        }}
                        >
                          reffly
                    </Typography>
                  
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography component="div" variant="body1" noWrap
                sx={{ display: { xs: 'none', sm: 'block' }, color: 'primary.grey', }}
                >
                  Free, Open source, Community driven!
              </Typography>
              </Grid>
          </Grid>
        </Box>
         
     </>
}