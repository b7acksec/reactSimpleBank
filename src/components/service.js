import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Service extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://files.storeland.net/f592/803/logo%20contact.png) center / cover'}} >Contact</CardTitle>
            <CardText>
                Денежные переводы физических лиц без открытия банковского счета в рублях, долларах США, евро.
                Сегодня воспользоваться услугами CONTACT можно в свыше 400 000 пунктах Системы на территории России, стран ближнего и дальнего зарубежья.
            </CardText>
            <CardActions border>
              <Button colored>Подробнее</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/e/ef/ZolotayaKorona.svg) center / cover'}} >Золотая Корона</CardTitle>
            <CardText>
                Система денежных переводов "Золотая Корона" - это мгновенные денежные переводы без открытия счета по России, СНГ и в страны дальнего зарубежья.
                Партнерами системы являются свыше 250 банков на всей территории СНГ.
                Тарифы: 0,95 % от суммы перевода
            </CardText>
            <CardActions border>
              <Button colored>Подробнее</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://psm7.com/wp-content/uploads/2015/12/unistream.jpg) center / cover'}} >Юнистрим</CardTitle>
            <CardText>
                Для перевода денежных средств за границу представляем Вам систему денежных переводов "Юнистрим".
                Эта международная система срочных денежных переводов поможет Вам отправить деньги Вашим родным и знакомым без открытия банковского счета.
            </CardText>
            <CardActions border>
              <Button colored>Подробнее</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Информация о кредитах</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Информация о депозитах</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Информация о картах</h1></div>
      )
    }

  }



  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Переводы</Tab>
          <Tab>Кредиты</Tab>
          <Tab>Депозиты</Tab>
          <Tab>Карты</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Service;
