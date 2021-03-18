import {createSelector} from 'reselect';
import {getFilmsByGenre} from '../utils';
import {NameSpace} from './root-reducer';

export const getActiveGenre = (state) => state[NameSpace.VIEW].activeGenre;
export const getVisibleFilmsCount = (state) => state[NameSpace.VIEW].visibleFilmsCount;
export const getReviewFormDisabledStatus = (state) => state[NameSpace.VIEW].isReviewFormDisabled;

export const getAuthorizationStatus = (state) => state[NameSpace.FILMS].authorizationStatus;
export const getDataLoadedStatus = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getFilmsListLoadingStatus = (state) => state[NameSpace.FILMS].isFilmsListLoading;
export const getPromoLoadedStatus = (state) => state[NameSpace.FILMS].isPromoLoaded;
export const getPromoLoadingStatus = (state) => state[NameSpace.FILMS].isPromoLoading;
export const getFilmLoadedStatus = (state) => state[NameSpace.FILMS].isFilmLoaded;
export const getReviewsLoadedStatus = (state) => state[NameSpace.FILMS].isReviewsLoaded;
export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getFilm = (state) => state[NameSpace.FILMS].film;
export const getReviews = (state) => state[NameSpace.FILMS].reviews;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].favoriteFilms;
export const getPromo = (state) => state[NameSpace.FILMS].promo;

export const getErrorMessage = (state) => state[NameSpace.ERRORS].errorMessage;

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
