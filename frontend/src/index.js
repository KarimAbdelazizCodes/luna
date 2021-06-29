// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux state-control
import { Provider } from 'react-redux';
import store from './store';

// Styling
import { ThemeProvider } from 'styled-components';
import { defaultTheme , GlobalStyle } from './theme';

// Routing
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from 'react-router-dom';

import Home  from './pages/Home';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);