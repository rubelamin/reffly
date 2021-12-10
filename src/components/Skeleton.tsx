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
    <Grid container spacing={2} >
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
            <Typography variant="h3" sx={{ py: 4, }}>
                Self host reffly for full features including Link tracking Statistics, 
                Branding & more...or Try reffly plus
            </Typography>
          </Container>
        </Grid>
    
        <Grid item xs={12} md={6} 
          sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              bgcolor: 'background.default',
              borderTopLeftRadius: 63,
              pl: 6,
              pt: 6,
          }}
        >
          
            <Container>
              <Typography variant="h1"
                sx={{ color: 'primary.grey', fontFamily: 'Beth Ellen', mt:1, }}
                >reflly+
              </Typography>
              <ImageList sx={{ width: 200, }} cols={1}>
                <ImageListItem>
                  <img 
                    src="https://www.reff.ly/images/others/nicechartjs-v1.png"
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