import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexStyles from './styles';
import Routes from './routes';
import SideBarProvider from './contexts/sideBarContext';
import SideRoutesProvider from './contexts/sideRoutes';

function App() {
  return (
    <BrowserRouter>
      <IndexStyles>
        <SideRoutesProvider>
          <SideBarProvider>
            <Routes />
          </SideBarProvider>
        </SideRoutesProvider>
      </IndexStyles>
    </BrowserRouter>
  );
}

export default App;
