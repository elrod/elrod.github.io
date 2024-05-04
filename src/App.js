import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import BioSection from "./Components/BioSection";

function App() {

  const bioMD = '/typography/bio.md';
  const photoUrl = "https://scontent-mxp1-1.xx.fbcdn.net/v/t39.30808-6/387836188_10222547299741360_7958869511524754184_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gLYACLXwJTUQ7kNvgGFJ1i1&_nc_ht=scontent-mxp1-1.xx&oh=00_AfD6FILQTchOJ0z7Yv2lsYhFPLvVQBJDCAVIDxMpPTUTJQ&oe=663C31FE";
  const [bioText, setBioText] = useState('');

  const fetchState = async (fileName, setStateAction) => {
    try {
      const response = await fetch(fileName);
      const text = await response.text();
      setStateAction(text);
    } catch (error) {
      console.error(`error loading ${fileName}: ${error}`);
    }
  };

  useEffect(() => {

    fetchState(bioMD, setBioText);

  }, []);

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        marginTop="10vh"
        alignItems="top"
        minHeight="100vh"
      >
        <BioSection title="Hey there!" bio={bioText} photo={photoUrl} photoAlt="It's a me, Jacopo!" />
      </Box>
    </Container>
  );
}

export default App;
