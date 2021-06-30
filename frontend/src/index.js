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

import HomePage from './pages/Home';
import SearchPage from './pages/Search';

import RestaurantPage from './pages/Restaurant';
import WriteReviewPage from './pages/WriteReview';

import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import ValidationPage from './pages/Validation';
import SuccessPage from './pages/Success';

import ProfilPage from './pages/Profil';
import EditPorfilPage from './pages/EditProfil';
import RestaurantsProfil from './pages/RestaurantsProfil';
import NewRestaurantPage from './pages/NewRestaurant';
import CommentsProfilPage from './pages/CommentsProfil';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/search' component={SearchPage} />

            <Route exact path='/restaurant' component={RestaurantPage} />
            <Route exact path='/restaurant/write_review' component={WriteReviewPage} />

            <Route exact path='/signin' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/signup/validation' component={ValidationPage} />
            <Route exact path='/signup/success' component={SuccessPage} />

            <Route exact path='/user/' component={ProfilPage} />
            <Route exact path='/user/comments' component={CommentsProfilPage} />
            <Route exact path='/user/restaurants' component={RestaurantsProfil}/>
            <Route exact path='/user/restaurants/new' component={NewRestaurantPage} />
            <Route exact path='/user/edit' component={EditPorfilPage}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);