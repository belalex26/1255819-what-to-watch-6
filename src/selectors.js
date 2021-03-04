import {createSelector} from 'reselect';
import {DEFAULT_GENRE} from './const';

const getActiveGenre = (state) => state.activeGenre;
const getFilms = (state) => state.films;

const getFilmsByGenre = (films, genre) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getVisibleFilms = createSelector(
    [getActiveGenre, getFilms],
    (activeGenre, films) => {
      return getFilmsByGenre(films, activeGenre);
    }
);