import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import BioSection from "./Components/BioSection";
import ProjectsGrid from './Components/ProjectsGrid';

function App() {

  const bioMD = '/typography/bio.md';
  const photoUrl = "/img/me.jpg";
  const [bioText, setBioText] = useState('');

  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      tags: ['React', 'Material UI', 'Web Development'],
      link: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'project2.jpg',
      tags: ['JavaScript', 'Node.js', 'Express'],
      link: 'https://example.com/project2'
    },
    // Aggiungi altri progetti qui...
  ];

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
    <Container marginTop="1em">
      <BioSection title="Hey there!" bio={bioText} photo={photoUrl} photoAlt="It's a me, Jacopo!" />
      <ProjectsGrid title="Projects" projects={projects} />

    </Container>
  );
}

export default App;
