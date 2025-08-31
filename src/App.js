import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Jersey25 from './fonts/Jersey25-Regular.ttf';

import Header from './Components/Header'; // Import the Header component
import Footer from './Components/Footer';
import PageTracker from './Components/PageTracker';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';

import {fetchStateFromFile} from './Helpers/Utils';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#e78474',
      }
    },
    typography:{
      fontFamily: 'Jersey25',
      h1: {
        color: '#5FB49C',
        letterSpacing: '0.05em',
      },
      h2: {
        color: '#5FB49C',
        letterSpacing: '0.05em',
      },
      h3: {
        color: '#5FB49C',
        letterSpacing: '0.05em',
      },
      h4: {
        color: '#5FB49C',
        letterSpacing: '0.05em',
      },
      h5: {
        color: '#5FB49C',
        letterSpacing: '0.05em',
      },
      h6: {
        color: '#5FB49C',
        letterSpacing: '0.05em',
      },
      body1: {
        letterSpacing: '0.05em',
      },
      body2: {
        letterSpacing: '0.05em',
      },
      button: {
        letterSpacing: '0.04em',
      },
      caption: {
        letterSpacing: '0.02em',
      },
      overline: {
        letterSpacing: '0.1em',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@font-face': [
            {
              fontFamily: 'Jersey25',
              fontStyle: 'normal',
              fontWeight: 400,
              fontDisplay: 'swap',
              src: `
                local('Jersey25-Regular'),
                url(${Jersey25}) format('truetype')
              `,
              unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
            },
          ],
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none', // Remove underline from links
            color: '#e78474'
          },
        },
      },
    }
  });

  const projectsJsonFile = '/projects/projects.json'
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchStateFromFile(projectsJsonFile, setProjects, true);
  }, []);

  return (
      <Router>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
          <PageTracker/>
          <div style={{ marginBottom: '5em' }}>
            <Container sx={{marginTop: "1em"}}>
              <Routes>
                <Route path="/" element={<HomePage projects={projects} />} />
                <Route path="/projects/:projectId" element={<ProjectPage projects={projects}/>} />
              </Routes>
            </Container>
            <Footer />
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
