import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Divider, Typography, Chip, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardActionArea component={RouterLink} to={`/projects/${project.id}`}>
        {project.video ? (
          <video
            src={project.video}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <CardMedia
            component="img"
            alt={project.title}
            height="200"
            image={project.image}
          />
        )}
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" marginBottom={0} component="div">
              {project.title}
            </Typography>
            <ChevronRightIcon marging='auto' fontSize='large' sx={{color: '#5FB49C'}} />
          </Box>
          <Typography gutterBottom variant='h6' color="textSecondary" component="div">
            {project.year}
          </Typography>
          <Typography variant="body2" component="p">
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