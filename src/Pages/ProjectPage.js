import React, { useState, useEffect } from 'react';
import { Typography, Button, Chip } from '@mui/material';
import { useParams } from "react-router-dom";
import { People, Build, Computer, BusinessCenter, Work } from '@mui/icons-material';
import { MuiMarkdown } from 'mui-markdown';
import {fetchStateFromFile} from '../Helpers/Utils';

const ProjectPage = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [longDescription, setLongDescription] = useState(null);

  useEffect(() => {
    if(project && project.title)
    {
      console.log(document.title);
      var title=project.title + " | Jacopo Essenziale";
      document.title = title;
      console.log(document.title);
    }
    if(project && project.typography)
    {
      fetchStateFromFile(project.typography, setLongDescription);
    }
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const tags = project.tags ? project.tags.map((tag, index) => (
    <Chip key={index} label={tag} variant="outlined" style={{ margin: '4px' }} />
  )) : null;
  
  const platforms = project.platforms ? project.platforms.map((platform, index) => (
    <Chip key={index} label={platform} variant="outlined" style={{ margin: '4px' }} />
  )) : null;
  
  return (
    <div>
    <Typography variant="h4" gutterBottom>{project.title}</Typography>
    <img src={project.image} alt={project.title} style={{ width: '100%'}} />      
    {/* Optional Info Box */}
    {(project.year || project['dev-time'] || project['team-size'] || project.engine || project.studio || project.role || platforms || tags) && (
      <div style={{ marginTop: '20px', padding: '16px', border: '1px solid #424242', borderRadius: '4px' }}>
      <Typography variant="subtitle1">Project Details</Typography>
      <Typography variant="subtitle1" gutterBottom style={{ color: 'gray' }}>Year: {project.year}</Typography>
      {project.role && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Work fontSize="small" style={{ marginRight: '8px' }} />
          <Typography variant="body2">Role: {project.role}</Typography>
        </div>
      )}
      {project.studio && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BusinessCenter fontSize="small" style={{ marginRight: '8px' }} />
          <Typography variant="body2">Studio: {project.studio}</Typography>
        </div>
      )}
      {project['dev-time'] && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Build fontSize="small" style={{ marginRight: '8px' }} />
        <Typography variant="body2">Development Time: {project['dev-time']}</Typography>
        </div>
      )}
      {project['team-size'] && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <People fontSize="small" style={{ marginRight: '8px' }} />
        <Typography variant="body2">Team Size: {project['team-size']}</Typography>
        </div>
      )}
      {project.engine && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Computer fontSize="small" style={{ marginRight: '8px' }} />
        <Typography variant="body2">Engine: {project.engine}</Typography>
        </div>
      )}
      {/* Platforms */}
      {project.platforms && (
        <div style={{ marginTop: '20px'}}>
        <Typography variant="subtitle1" gutterBottom>Platforms</Typography>
        {platforms}
        </div>
      )}
      {project.tags && !project.platforms && (
        <div >
        <Typography variant="subtitle1" gutterBottom>Tags</Typography>
        {tags}
        </div>
      )}
      </div>
    )}
      <Typography variant="body1" marginTop={'20px'}>
        {/* Check if the typography field exists */}
        {longDescription ? (
          <MuiMarkdown>{longDescription}</MuiMarkdown>
        ) : (
          project.description
        )}
      </Typography>
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