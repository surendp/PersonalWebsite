import React, {Component} from 'react';

import ProjectListItem from './projectListItem';

import '../../styles/project-list.css';
import HimalayanKitchen from '../../images/himalayan-kitchen-frontpage.png';
import BoardGame from '../../images/board-game.png';
import MineSweeper from '../../images/minesweeper.png';
import VotingApp from '../../images/voting-app.png';
import YoutubeVideoPlayer from '../../images/youtube-video-payer.png';

class ProjectList extends Component{

  constructor(props){
    super(props);

    this.state = {
      projectList:[ { name:"Himalayan Kitchen",description:"A restaurant website",
                      image: { url: HimalayanKitchen}
                    },
                    {name:"Board Game", description:"A web Game",
                      image: { url: BoardGame}
                    },
                    {name:"MineSweeper", description:"A console Game",
                      image: { url: MineSweeper}
                    },
                    {name:"Voting App", description:"A mini project",
                      image: { url: VotingApp}
                    },
                    {name:"Youtube Videos Player", description:"An application to play youtube videos",
                      image: { url: YoutubeVideoPlayer}
                    },
                  ]
    };

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
