import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

import shapeOfFilm from '../../proptypes/shape-of-film';

const FilmOverView = (props) => {

  const {id} = useParams();
  const movie = props.films.find((film) => film.id === +id);
  return (
    <div className="movie-card__text">
      <p>{props.films.description}</p>
      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, \n`)}</strong></p>
    </div>
  );
};

FilmOverView.propTypes = PropTypes.arrayOf(
    shapeOfFilm()
).isRequired;

export default FilmOverView;
