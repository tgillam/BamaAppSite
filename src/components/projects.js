import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Website */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alabama_Athletics_logo.svg/2000px-Alabama_Athletics_logo.svg.png) center / cover'}} >Alabama App Website Source</CardTitle>
            <CardText>
              Get the source of our website design.
            </CardText>
            <CardActions border>
              <a href="https://github.com/tgillam/BamaAppSite" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
          {/* Source */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alabama_Athletics_logo.svg/2000px-Alabama_Athletics_logo.svg.png) center / cover'}} >University of Alabama App Redesign</CardTitle>
            <CardText>
              Get the source of our most recent build or watch the video demo.
            </CardText>
            <CardActions border>
              <a href="https://github.com/ekjohnson4/BamaAppAndroid" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button></a>
              <a href="https://youtu.be/CJr7WGcF044" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
              <a href="hhttps://github.com/ekjohnson4/BamaAppAndroid/raw/master/app-debug.apk" rel="noopener noreferrer" target="_blank"><Button colored>Download</Button></a>

            </CardActions>
          </Card>

          {/* Sprints */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alabama_Athletics_logo.svg/2000px-Alabama_Athletics_logo.svg.png) center / cover'}} >Presentations</CardTitle>
            <CardText>
            View our sprint presentations.
            </CardText>
            <CardActions border>
              <a href="https://docs.google.com/presentation/d/1xhR4ZbdfirU4m0OCmt_8gKjifIeaDEK2mdjnA-vrnwI/" rel="noopener noreferrer" target="_blank"><Button colored>Sprint 1</Button></a>
              <a href="https://docs.google.com/presentation/d/1fmD5n_tOuarAmmnYE8b9wvjJXYCOLzVHvhegqVTtkkc" rel="noopener noreferrer" target="_blank"><Button colored>Sprint 2</Button></a>
              <a href="https://docs.google.com/presentation/d/1uTOwS1SAFgtLrSlvk10H4KSFpoKF2zG-cNils_94hcw/" rel="noopener noreferrer" target="_blank"><Button colored>Sprint 3</Button></a>

            </CardActions>
          </Card>

        </div>


      )

    }

  }



  render() {
    return(
      <div>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
