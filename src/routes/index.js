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
import PersonalLoan from './PersonalLoan';
import Article from './Article';
import Auth from './Auth';
import EditLender from './EditLender';
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
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute
        path="/dashboard/lender/edit/:id"
        exact
        component={EditLender}
      />
      <Route path="/auth" exact component={Auth} />
      <Route path="/login" exact component={Login} />
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/lan" exact component={Loan} />
        <Route path="/privatlan" exact component={PersonalLoan} />
        <Route path="/artiklar" exact component={Article} />
      </Layout>
    </Switch>
  </Router>
);
