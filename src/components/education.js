import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={6}>
            <List style={{width: '500px', margin: '-20px'}}>
                <ListItem>
                    <ListItemContent>{this.props.serviceName}</ListItemContent>
                    <ListItemAction>
                        <a href="#"><Icon name="star" /></a>
                    </ListItemAction>
                </ListItem>
            </List>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
