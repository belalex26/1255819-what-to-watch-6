import React, {useState} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';

const MovieList = (props) => {
  const [activeFilmState, setActiveFilmState] = useState(0);
  const handleOnMouseOver = (film) => {
    setActiveFilmState({...activeFilmState, id: film.id});
  };

  return (
    <div className="catalog__movies-list" data-active={activeFilmState}>
      {
        props.films.map((film) => {
          return <FilmCard
            name={film.name}
            id={film.id}
            previewImage={film.previewImage}
            previewVideoLink={film.previewVideoLink}
            posterImage={film.posterImage}
            key={film.name + film.id}
            onMouseOver={handleOnMouseOver}/>;
        })
      }
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        "name": PropTypes.string.isRequired,
        "previewImage": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired
      })
  ).isRequired
};

export default MovieList;
