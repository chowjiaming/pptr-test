import React from 'react';
import reactDom from 'react-dom';
import {App} from './src/App';
import {theme} from './src/styles/theme';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './src/styles/GlobalStyle';

reactDom.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
