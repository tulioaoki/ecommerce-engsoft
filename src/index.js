import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import reducer from './reducers';
import middleware from './middleware';
import App from './App';
import { PRIMARY_COLOR, SECONDARY_COLOR, AZUL_MARINHO } from './utils/colors';

const store = createStore(reducer, middleware);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: PRIMARY_COLOR,
      dark: AZUL_MARINHO,
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: SECONDARY_COLOR,
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
