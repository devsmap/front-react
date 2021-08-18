import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import GlobalStyle from './styles/globals';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <StylesProvider injectFirst>
        <Routes />
      </StylesProvider>
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
