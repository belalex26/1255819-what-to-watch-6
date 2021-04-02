import {ActionCreator} from './action';
import {AuthorizationStatus, ApiRoute} from '../const';
import {adaptFilmToClient} from './adapt-film-to-client';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsFilmsListLoading(true));
  return api.get(ApiRoute.FILMS)
    .then(({data}) => data.map(adaptFilmToClient))
    .then((films) => {
      dispatch(ActionCreator.loadFilms(films, true));
      dispatch(ActionCreator.setIsFilmsListLoading(false));
    })
    .catch((error) => dispatch(ActionCreator.fetchFilmsListError(error)));
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsPromoLoading(true));
  return api.get(ApiRoute.PROMO_FILM)
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => {
      dispatch(ActionCreator.loadPromoFilm(film, true));
      dispatch(ActionCreator.setIsPromoLoading(false));
    })
    .catch((error) => dispatch(ActionCreator.fetchPromoFilmError(error)));
};

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE_FILMS)
    .then(({data}) => data.map(adaptFilmToClient))
    .then((films) => dispatch(ActionCreator.loadFavoriteFilmsList(films)))
    .catch((error) => dispatch(ActionCreator.fetchFavoriteFilmsListError(error)))
);

export const fetchFilmById = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => dispatch(ActionCreator.loadFilm(film, true)))
    .catch((error) => dispatch(ActionCreator.fetchFilmByIdError(error)))
);

export const fetchReviewsById = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data, true)))
    .catch((error) => dispatch(ActionCreator.fetchReviewsByIdError(error)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH_ERROR)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const commentPost = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setIsReviewFormDisabled(true));
  return api.post(`/comments/${id}`, {rating, comment})
    .then(() => {
      dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
      dispatch(ActionCreator.setIsReviewFormDisabled(false));
    })
    .catch((error) => {
      dispatch(ActionCreator.commentPostError(error));
      dispatch(ActionCreator.setIsReviewFormDisabled(false));
    });
};

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`, {id, status})
    .then(({data}) => adaptFilmToClient(data))
    .then((film) => dispatch(ActionCreator.setFavoriteStatus(film)))
    .catch(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);
