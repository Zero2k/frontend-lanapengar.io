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
import Login from './Login';
import Loan from './Loan';
import PersonalLoan from './PersonalLoan';
import Article from './Article';

/* Admin */
import Dashboard from './Admin/Dashboard';
import Lender from './Admin/Lender/Lender';
import Auth from './Auth';
import EditLender from './Admin/Lender/EditLender';
import NewLender from './Admin/Lender/NewLender';
import Section from './Admin/Section/Section';
import NewSection from './Admin/Section/NewSection';
import EditSection from './Admin/Section/EditSection';
// import Logout from './Logout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
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
      <PrivateRoute path="/dashboard/lender" exact component={Lender} />
      <PrivateRoute
        path="/dashboard/lender/edit/:id"
        exact
        component={EditLender}
      />
      <PrivateRoute path="/dashboard/lender/new" exact component={NewLender} />
      <PrivateRoute path="/dashboard/section" exact component={Section} />
      <PrivateRoute
        path="/dashboard/section/new"
        exact
        component={NewSection}
      />
      <PrivateRoute
        path="/dashboard/section/edit/:id"
        exact
        component={EditSection}
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
