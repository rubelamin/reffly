import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function(){
    return <>
        <Box>
            <AppBar position="relative" color="transparent" sx={{ boxShadow: 0, }}>
                <Toolbar>
                    <Container>
                        <Box>
                            <AppBar 
                                position="static" 
                                color="transparent"
                                sx={{ boxShadow: 0, }}
                                >
                                <Toolbar>
                                    <Typography 
                                        component="div" 
                                        variant="body1"
                                        sx={{ flexGrow: 1, }}
                                        >
                                        Made with <FavoriteIcon sx={{ color: 'error.pink'}}/> in <b>Bangladesh</b>
                                    </Typography>
                                    <Typography 
                                    component="div" 
                                    variant="body2"
                                    sx={{ flexGrow: 1, }}
                                    >
                                    Copyright © 2021 Reff.ly | <Link>Terms</Link> | <Link>Privacy</Link>
                                    </Typography>
                                    <Link href="#" color="background.grey">
                                        <GitHubIcon />
                                    </Link>
                                    <Link href="#" color="background.grey">
                                        <LinkedInIcon />
                                    </Link>
                                    <Link href="#" color="background.grey">
                                        <FacebookIcon />
                                    </Link>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    
    </>
}