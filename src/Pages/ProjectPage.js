import React from 'react';
import { Typography, Button } from '@mui/material';
import { useParams } from "react-router-dom";

const ProjectPage = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>{project.title}</Typography>
      <img src={project.image} alt={project.title} style={{ width: '100%', marginBottom: '20px' }} />
      <Typography variant="body1">{project.description}</Typography>
      <Button
        variant="contained"
        color="primary"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: '20px' }}
      >
        Visit Project
      </Button>
    </div>
  );
};

export default ProjectPage;