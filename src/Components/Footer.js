import React from 'react';
import { Typography, Divider, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f5f5f5', paddingBottom:".5em"}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1em' }}>
        <Typography variant="body2" gutterBottom>
           Portfolio © {new Date().getFullYear()} Jacopo Essenziale &nbsp;
        </Typography>
        <Divider orientation="vertical" flexItem />
        <IconButton component={Link} href="https://www.linkedin.com/in/jacopoessenziale/" target="_blank" aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
        <IconButton component={Link} href="https://twitter.com/jessenziale" target="_blank" aria-label="X">
          <XIcon />
        </IconButton>
        <IconButton component={Link} href="https://github.com/elrod" target="_blank" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.reddit.com/user/elrod88/" target="_blank" aria-label="Reddit">
          <RedditIcon />
        </IconButton>
        </div>
    </footer>
  );
};

export default Footer;
