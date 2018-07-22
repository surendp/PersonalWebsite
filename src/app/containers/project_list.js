import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import ProjectListItem from '../components/project_list_item';
import '../../styles/project-list.css';

import {projectListActionCreator} from "../actions/action_index";

class ProjectList extends Component {

  componentDidMount(){
    this.props.projectListActionCreator();
  }

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
          { this.renderList(this.props.projects) }
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

// pass the action creator as props in ProjectList component
function mapDispatchTOProps(dispatch){
  return bindActionCreators({ projectListActionCreator }, dispatch);
}

export default connect(mapStateToProps, mapDispatchTOProps)(ProjectList);
