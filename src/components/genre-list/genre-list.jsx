import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {DEFAULT_GENRE, MAX_GENRES_COUNT} from '../../const';
import {ActionCreator} from '../../store/action';
import shapeOfFilm from '../../proptypes/shape-of-film';

const getGenreList = (films) => {
  const genres = films.map((film) => film.genre).sort();

  return [DEFAULT_GENRE, ...new Set(genres)].slice(0, MAX_GENRES_COUNT);
};

const GenresList = (props) => {
  const {films, activeGenre, onGenreClick} = props;
  // console.log(props);

  const genres = getGenreList(films);

  const handleGenreClick = ({currentTarget}) => {
    onGenreClick(currentTarget.dataset.genre);
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <li onClick={handleGenreClick} key={`genre-${index}`} data-genre={genre} className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(
      shapeOfFilm()
  ).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({movies}) => ({
  activeGenre: movies.activeGenre,
  films: movies.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetVisibleFilmsCount());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
