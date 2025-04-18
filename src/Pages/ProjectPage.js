// src/Components/ProjectPage.js
import React from 'react';
import { Typography, Button, Chip } from '@mui/material';
import { useParams } from "react-router-dom";

const ProjectPage = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const tags = project.tags ? project.tags.map((tag, index) => (
    <Chip key={index} label={tag} variant="outlined" style={{ margin: '4px' }} />
  )) : null;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>{project.title}</Typography>
      <img src={project.image} alt={project.title} style={{ width: '100%', marginBottom: '20px' }} />
      <Typography variant="body1">{project.description}</Typography>
      <Typography variant="subtitle1" style={{ color: 'gray' }}>Year: {project.year}</Typography>
      <div style={{ marginTop: '20px' }}>
        {tags}
      </div>
      <Button
        variant="contained"
        color="primary"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: '20px' }}
      >
        See more...
      </Button>
    </div>
  );
};

export default ProjectPage;