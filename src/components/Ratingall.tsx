import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



export default function basicRating() {
    const [value, setValue] = React.useState<number | null>(2);
    return <>
        
            <Box sx={{
                '& > legend' : { mt: 2 },
            }}>
                <Typography component="legend">Controlled  </Typography>
                <Rating 
                name="simple-controlled" 
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
                <Typography component="legend">Read Only</Typography>
                <Rating value={value} name="read-only" readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-rating" value={null} />
            </Box>
        
    </>
}