import React, { useState, useEffect } from 'react';
import BioSection from "../Components/BioSection";
import ProjectsGrid from '../Components/ProjectsGrid';

import {fetchStateFromFile} from '../Helpers/Utils';

const HomePage = ({ projects }) => {

  const bioMD = '/typography/bio.md';
  const photoUrl = "/img/me.jpg";

  const [bioText, setBioText] = useState('');

    useEffect(() => {
      document.title = "Jacopo Essenziale | Game Developer";
      fetchStateFromFile(bioMD, setBioText);
    }, []);

  return (
    <div>
        <BioSection title="Hey there!" bio={bioText} photo={photoUrl} photoAlt="It's a me, Jacopo!" />
        <ProjectsGrid title="Projects" projects={projects}  />
    </div>
  );
};

export default HomePage;