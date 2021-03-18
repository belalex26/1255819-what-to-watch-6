import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {AppRoute} from '../../const';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>

      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SingInScreen />
        </Route>

        <PrivateRoute exact
          path={AppRoute.MY_LIST}
          render={() => <MyListScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen />
        </Route>

        <PrivateRoute exact
          path={AppRoute.ADD_REVIEW}
          render={() => <AddReview />}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.PLAYER}>
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

