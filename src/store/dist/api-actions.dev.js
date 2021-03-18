"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeFavoriteStatus = exports.commentPost = exports.logout = exports.login = exports.checkAuth = exports.fetchReviewsById = exports.fetchFilmById = exports.fetchFavoriteFilmsList = exports.fetchPromoFilm = exports.fetchFilmsList = void 0;

var _action = require("./action");

var _const = require("../const");

var _adaptFilmToClient = require("./adapt-film-to-client");

var fetchFilmsList = function fetchFilmsList() {
  return function (dispatch, _getState, api) {
    dispatch(_action.ActionCreator.setIsFilmsListLoading(true));
    api.get(_const.ApiRoute.FILMS).then(function (_ref) {
      var data = _ref.data;
      return data.map(_adaptFilmToClient.adaptFilmToClient);
    }).then(function (films) {
      dispatch(_action.ActionCreator.loadFilms(films, true));
      dispatch(_action.ActionCreator.setIsFilmsListLoading(false));
    })["catch"](function (error) {
      return dispatch(_action.ActionCreator.fetchFilmsListError(error));
    });
  };
};

exports.fetchFilmsList = fetchFilmsList;

var fetchPromoFilm = function fetchPromoFilm() {
  return function (dispatch, _getState, api) {
    dispatch(_action.ActionCreator.setIsPromoLoading(true));
    api.get(_const.ApiRoute.PROMO_FILM).then(function (_ref2) {
      var data = _ref2.data;
      return (0, _adaptFilmToClient.adaptFilmToClient)(data);
    }).then(function (film) {
      dispatch(_action.ActionCreator.loadPromoFilm(film, true));
      dispatch(_action.ActionCreator.setIsPromoLoading(false));
    })["catch"](function (error) {
      return dispatch(_action.ActionCreator.fetchPromoFilmError(error));
    });
  };
};

exports.fetchPromoFilm = fetchPromoFilm;

var fetchFavoriteFilmsList = function fetchFavoriteFilmsList() {
  return function (dispatch, _getState, api) {
    return api.get(_const.ApiRoute.FAVORITE_FILMS).then(function (_ref3) {
      var data = _ref3.data;
      return data.map(_adaptFilmToClient.adaptFilmToClient);
    }).then(function (films) {
      return dispatch(_action.ActionCreator.loadFavoriteFilmsList(films));
    })["catch"](function (error) {
      return dispatch(_action.ActionCreator.fetchFavoriteFilmsListError(error));
    });
  };
};

exports.fetchFavoriteFilmsList = fetchFavoriteFilmsList;

var fetchFilmById = function fetchFilmById(id) {
  return function (dispatch, _getState, api) {
    return api.get("/films/".concat(id)).then(function (_ref4) {
      var data = _ref4.data;
      return (0, _adaptFilmToClient.adaptFilmToClient)(data);
    }).then(function (film) {
      return dispatch(_action.ActionCreator.loadFilm(film, true));
    })["catch"](function (error) {
      return dispatch(_action.ActionCreator.fetchFilmByIdError(error));
    });
  };
};

exports.fetchFilmById = fetchFilmById;

var fetchReviewsById = function fetchReviewsById(id) {
  return function (dispatch, _getState, api) {
    return api.get("/comments/".concat(id)).then(function (_ref5) {
      var data = _ref5.data;
      return dispatch(_action.ActionCreator.loadReviews(data, true));
    })["catch"](function (error) {
      return dispatch(_action.ActionCreator.fetchReviewsByIdError(error));
    });
  };
};

exports.fetchReviewsById = fetchReviewsById;

var checkAuth = function checkAuth() {
  return function (dispatch, _getState, api) {
    return api.get(_const.ApiRoute.LOGIN).then(function () {
      return dispatch(_action.ActionCreator.requireAuthorization(_const.AuthorizationStatus.AUTH));
    })["catch"](function () {
      return dispatch(_action.ActionCreator.requireAuthorization(_const.AuthorizationStatus.NO_AUTH));
    });
  };
};

exports.checkAuth = checkAuth;

var login = function login(_ref6) {
  var email = _ref6.login,
      password = _ref6.password;
  return function (dispatch, _getState, api) {
    return api.post(_const.ApiRoute.LOGIN, {
      email: email,
      password: password
    }).then(function () {
      return dispatch(_action.ActionCreator.requireAuthorization(_const.AuthorizationStatus.AUTH));
    }).then(function () {
      return dispatch(_action.ActionCreator.redirectToRoute("/"));
    })["catch"](function () {
      return dispatch(_action.ActionCreator.requireAuthorization(_const.AuthorizationStatus.AUTH_ERROR));
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch, _getState, api) {
    return api.get(_const.ApiRoute.LOGOUT).then(function () {
      return dispatch(_action.ActionCreator.requireAuthorization(_const.AuthorizationStatus.NO_AUTH));
    })["catch"](function () {});
  };
};

exports.logout = logout;

var commentPost = function commentPost(id, rating, comment) {
  return function (dispatch, _getState, api) {
    dispatch(_action.ActionCreator.setIsReviewFormDisabled(true));
    api.post("/comments/".concat(id), {
      rating: rating,
      comment: comment
    }).then(function () {
      dispatch(_action.ActionCreator.redirectToRoute("/films/".concat(id)));
      dispatch(_action.ActionCreator.setIsReviewFormDisabled(false));
    })["catch"](function (error) {
      dispatch(_action.ActionCreator.commentPostError(error));
      dispatch(_action.ActionCreator.setIsReviewFormDisabled(false));
    });
  };
};

exports.commentPost = commentPost;

var changeFavoriteStatus = function changeFavoriteStatus(id, status) {
  return function (dispatch, _getState, api) {
    return api.post("/favorite/".concat(id, "/").concat(status), {
      id: id,
      status: status
    }).then(function (_ref7) {
      var data = _ref7.data;
      return (0, _adaptFilmToClient.adaptFilmToClient)(data);
    }).then(function (film) {
      return dispatch(_action.ActionCreator.setFavoriteStatus(film));
    })["catch"](function () {
      return dispatch(_action.ActionCreator.requireAuthorization(_const.AuthorizationStatus.NO_AUTH));
    });
  };
};

exports.changeFavoriteStatus = changeFavoriteStatus;