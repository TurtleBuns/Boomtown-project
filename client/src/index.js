import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items';
import Profile from './containers/Profile';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Boomtown = () => (
  <BrowserRouter>
    <Switch>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <Route path="/login" component={Login} />
          <Route path="/items" component={Items} />
          <Route path="/profile:id" component={Profile} />
        </Layout>
      </MuiThemeProvider>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
