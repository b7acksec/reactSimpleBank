import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import SimpleSlider from './slider';

class Landing extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
                <SimpleSlider/>
            </Cell>
          </Grid>
        </div>
    )
  }
}

export default Landing;
