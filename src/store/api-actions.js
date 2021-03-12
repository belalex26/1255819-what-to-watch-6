import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {adaptFilmToClient} from './adapt-film-to-client';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => adaptFilmToClient(data))
    .then((films) => dispatch(ActionCreator.loadFilms(films, true)))
    .catch(({error}) => dispatch(ActionCreator.fetchFilmsListError(error)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
