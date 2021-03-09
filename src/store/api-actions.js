  
import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {adaptFilmToClient} from './adapt-film-to-client';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map(adaptFilmToClient))
    .then((films) => dispatch(ActionCreator.loadFilms(films, true)))
    .catch(({error}) => dispatch(ActionCreator.fetchFilmsListError(error)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => dispatch(ActionCreator.loadPromoFilm(film, true)))
    .catch(({error}) => dispatch(ActionCreator.fetchPromoFilmError(error)))
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => data.map(adaptFilmToClient))
    .then((films) => dispatch(ActionCreator.loadFavoriteFilmsList(films)))
    .catch(({error}) => dispatch(ActionCreator.fetchFavoriteFilmsListError(error)))
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => dispatch(ActionCreator.loadFilm(film, true)))
    .catch(({error}) => dispatch(ActionCreator.fetchFilmByIdError(error)))
);

export const fetchReviewsById = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data, true)))
    .catch(({error}) => dispatch(ActionCreator.fetchReviewsByIdError(error)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH_ERROR)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);
