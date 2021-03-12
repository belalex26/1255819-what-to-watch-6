import {createSelector} from 'reselect';
import {getFilmsByGenre} from './utils';

const getActiveGenre = (state) => state.activeGenre;
const getFilms = (state) => state.films;
const getVisibleFilmsCount = (state) => state.visibleFilmsCount;

export const getVisibleFilms = createSelector(
    [getActiveGenre, getFilms, getVisibleFilmsCount],
    (activeGenre, films, visibleFilmsCount) => {
      const allFilms = getFilmsByGenre(films, activeGenre);
      return allFilms.slice(0, visibleFilmsCount);
    }
);

export const getAllFilmsByGenre = createSelector(
    [getActiveGenre, getFilms],
    (activeGenre, films) => {
      return getFilmsByGenre(films, activeGenre);
    }
);
