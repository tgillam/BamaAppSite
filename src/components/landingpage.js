import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Landing extends Component {
  render() {
    return(

      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
                  <div class="your-centered-div">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CJr7WGcF044" frameborder="0" allowfullscreen=""></iframe>
    </div>
            
          </Cell>
        </Grid>
            <div className="about">
        <h1>Our Project</h1>
        <h4>We redesigned the University of Alabama mobile app with a list of goals in mind.</h4>
        <h5>1. Improve several user interface design flaws including usability, consistency, and more.</h5>
        <h5>2. Add new features that would make students more likely to use the app.</h5>
        <h5>3. Condense many University mobile applications into one, easy to use app.</h5>
        <h6>For more information on our project visit this link: shorturl.at/joprx</h6>

    </div>
      </div>
    )
  }
}

export default Landing;
