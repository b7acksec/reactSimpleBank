import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutBank';
import Contact from './contact';
import Service from './service';
import OnlineBanking from './onlineBanking';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Service} />
    <Route path="/resume" component={OnlineBanking} />
  </Switch>
)

export default Main;
