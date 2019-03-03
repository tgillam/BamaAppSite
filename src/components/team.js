import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Team extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQFzWCwKll51Mg/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=_yKz1gONZ4BTQZ2bemaVjrYBGKzVk-zXm-SOBOpqTAY"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Tyler Gillam</h2>
            <h4 style={{color: 'grey'}}>Senior CS Student</h4>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <p>Bio here</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <h5>Email</h5>
            <p>tdgillam@crimson.ua.edu</p>
            <h5>Github</h5>
            <p>https://github.com/tgillam</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
          </Cell>
                              <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Ethan Johnson</h2>
            <h4 style={{color: 'grey'}}>Senior CS Student</h4>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <p>Bio here</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <h5>Email</h5>
            <p>ekjohnson4@crimson.ua.edu</p>
            <h5>Github</h5>
            <p>https://github.com/tgillam</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
          </Cell>

                              <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Michael Ahern</h2>
            <h4 style={{color: 'grey'}}>Senior CS Student</h4>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <p>Bio here</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <h5>Email</h5>
            <p>mjahern@crimson.ua.edu</p>
            <h5>Github</h5>
            <p>https://github.com/tgillam</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
          </Cell>

                              <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Nicholas Brunelle</h2>
            <h4 style={{color: 'grey'}}>Senior CS Student</h4>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <p>Bio here</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
            <h5>Email</h5>
            <p>nabrunelle@crimson.ua.edu</p>
            <h5>Github</h5>
            <p>https://github.com/tgillam</p>
            <hr style={{borderTop: '3px solid #990000', width: '50%'}}/>
          </Cell>

          
        </Grid>
      </div>
    )
  }
}

export default Team;
