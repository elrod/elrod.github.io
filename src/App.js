import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';

import {fetchStateFromFile} from './Helpers/Utils';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none', // Remove underline from links
          },
        },
      }
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

          <div style={{ marginBottom: '5em' }}>
            <Container marginTop="1em">
              <Routes>
                <Route path="/" element={<HomePage projects={projects} />} />
                <Route path="/projects/:projectId" element={<ProjectPage projects={projects} />} />
              </Routes>
            </Container>
            <Footer />
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
