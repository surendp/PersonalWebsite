
import React from 'react';
//
// const ProjectListItem = ({project}) => (
//   <div className="project-list-item">
//     <h3>{project.name}</h3>
//     <div className="project-image">
//       <img src={project.image.url} alt="Project Snapshot" />
//     </div>
//     <h4>{project.description}</h4>
//     <a href = {project.url.githubLink}>GitHub link</a>
//     <a href = {project.url.projectLink}>Go To Project</a>
//   </div>
// )


const ProjectListItem = ({project}) => (
  <div className="project-list-item">
    <h3>{project.name}</h3>
    <div className="project-image">
      <img src={"#"} alt="Project Snapshot" />
    </div>
    <h4>{project.description}</h4>
    <a href = {"#"}>GitHub link</a>
    <a href = {"#"}>Go To Project</a>
  </div>
)

export default ProjectListItem;
