import {DEFAULT_GENRE, MAX_GENRES_COUNT, Rating, RatingLevel} from './const';

export const getFilmsByGenre = (films, genre) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getGenreList = (films) => {
  const genres = films.map((film) => film.genre).sort();

  return [DEFAULT_GENRE, ...new Set(genres)].slice(0, MAX_GENRES_COUNT);
};

export const timeFormat = (s) => {
  let h = Math.floor(s / 60 / 60);
  h = (h >= 10) ? h : `0` + h;
  let m = Math.floor(s / 60);
  m = (m >= 10) ? m : `0` + m;
  s = Math.floor(s % 60);
  s = (s >= 10) ? s : `0` + s;
  return h + `:` + m + `:` + s;
};

export const getMovieRatingLevel = (movie) => {
  const rating = movie.rating;

  if (rating < Rating.BAD) {
    return RatingLevel.BAD;
  } else if (rating < Rating.NORMAL) {
    return RatingLevel.NORMAL;
  } else if (rating < Rating.GOOD) {
    return RatingLevel.GOOD;
  } else if (rating < Rating.AWESOME) {
    return RatingLevel.VERY_GOOD;
  } else {
    return RatingLevel.AWESOME;
  }
};

