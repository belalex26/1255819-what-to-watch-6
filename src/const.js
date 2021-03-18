export const DEFAULT_GENRE = `All genres`;
export const MAX_GENRES_COUNT = 9;
export const DEFAULT_VISIBLE_FILMS_COUNT = 8;
export const NUMBER_OF_SECONDS_IN_HOUR = 3600;
export const NUMBER_OF_MINUTES_IN_HOUR = 60;
export const PLAYER_TOGGLER_WIDTH = 17;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  INIT: `INIT`,
  AUTH_ERROR: `AUTH_ERROR`
};

export const Rating = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  AWESOME: 10,
};

export const RatingLevel = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const AppRoute = {
  ADD_REVIEW: `/films/:id/review`,
  FILM: `/films/:id`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/:id`,
  ROOT: `/`,
};

export const ApiRoute = {
  FAVORITE_FILMS: `/favorite`,
  FILMS: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  PROMO_FILM: `/films/promo`,
};

export const genreList = [
  {
    title: `All genres`,
    value: null
  },
  {
    title: `Comedies`,
    value: `comedies`
  },
  {
    title: `Crime`,
    value: `crime`
  },
  {
    title: `Documentary`,
    value: `documentary`
  },
  {
    title: `Dramas`,
    value: `dramas`
  },
  {
    title: `Horror`,
    value: `horror`
  },
  {
    title: `Kids & Family`,
    value: `kids & family`
  },
  {
    title: `Romance`,
    value: `romance`
  },
  {
    title: `Sci-Fi`,
    value: `sci-fi`
  },
  {
    title: `Thrillers`,
    value: `thrillers`
  }
];

export const MouseEvent = {
  MOUSE_MOVE: `mousemove`,
  MOUSE_UP: `mouseup`,
};

