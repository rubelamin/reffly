import React from 'react';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';





export default function() {
    return (
      <>
    <Grid container >
        <Grid item xs={12} md={6} 
          sx={{ 
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              bgcolor: 'background.default',
              borderTopRightRadius: 63,
              pt: 6,
          }}
        >
          
          <Container>
            <Typography variant="h6" sx={{ mt: '40px', textAlign: 'right' }}>
                An open source contribution by
            </Typography>
          </Container>
        </Grid>
    
        <Grid item xs={12} md={6} 
          sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              bgcolor: 'background.default',
              borderTopLeftRadius: 63,
              pl: 0,
              pt: 4,
          }}
        >
          
            <Container sx={{ pl: 1, }}>
              <ImageList sx={{ width: 270, }} cols={1}>
                <ImageListItem>
                  <img 
                    src="https://www.reff.ly/images/logos/aicat-v1.png"
                    alt="middle image"
                    />
                </ImageListItem>
              </ImageList>
            </Container>
          </Grid>
    </Grid>
        
        
      </> 
    );

    
}