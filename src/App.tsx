import React from 'react';
import './App.css';
import Home from './Home';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Career from './Career';
import Blog from './Blog';
import Contact from './Contact';
import Skill from './Skill';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/skill'} component={Skill}/>
              <Route path={'/career'} component={Career}/>
              <Route path={'/blog'} component={Blog}/>
              <Route path={'/contact'} component={Contact}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App
