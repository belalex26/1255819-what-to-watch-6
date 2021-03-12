export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  FETCH_FILMS_LIST_ERROR: `data/fetchFilmsListError`,
  FETCH_PROMO_FILM_ERROR: `data/fetchPromoFilmError`,
  FETCH_FAVORITE_FILMS_LIST_ERROR: `data/fetchFavoriteFilmsListError`,
  FETCH_FILM_BY_ID_ERROR: `data/fetchFilmByIdError`,
  FETCH_REVIEWS_BY_ID_ERROR: `data/fetchReviewsByIdError`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increaseVisibleFilmsCount`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FAVORITE_FILMS_LIST: `data/loadFavoriteFilmsList`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_REVIEWS: `data/loadReviews`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  RESET_GENRE: `genre/reset`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetVisibleFilmsCount`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  fetchFilmsListError: (error) => ({
    type: ActionType.FETCH_FILMS_LIST_ERROR,
    payload: error,
  }),
  fetchPromoFilmError: (error) => ({
    type: ActionType.FETCH_PROMO_FILM_ERROR,
    payload: error,
  }),
  increaseVisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
  }),
  loadFilms: (films, isDataLoaded) => ({
    type: ActionType.LOAD_FILMS,
    payload: {films, isDataLoaded},
  }),
  loadPromoFilm: (film, isDataLoaded) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: {film, isDataLoaded},
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  resetVisibleFilmsCount: () => ({
    type: ActionType.RESET_VISIBLE_FILMS_COUNT,
  })
};
