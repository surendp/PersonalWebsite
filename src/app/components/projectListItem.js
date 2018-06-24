
import React from 'react';

const ProjectListItem = ({project, url}) => (
  <div className="project-list-item">
    <h3>{project.name}</h3>
    <div className="project-image">
      <img src={url} alt="Project Snapshot" />
    </div>
    <h4>{project.description}</h4>
    <a href = {project.url.githubLink}>GitHub link</a>
    <a href = {project.url.projectLink}>Go To Project</a>
  </div>
)

export default ProjectListItem;
