import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';
import Allavatar from './components/Allavatar';
import SignIn from './components/SignIn';
import Badge from './components/Badge';
import Logo from './components/Logo';
import Skeleton from './components/Skeleton';

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import { defaultTheme } from './theme';



function App() {
  
    return ( <>
      
      <ThemeProvider theme ={ defaultTheme }>
        <CssBaseline />
      
        <AppBar position="static" sx={{ 
          bgcolor: 'background.default',
          boxShadow: 0,
          }}>
          <Toolbar>
            
            <Logo />
            
          </Toolbar>
        </AppBar>
        <Box
          sx={{ 
            bgcolor: '#e43', 
            transform: 'rotate(-45deg)',
            textAlign: 'center',
            alignItems: 'center',
            ml: -5,
            width: 450,
            left: -130,
            top: 25,
            position: 'fixed',
            py: 2,
            }}
        >
              <Typography variant="h6" color="secondary.white">
                <b>TEST MODE</b>
              </Typography>
        </Box>

      <Container maxWidth={false} >
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={1} >

              <Grid item xs={2} sx={{ display:{ xs:'none', md: 'block',} }}>  </Grid>
              <Grid item xs={12} md={8}> 
                <Box sx={{ 
                    bgcolor: 'background.paper',
                    padding: 2,
                    boxShadow: 1,
                    }}
                
                    >
                  <SignIn />
                  
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ display:{ xs:'none', md: 'block',} }}>  </Grid>

              <Grid item xs={12} md={12}>
                <Box sx={{ 
                  py: 7,
                  }}
              
                  >
                  <SayHello />
                </Box>
              </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Box sx={{ flexGrow: 1, bgcolor: 'background.dark', py: 5, }}>
        <Container>
              <Grid container spacing={0} >
                <Grid item xs={12} md={12}>
                  <SecondHello/>
                </Grid>
              </Grid>
        </Container>
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.dark', py: 5, }}>
        <Skeleton />
        
      </Box>
      
      <Container maxWidth={false} >
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={1} >
              <Grid item xs={12} md={4}>
                <Box sx={{ 
                  bgcolor: 'background.blue',
                  padding: 2,
                  boxShadow: 1,
                  }}
              
                  >
                  <Badge />
                </Box>
              </Grid>
              
              <Grid item xs={12} md={5}>
                <Box sx={{ 
                  bgcolor: 'background.cyan',
                  padding: 2,
                  boxShadow: 1,
                  }}
              
                  >
                  <Allavatar/>
                </Box>
              </Grid>
              

            </Grid>
          </Box>

      </Container>
      <Container maxWidth={false} >
        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
          <p>Copyright © Tbazar 2021.</p>
        </Box>
      </Container>
      </ThemeProvider>
  


        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

