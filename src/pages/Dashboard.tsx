import React from 'react';
import Layout from '../components/layout';
import { Route, Switch } from 'react-router-dom';
import { useSideRoutesContext } from '../contexts/sideRoutes';

const Dashboard = () => {
  const [sidebar] = useSideRoutesContext();
  return (
    <Layout sidebar={sidebar}>
      <Switch>
        <Route path='/dashboard/buy' render={() => <div>Buy</div>} />
        <Route path='/dashboard/sell' render={() => <div>sell</div>} />
        <Route
          path='/dashboard/cashier-names'
          render={() => <div>cashier-names</div>}
        />
        <Route path='/dashboard/owner' render={() => <div>owner</div>} />
      </Switch>
    </Layout>
  );
};

export default Dashboard;
