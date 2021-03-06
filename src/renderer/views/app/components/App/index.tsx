import { observer } from 'mobx-react-lite';
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Style } from '../../style';
import { Toolbar } from '../Toolbar';
import { Line, StyledApp } from './style';
import store from '../../store';

const GlobalStyle = createGlobalStyle`${Style}`;

const App = observer(() => {
  return (
    <ThemeProvider
      theme={{ ...store.theme, animations: store.settings.object.animations }}
    >
      <StyledApp>
        <GlobalStyle />
        <Toolbar />
        <Line />
      </StyledApp>
    </ThemeProvider>
  );
});

export default hot(App);
