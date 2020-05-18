import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import IndexStyles from './styles';
import Routes from './routes';
import CombineContext from './contexts';

function App() {
  return (
    <BrowserRouter>
      <IndexStyles>
        <CombineContext>
          <Routes />
        </CombineContext>
      </IndexStyles>
    </BrowserRouter>
  );
}

export default App;
