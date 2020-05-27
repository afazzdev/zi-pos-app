import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../components/layout';
import { useSideRoutesContext } from '../../contexts/sideRoutesContext';
import Loader from '../../components/loader';

const helperProps = (el: any) => {
  let props = {};
  if (el.render) {
    props = {
      path: el.path,
      render: el.render,
      exact: true,
    };
  }
  if (el.component) {
    props = {
      path: el.path,
      component: el.component,
      exact: true,
    };
  }

  return { ...props };
};

const IndexDashboard = () => {
  const [sidebar] = useSideRoutesContext();
  return (
    <Layout sidebar={sidebar}>
      <Suspense fallback={<Loader />}>
        <Switch>
          {Object.values(sidebar).map((side) => {
            if (!side.children) {
              return <Route {...helperProps(side)} />;
            }

            return Object.values(side.children).map((child) => {
              return <Route {...helperProps(child)} />;
            });
          })}
          <Redirect to='/dashboard' />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default IndexDashboard;
