import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexStyles from './styles';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <IndexStyles>
        <Routes />
      </IndexStyles>
    </BrowserRouter>
  );
}

export default App;
