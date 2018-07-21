import React, {Component} from 'react';

import ProjectListItem from './project_list_item';

import '../../styles/project-list.css';

class ProjectList extends Component{

  constructor(props){
    super(props);

    this.state = {
      projectList:[ ]
    };

  }


  componentDidMount(){
    fetch('./static/projects.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({projectList: data.projects})
      })
  }

  render(){
    const projects = this.state.projectList.map((project) => (
        <ProjectListItem   key = {project.name}
                            project ={project} />
    ));

    return(
      <div className = "project-list-outer">
        <div className = "project-list-inner">
          {projects}
        </div>
      </div>
    )
  }
}

export default ProjectList;
