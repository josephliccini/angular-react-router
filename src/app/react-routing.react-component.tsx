import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { history } from './history.service';

import {
    Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import MyReactComponent from './my-react.react-component';

const ReactRouting = () => (
  <Router history={history}>
      <Route path='/react' component={MyReactComponent}/>
  </Router>
);

export default ReactRouting;