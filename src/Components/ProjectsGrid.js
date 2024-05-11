import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ title, projects }) => {
  return (
    <div marginTop="1em">
        <Typography variant="h5" gutterBottom>
            {title}
        </Typography>
        <Grid container spacing={3}>
        {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard project={project} />
            </Grid>
        ))}
        </Grid>
    </div>
  );
};

export default ProjectsGrid;
