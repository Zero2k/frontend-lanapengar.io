import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { isAuthenticated } from '../utils/auth';

import Layout from './Layout';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import Loan from './Loan';
import Auth from './Auth';
// import Logout from './Logout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      ))
    }
  />
);

export default () => (
  <Router>
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/login" exact component={Login} />
      <Layout>
        <Route path="/loan" exact component={Loan} />
      </Layout>
    </Switch>
  </Router>
);
