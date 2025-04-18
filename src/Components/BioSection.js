import React from 'react';
import { Avatar, Box, Divider, Typography, Card, CardContent, Grid } from '@mui/material';
import { MuiMarkdown } from 'mui-markdown';
import SocialCarousel from './SocialCarousel';

const BioSection = ({ title, bio, photo, photoAlt="photo" }) => {
    return (
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }}}>
        <Grid container spacing={2}>
          {/* Avatar on the left */}
          <Grid item xs={12} md={4} sx={{margin:'auto'}}>
            <Avatar
              alt={photoAlt}
              src={photo}
              sx={{ verticalAlign: 'center', width: 220, height: 220, margin: 'auto', border: '2px solid rgba(255, 255, 255, 0.12)' }}
            />
          </Grid>
          
          {/* Text on the right */}
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Divider sx={{marginTop:"1em", marginBottom:"1em"}} />
              <Typography variant="subtitle1" color="text.secondary" component="div">
                <MuiMarkdown>{bio}</MuiMarkdown>
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 2 }}>
                <SocialCarousel />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  };

export default BioSection;
