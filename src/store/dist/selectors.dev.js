"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFilmsByGenre = exports.getVisibleFilms = exports.getErrorMessage = exports.getPromo = exports.getFavoriteFilms = exports.getReviews = exports.getFilm = exports.getFilms = exports.getReviewsLoadedStatus = exports.getFilmLoadedStatus = exports.getPromoLoadingStatus = exports.getPromoLoadedStatus = exports.getFilmsListLoadingStatus = exports.getDataLoadedStatus = exports.getAuthorizationStatus = exports.getReviewFormDisabledStatus = exports.getVisibleFilmsCount = exports.getActiveGenre = void 0;

var _reselect = require("reselect");

var _utils = require("../utils");

var _rootReducer = require("./root-reducer");

var getActiveGenre = function getActiveGenre(state) {
  return state[_rootReducer.NameSpace.VIEW].activeGenre;
};

exports.getActiveGenre = getActiveGenre;

var getVisibleFilmsCount = function getVisibleFilmsCount(state) {
  return state[_rootReducer.NameSpace.VIEW].visibleFilmsCount;
};

exports.getVisibleFilmsCount = getVisibleFilmsCount;

var getReviewFormDisabledStatus = function getReviewFormDisabledStatus(state) {
  return state[_rootReducer.NameSpace.VIEW].isReviewFormDisabled;
};

exports.getReviewFormDisabledStatus = getReviewFormDisabledStatus;

var getAuthorizationStatus = function getAuthorizationStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].authorizationStatus;
};

exports.getAuthorizationStatus = getAuthorizationStatus;

var getDataLoadedStatus = function getDataLoadedStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].isDataLoaded;
};

exports.getDataLoadedStatus = getDataLoadedStatus;

var getFilmsListLoadingStatus = function getFilmsListLoadingStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].isFilmsListLoading;
};

exports.getFilmsListLoadingStatus = getFilmsListLoadingStatus;

var getPromoLoadedStatus = function getPromoLoadedStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].isPromoLoaded;
};

exports.getPromoLoadedStatus = getPromoLoadedStatus;

var getPromoLoadingStatus = function getPromoLoadingStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].isPromoLoading;
};

exports.getPromoLoadingStatus = getPromoLoadingStatus;

var getFilmLoadedStatus = function getFilmLoadedStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].isFilmLoaded;
};

exports.getFilmLoadedStatus = getFilmLoadedStatus;

var getReviewsLoadedStatus = function getReviewsLoadedStatus(state) {
  return state[_rootReducer.NameSpace.FILMS].isReviewsLoaded;
};

exports.getReviewsLoadedStatus = getReviewsLoadedStatus;

var getFilms = function getFilms(state) {
  return state[_rootReducer.NameSpace.FILMS].films;
};

exports.getFilms = getFilms;

var getFilm = function getFilm(state) {
  return state[_rootReducer.NameSpace.FILMS].film;
};

exports.getFilm = getFilm;

var getReviews = function getReviews(state) {
  return state[_rootReducer.NameSpace.FILMS].reviews;
};

exports.getReviews = getReviews;

var getFavoriteFilms = function getFavoriteFilms(state) {
  return state[_rootReducer.NameSpace.FILMS].favoriteFilms;
};

exports.getFavoriteFilms = getFavoriteFilms;

var getPromo = function getPromo(state) {
  return state[_rootReducer.NameSpace.FILMS].promo;
};

exports.getPromo = getPromo;

var getErrorMessage = function getErrorMessage(state) {
  return state[_rootReducer.NameSpace.ERRORS].errorMessage;
};

exports.getErrorMessage = getErrorMessage;
var getVisibleFilms = (0, _reselect.createSelector)([getActiveGenre, getFilms, getVisibleFilmsCount], function (activeGenre, films, visibleFilmsCount) {
  var allFilms = (0, _utils.getFilmsByGenre)(films, activeGenre);
  return allFilms.slice(0, visibleFilmsCount);
});
exports.getVisibleFilms = getVisibleFilms;
var getAllFilmsByGenre = (0, _reselect.createSelector)([getActiveGenre, getFilms], function (activeGenre, films) {
  return (0, _utils.getFilmsByGenre)(films, activeGenre);
});
exports.getAllFilmsByGenre = getAllFilmsByGenre;