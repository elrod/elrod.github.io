import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import BioSection from "./Components/BioSection";
import ProjectsGrid from './Components/ProjectsGrid';
import Footer from './Components/Footer';

import {fetchStateFromFile} from './Helpers/Utils';

function ClassicPortfolio() {

  const bioMD = '/typography/bio.md';
  const photoUrl = "/img/me.jpg";
  const projectsJsonFile = '/projects/projects.json'
  const [bioText, setBioText] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchStateFromFile(bioMD, setBioText);
    fetchStateFromFile(projectsJsonFile, setProjects, true);
  }, []);

  return (
    <div style={{ marginBottom: '5em' }}>
    <Container margintop="1em">
      <BioSection title="Hey there!" bio={bioText} photo={photoUrl} photoAlt="It's a me, Jacopo!" />
      <ProjectsGrid title="Projects" projects={projects} />
    </Container>
    <Footer/>
    </div>
  );
}

export default ClassicPortfolio;