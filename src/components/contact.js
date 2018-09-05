import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import SimpleMap from './map';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Открытое Акционерное Общество "Дос-Кредобанк"</h2>
              <SimpleMap />
          </Cell>
          <Cell col={6}>
            <h2>Наши контакты</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Monoton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                      +996 (312) 98 69 89
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Monoton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                      +996 (312) 61 21 64
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Monoton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                      office@doscredobank.kg
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
