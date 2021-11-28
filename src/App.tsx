import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';
import Allavatar from './components/Allavatar';
import SignIn from './components/SignIn';
import Badge from './components/Badge';
import Logo from './components/Logo';

import AppBar from '@mui/material/AppBar';
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
      
        <AppBar position="static" sx={{ bgcolor: 'background.default' }}>
          <Toolbar>
            
            <Logo />
            
          </Toolbar>
        </AppBar>

      <Box
        sx={{ 
          bgcolor: 'warning.main', 
          transform: 'rotate(-45deg)',
          textAlign: 'center',
          alignItems: 'center',
          ml: -5,
          width: 450,
          left: -130,
          top: 36,
          position: 'fixed',
          py: 2,
          }}
      >
            <Typography>
              Right Test
            </Typography>
      </Box>
      

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', }}>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.deepPurple',
          maxWidth: { md: 200 },
          padding: 2,
          boxShadow: 1,
          mr:1,
        }}
          
          >
          <SayHello />
        </Box>

        <Box sx={{ 
          bgcolor: 'background.indigo',
          maxWidth: { md: 250 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          color: 'fontColor.deepOrange',
           }}
           >
         <SecondHello/>
        </Box>

        <Box sx={{ 
          bgcolor: 'background.blue',
          maxWidth: { md: 250 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          color: 'fontColor.deepPurple',
          }}
          >
         <Allavatar/>
        </Box>

        <Box sx={{ 
          bgcolor: 'background.teal',
          maxWidth: { md: 460 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          color: 'fontColor.paper',
          }}
          >
         <SignIn/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
        <Box sx={{ 
          bgcolor: 'background.cyan',
          maxWidth: { md: 360 },
          padding: 2,
          boxShadow: 1,
          mr: 1,
          }}
          >
          <Badge />
        </Box>


      </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, }}>
          <p>Copyright © Tbazar 2021.</p>
        </Box>
      </Container>
      </ThemeProvider>
  


        </> )
  }

ReactDOM.render(<App />, document.getElementById('app'));

