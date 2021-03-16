import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import MoreLikeThis from '../more-like-this/more-like-this';

import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route path='/' exact >
          <MainScreen />
        </Route>

        <Route path='/login' exact>
          <SingInScreen />
        </Route>

        <PrivateRoute exact
          path='/mylist'
          render={() => <MyListScreen />}
        >
        </PrivateRoute>

        <Route path='/films/:id' exact>
          <FilmScreen />
          <MoreLikeThis />
        </Route>

        <PrivateRoute exact
          path='/films/:id/review'
          render={() => <AddReview />}
        >
        </PrivateRoute>

        <Route path='/player/:id' exact >
          <Player />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default App;

