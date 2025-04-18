import React from 'react';
import { Avatar, Box, Divider, Typography, Card, CardContent } from '@mui/material';
import { MuiMarkdown } from 'mui-markdown';
import SocialCarousel from './SocialCarousel';

const BioSection = ({ title, bio, photo, photoAlt="photo" }) => {
  return (
    <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Avatar
                    alt={photoAlt}
                    src={photo}
                    sx={{ width: 200, height: 200, margin: 'auto' }}
                />
                <Divider sx={{marginTop:"1em", marginBottom:"1em"}} />
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    <MuiMarkdown>{bio}</MuiMarkdown>
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <SocialCarousel />
                </div>
            </CardContent>
        </Box>
    </Card>
  );
};

export default BioSection;
