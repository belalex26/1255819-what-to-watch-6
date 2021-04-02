import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';

import {getVisibleFilms} from '../../store/selectors';
import {ActionCreator} from '../../store/action';
import {fetchFilmsList} from '../../store/api-actions';

import shapeOfFilm from '../../proptypes/shape-of-film';


const App = (props) => {

  return (

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
        <FilmScreen films={props.films} />
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

  );
};


App.propTypes = PropTypes.arrayOf(
    shapeOfFilm()
).isRequired;

const mapStateToProps = (state) => ({
  films: getVisibleFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(ActionCreator.resetVisibleFilmsCount());
  },
  loadFilmsList() {
    dispatch(fetchFilmsList());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

