import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import shapeOfFilm from '../../proptypes/shape-of-film';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import MoreLikeThis from '../more-like-this/more-like-this';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainScreen />
        </Route>

        <Route path='/login' exact>
          <SingInScreen />
        </Route>

        <Route path='/mylist' exact>
          <MyListScreen />
        </Route>

        <Route path='/films/:id' exact>
          <FilmScreen />
          <MoreLikeThis />
        </Route>

        <Route path='/films/:id/review' exact>
          <AddReview />
        </Route>

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

App.propTypes = PropTypes.arrayOf(
    shapeOfFilm()
).isRequired;

export default App;
