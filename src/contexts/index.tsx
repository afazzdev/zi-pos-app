import React from 'react';

import SideBarProvider from './sideBarContext';
import SideRoutesProvider from './sideRoutesContext';
import DashboardProvider from './dashboardContext';
import I18nextProvider from './i18nextContext';

const CombineContext = ({ children }: { children: React.ReactChild }) => {
  return (
    <I18nextProvider>
      <SideRoutesProvider>
        <SideBarProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </SideBarProvider>
      </SideRoutesProvider>
    </I18nextProvider>
  );
};

export default CombineContext;
