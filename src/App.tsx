import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexStyles from './styles';
import Routes from './routes';
import DrawerProvider from './contexts/drawerContext';
import SideRoutesProvider from './contexts/sideRoutes';

function App() {
  return (
    <BrowserRouter>
      <IndexStyles>
        <SideRoutesProvider>
          <DrawerProvider>
            <Routes />
          </DrawerProvider>
        </SideRoutesProvider>
      </IndexStyles>
    </BrowserRouter>
  );
}

export default App;
