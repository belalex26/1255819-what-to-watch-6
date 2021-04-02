import React from 'react';
import PropTypes from 'prop-types';

import shapeOfFilm from '../../proptypes/shape-of-film';

const FilmOverView = (props) => {
  const {film} = props;

  return (
    <div className="movie-card__text" data-testid="film-over-view">
      <p>{film.description}</p>
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, \n`)}</strong></p>
    </div>
  );
};

FilmOverView.propTypes = PropTypes.arrayOf(
    shapeOfFilm()
).isRequired;

export default FilmOverView;
