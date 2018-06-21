
import React from 'react';

const ProjectListItem = ({project}) => (
  <div className="project-list-item">
    <h3>{project.name}</h3>
    <div className="project-image">
      <img src={project.image.url} alt="Project Snapshot" />
    </div>
    <h4>{project.description}</h4>
  </div>
)

export default ProjectListItem;
