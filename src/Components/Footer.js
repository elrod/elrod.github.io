import React from 'react';
import { Typography, Divider } from '@mui/material';
import SocialCarousel from './SocialCarousel';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', paddingBottom:".5em"}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1em' }}>
        <Typography variant="body2" gutterBottom>
           Portfolio © {new Date().getFullYear()} Jacopo Essenziale &nbsp;
        </Typography>
        <Divider orientation="vertical" flexItem />
        <SocialCarousel />
        </div>
    </footer>
  );
};

export default Footer;
