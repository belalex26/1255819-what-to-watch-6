"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataReducer = void 0;

var _action = require("../action");

var _const = require("../../const");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  authorizationStatus: _const.AuthorizationStatus.INIT,
  isDataLoaded: false,
  isDataLoading: false,
  isPromoLoaded: false,
  isPromoLoading: false,
  isFilmLoaded: false,
  isReviewsLoaded: false,
  films: [],
  film: {
    backgroundColor: "",
    backgroundImage: "",
    description: "",
    director: "",
    genre: "",
    id: -1,
    isFavorite: false,
    name: "",
    posterImage: "",
    previewImage: "",
    previewVideoLink: "",
    rating: 0,
    released: 0,
    runTime: 0,
    scoresCount: 0,
    starring: [""],
    videoLink: ""
  },
  reviews: [],
  favoriteFilms: [],
  promo: {
    backgroundColor: "",
    backgroundImage: "",
    description: "",
    director: "",
    genre: "",
    id: -1,
    isFavorite: false,
    name: "",
    posterImage: "",
    previewImage: "",
    previewVideoLink: "",
    rating: 0,
    released: 0,
    runTime: 0,
    scoresCount: 0,
    starring: [""],
    videoLink: ""
  }
};

var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action.ActionType.LOAD_FILMS:
      return _objectSpread({}, state, {
        films: action.payload.films,
        isDataLoaded: action.payload.isDataLoaded
      });

    case _action.ActionType.SET_IS_FILMS_LIST_LOADING:
      return _objectSpread({}, state, {
        isFilmsListLoading: action.payload
      });

    case _action.ActionType.LOAD_PROMO_FILM:
      return _objectSpread({}, state, {
        promo: action.payload.film,
        isPromoLoaded: action.payload.isPromoLoaded
      });

    case _action.ActionType.SET_IS_PROMO_LOADING:
      return _objectSpread({}, state, {
        isPromoLoading: action.payload
      });

    case _action.ActionType.LOAD_FAVORITE_FILMS_LIST:
      return _objectSpread({}, state, {
        favoriteFilms: action.payload
      });

    case _action.ActionType.LOAD_FILM:
      return _objectSpread({}, state, {
        film: action.payload.film,
        isFilmLoaded: action.payload.isFilmLoaded
      });

    case _action.ActionType.LOAD_REVIEWS:
      return _objectSpread({}, state, {
        reviews: action.payload.reviews,
        isReviewsLoaded: action.payload.isReviewsLoaded
      });

    case _action.ActionType.REQUIRED_AUTHORIZATION:
      return _objectSpread({}, state, {
        authorizationStatus: action.payload
      });

    case _action.ActionType.SET_FAVORITE_STATUS:
      var filmToUpdate = action.payload;
      return _objectSpread({}, state, {
        promo: filmToUpdate.id === state.promo.id ? filmToUpdate : state.promo,
        film: filmToUpdate.id === state.film.id ? filmToUpdate : state.film
      });
  }

  return state;
};

exports.dataReducer = dataReducer;