import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.INIT,
  isDataLoaded: false,
  isDataLoading: false,
  isPromoLoaded: false,
  isPromoLoading: false,
  isFilmLoaded: false,
  isReviewsLoaded: false,
  films: [],
  film: {},
  reviews: [],
  favoriteFilms: [],
  promo: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.films,
        isDataLoaded: action.payload.isDataLoaded,
      };
    case ActionType.SET_IS_FILMS_LIST_LOADING:
      return {
        ...state,
        isFilmsListLoading: action.payload,
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promo: action.payload.film,
        isPromoLoaded: action.payload.isPromoLoaded,
      };
    case ActionType.SET_IS_PROMO_LOADING:
      return {
        ...state,
        isPromoLoading: action.payload,
      };
    case ActionType.LOAD_FAVORITE_FILMS_LIST:
      return {
        ...state,
        favoriteFilms: action.payload,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload.film,
        isFilmLoaded: action.payload.isFilmLoaded,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload.reviews,
        isReviewsLoaded: action.payload.isReviewsLoaded,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_FAVORITE_STATUS:
      const filmToUpdate = action.payload;
      return {
        ...state,
        promo: filmToUpdate.id === state.promo.id ? filmToUpdate : state.promo,
        film: filmToUpdate.id === state.film.id ? filmToUpdate : state.film,
      };
  }

  return state;
};

export {dataReducer};
