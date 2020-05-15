import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexStyles from './styles';
import Routes from './routes';
import DrawerProvider from './contexts/drawerContext';

function App() {
  return (
    <BrowserRouter>
      <IndexStyles>
        <DrawerProvider>
          <Routes />
        </DrawerProvider>
      </IndexStyles>
    </BrowserRouter>
  );
}

export default App;
