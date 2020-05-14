import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <div>
              <Link to='/dashboard'>Dashboard</Link>>
            </div>
          )}
        />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
      </Switch>
    </>
  );
};

export default Routes;
