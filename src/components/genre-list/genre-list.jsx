import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {DEFAULT_GENRE, MAX_GENRES_COUNT} from '../../const';
import {ActionCreator} from '../../store/action';

const getGenreList = (films) => {
  const genres = films.map((film) => film.genre).sort();

  return [DEFAULT_GENRE, ...new Set(genres)].slice(0, MAX_GENRES_COUNT);
};

const GenresList = (props) => {
  const {films, activeGenre, onGenreClick} = props;

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
      PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isFavorite: false,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        released: PropTypes.number.isRequired,
        runTime: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
        videoLink: PropTypes.string.isRequired
      })
  ).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
