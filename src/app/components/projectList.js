import React, {Component} from 'react';

import ProjectListItem from './projectListItem';

import '../../styles/project-list.css';

import PersonalWebsite from '../../images/portfolio.png';
import HimalayanKitchen from '../../images/himalayan-kitchen-frontpage.png';
import BoardGame from '../../images/board-game.png';
import MineSweeper from '../../images/minesweeper.png';
import VotingApp from '../../images/voting-app.png';
import YoutubeVideoPlayer from '../../images/youtube-video-payer.png';

class ProjectList extends Component{

  constructor(props){
    super(props);

    this.state = {
      projectList:[ { name:"Personal Website",description:"A website for displaying personal information.",
                      image: { url: PersonalWebsite},
                      url: {githubLink: "https://github.com/surendp/PersonalWebsite",
                            projectLink: "http://localhost:8080/"
                          }
                    },
                    { name:"Himalayan Kitchen",description:"A restaurant website",
                      image: { url: HimalayanKitchen},
                      url: {githubLink: "https://github.com/surendp/himalayankitchen",
                            projectLink: "https://secret-castle-23220.herokuapp.com"
                          }
                    },
                    {name:"Board Game", description:"A web Game",
                      image: { url: BoardGame},
                      url: {githubLink: "https://github.com/surendp/",
                        projectLink: "http://users.metropolia.fi/~surendp/BoardGameCanvasOopJqueryVersion_0.1/FirstPage/"
                      }
                    },
                    {name:"MineSweeper", description:"A console Game",
                      image: { url: MineSweeper},
                      url: {githubLink: "https://github.com/surendp/Minesweeper", projectLink: "#"}
                    },
                    {name:"Voting App", description:"A mini project",
                      image: { url: VotingApp},
                      url: {githubLink: "https://github.com/surendp/VotingApp", projectLink: "#"}
                    },
                    {name:"Youtube Videos Player", description:"An application to play youtube videos",
                      image: { url: YoutubeVideoPlayer},
                      url: {githubLink: "https://github.com/surendp/YoutubeVideosStreamingApp", projectLink: "#"}
                    },
                  ]
    };

  }


  componentDidMount(){
    fetch('./projects.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({projectList: data.projects})
      })
  }

  render(){
    const projects = this.state.projectList.map((project) => (
        <ProjectListItem   key = {project.name}
                            url = {PersonalWebsite}
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
