import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = ({title, genre, year, filmsCard}) => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            title = {title}
            genre = {genre}
            year = {year}
            filmsCard = {filmsCard}
          />
        </Route>
        <Route exact path="/login">
          <SingInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="films/:id">
          <FilmScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  filmsCard: PropTypes.array.isRequired
};

export default App;
