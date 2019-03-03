import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Background from './img/bryantdenny.jpeg';


const myStyles = {
  'backgroundImage': `url( ${Background} )`,
  'background-position' : 'center',
    backgroundSize: 'cover',
    height: '84.8vh'
}

class Landing extends Component {
  render() {
    return(
      <header style = {myStyles}>
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
                  <div class="your-centered-div">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DnNfLOJirgY" frameborder="0" allowfullscreen=""></iframe>
    </div>
            
          </Cell>
        </Grid>
      </div>
      </header>
    )
  }
}

export default Landing;
