import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Divider, Typography, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Card>
      {/* <CardActionArea component={Link} href={project.link} target="_blank"> */}
      <CardActionArea component={RouterLink} to={`/projects/${project.id}`}>
        <CardMedia
          component="img"
          alt={project.title}
          height="200"
          image={project.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
            <Typography gutterBottom variant='h6' color="textSecondary" component="div">
            {project.year}
            </Typography>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
          <Divider style={{ marginTop: '1em' }}/>
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