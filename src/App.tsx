import React from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Career from './Career';
import Contact from './Contact';
import Skill from './Skill';

class app extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/skill'} component={Skill}/>
              <Route path={'/career'} component={Career}/>
              <Route path={'/contact'} component={Contact}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default app
