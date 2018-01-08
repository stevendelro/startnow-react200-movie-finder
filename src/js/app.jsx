import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './containers/Search';
import Detail from './containers/Detail';
import PageNotFound from './components/PageNotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/movie/:id' component={Detail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
