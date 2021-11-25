import React from 'react'
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';
import SecondHello from './components/SecondHello';
import Allavatar from './components/Allavatar';
import SignIn from './components/SignIn';
import Badge from './components/Badge';
import Logo from './components/Logo';

import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddLinkIcon from "@mui/icons-material/AddLink";
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import { defaultTheme } from './theme';

interface Props {
  window? : () => Window;
  children: React.ReactElement;

}
function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target : window? window() : undefined,
  });
   return React.cloneElement(children, {
     elevation : trigger ? 4 : 0,
   });
}

function App() {
  
    return ( <>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll>
        <AppBar sx={{ 
          bgcolor: 'warning', 
          transform: 'rotate(-45deg)',
          textAlign: 'center',
          alignItems: 'center',
          ml: -5,
          width: 550,
          left: -171,
          top: 36,
          }}>
          <Toolbar>
            <Typography>
              Test Mode
            </Typography>
          </Toolbar>
        </AppBar>
        </ElevationScroll>
      </React.Fragment>
      <ThemeProvider theme ={ defaultTheme }>
        <CssBaseline />
      <Box sx={{ flexGrow: 1, }}>
        <AppBar position="static" sx={{ bgcolor: 'background.pink' }}>
          <Toolbar>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
              <Link href="#">
              <Avatar sx={{ bgcolor: 'background.grey' }}>
                <AddLinkIcon />
              </Avatar>
              </Link>

              <Link href="#">
              <Avatar sx={{ bgcolor: 'background.grey' }}>
                <GitHubIcon />
              </Avatar>
              </Link>
            </Box>
            
          </Toolbar>
          <Box sx={{ textAlign: 'center', my: 5, }}>
         <Typography component="div" variant="h6" noWrap
             sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              RBL Practice
          </Typography>
          <Logo />
          <Typography component="div" variant="h1" noWrap
             sx={{ display: { xs: 'none', sm: 'block', } }}
            >
              Reff.Ly
          </Typography>
          
      </Box>
        </AppBar>
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

