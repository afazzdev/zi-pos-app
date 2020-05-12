import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={() => <div>Home</div>} />
      </Switch>
    </>
  );
};

export default Routes;
