import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectListItem from '../components/project_list_item';
import '../../styles/project-list.css';

class ProjectList extends Component {

  renderList(projects){
    return(
      projects.map((project) => (
        <ProjectListItem   key = {project.name}
                            project ={project} />
      ))
    )
  }

  render(){
    return(
      <div className = "project-list-outer">
        <div className = "project-list-inner">
          {this.renderList(this.props.projects)}
        </div>
      </div>
    )
  }

}

// access the application state and pass state to props
function mapStateToProps(state){
  return{
    projects : state.projects
  };
}

export default connect(mapStateToProps)(ProjectList);
