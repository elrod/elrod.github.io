import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip, Link } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardActionArea component={Link} href={project.link} target="_blank">
        <CardMedia
          component="img"
          alt={project.title}
          height="200"
          image={project.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
          <div style={{ marginTop: '1em' }}>
            {project.tags.map((tag, index) => (
              <Chip key={index} label={tag} style={{ marginRight: '0.5em' }} />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;