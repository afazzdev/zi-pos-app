import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={() => <div>Home</div>} />
        <Route path='/login' component={Login} />
      </Switch>
    </>
  );
};

export default Routes;
