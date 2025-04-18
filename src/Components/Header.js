import React from 'react';
import { Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{top: 0, position:'sticky', width: '100%', backgroundColor: '#121212', zIndex:'1000'}}>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Container>      
            <Typography variant="h4" component="div">
            Jacopo Essenziale
            </Typography>
            <Typography variant="h5" component="div">
                Game Developer
            </Typography>
        </Container>
    </Link>
    </header>

  );
};

export default Header;