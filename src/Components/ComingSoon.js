import React from 'react';
import { Container, Box, Typography } from '@mui/material';
const ComingSoon = ({title, body}) => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">
            {body}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ComingSoon;
