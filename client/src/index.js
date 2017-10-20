import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import Items from './containers/Items/';
import Profile from './containers/Profile';
import Header from './components/Header';

injectTapEventPlugin();

const Boomtown = () => (
  <BrowserRouter>
    <Switch>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Layout>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Items} />
            <Route path="/profile/:id" component={Profile} />
          </Layout>
        </Provider>
      </MuiThemeProvider>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
