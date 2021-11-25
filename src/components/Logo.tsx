import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import AddLinkIcon from '@mui/icons-material/AddLink';
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
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', }}> 
        <Stack direction="row" spacing={1}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar>
              <AddLinkIcon />
            </Avatar>
          </StyledBadge>
          <Typography
             sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              reffly
          </Typography>
       </Stack>  
       <Typography component="div" variant="h6" noWrap
             sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              RBL Practice
          </Typography>
      </Box>
         
     </>
}