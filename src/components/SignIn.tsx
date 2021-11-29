import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function SignIn() {
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
         email: data.get('email'),
         password: data.get('password'),
      });
   };
   return <>
               
               <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1 }}>
                    
                  <Grid container spacing={1} >
                     <Grid item xs={12} md={9}>
                        <TextField 
                           margin= "normal"
                           required
                           fullWidth
                           id="shorturl"
                           label="Enter long Url here"
                           name="url"
                           type="url"
                        
                        />
                     </Grid>
                     <Grid item xs={12} md={3}>
                        <Button
                         type="submit" 
                         fullWidth 
                         variant="contained" 
                         sx={{
                            mt:2, 
                            py: 2,
                            bgcolor: 'primary.grey',
                           }}
                         >
                           SHORTEN
                        </Button>
                     </Grid>
                  </Grid>
               </Box> 
   </>
}
