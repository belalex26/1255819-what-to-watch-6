"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptFilmToClient = void 0;

var adaptFilmToClient = function adaptFilmToClient(film) {
  return {
    id: film.id,
    name: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    genre: film.genre,
    description: film.description,
    isFavorite: film.is_favorite,
    released: film.released,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link
  };
};
/*
export const adaptPromo = (film) => {
  return {
    name: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    genre: film.genre,
    released: film.released,
    id: film.id,
    backgroundImage: film.background_image,
    isFavorite: film.is_favorite,
  };
};*/

/*
export const adaptUserInfoToClient = (userInfo) => {
  return {
    id: userInfo.id,
    email: userInfo.email,
    name: userInfo.name,
    userAvatar: userInfo.avatar_url,
  };
};*/


exports.adaptFilmToClient = adaptFilmToClient;