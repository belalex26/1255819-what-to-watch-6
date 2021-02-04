import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

const App = ({title, genre, year, filmsCard}) => {

  return (
    <MainScreen
      title = {title}
      genre = {genre}
      year = {year}
      filmsCard = {filmsCard}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  filmsCard: PropTypes.array.isRequired
};

export default App;
