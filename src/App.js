import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">DosCredoBank</Link>} scroll>
            <Navigation>
                <Link to="/resume">Интернет-банкинг</Link>
                <Link to="/aboutme">О Банке</Link>
                <Link to="/projects">Услуги</Link>
                <Link to="/contact">Контакты</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">DosCredoBank</Link>}>
            <Navigation>
              <Link to="/resume">Интернет-банкинг</Link>
              <Link to="/aboutme">О Банке</Link>
              <Link to="/projects">Услуги</Link>
              <Link to="/contact">Контакты</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
