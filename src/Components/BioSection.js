import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

const BioSection = ({ title, bio, photo, photoAlt="photo" }) => {
  return (
      <Grid item xs={12} md={9}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {bio}
            </Typography>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            sx={{ maxWidth: 300 }}
            image={photo}
            alt="Jacopo Essenziale"
        />
        </Card>
      </Grid>
  );
};

export default BioSection;
