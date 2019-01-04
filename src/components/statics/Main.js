import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Playground from '../../containers/Playground';
import { NotFound } from './NotFound';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';

const AsyncProjectDetail = asyncComponent(() => {
  return import('../projects/projectDetail/ProjectDetail');
});

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/projects' component={ Projects } />
      <Route exact path='/projects/:id' component={ AsyncProjectDetail } />
      <Route exact path='/contact' component={ Contact } />
      <Route exact path='/playground' component={ Playground } />
      <Route path='/not-found' component={ NotFound } />
      <Redirect from='/*' to='not-found' />
    </Switch>
  </div>
);

export default Main;
