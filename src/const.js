const DEFAULT_GENRE = `All genres`;
const MAX_GENRES_COUNT = 9;
const DEFAULT_VISIBLE_FILMS_COUNT = 8;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  INIT: `INIT`,
  AUTH_ERROR: `AUTH_ERROR`
};

const AppRoute = {
  ADD_REVIEW: `/films/:id/review`,
  FILM: `/films/:id`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/:id`,
  ROOT: `/`,
};

const genreList = [
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


export {DEFAULT_GENRE, MAX_GENRES_COUNT, DEFAULT_VISIBLE_FILMS_COUNT, AuthorizationStatus, AppRoute, genreList};
