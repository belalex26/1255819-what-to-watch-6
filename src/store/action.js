export const ActionType = {
  CHANGE_GENRE: `view/changeGenre`,
  FETCH_FILMS_LIST_ERROR: `data/fetchFilmsListError`,
  FETCH_PROMO_FILM_ERROR: `data/fetchPromoFilmError`,
  FETCH_FAVORITE_FILMS_LIST_ERROR: `data/fetchFavoriteFilmsListError`,
  FETCH_FILM_BY_ID_ERROR: `data/fetchFilmByIdError`,
  FETCH_REVIEWS_BY_ID_ERROR: `data/fetchReviewsByIdError`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increaseVisibleFilmsCount`,
  LOAD_FILMS: `data/loadFilms`,
  SET_IS_FILMS_LIST_LOADING: `data/setIsFilmsListLoading`,
  SET_IS_PROMO_LOADING: `data/setIsPromoLoading`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FAVORITE_FILMS_LIST: `data/loadFavoriteFilmsList`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_REVIEWS: `data/loadReviews`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  RESET_GENRE: `view/resetGenre`,
  RESET_VISIBLE_FILMS_COUNT: `view/resetVisibleFilmsCount`,
  COMMENT_POST_ERROR: `data/commentPostError`,
  SET_IS_REVIEW_FORM_DISABLED: `view/setIsReviewFormDisabled`,
  RESET_ACTIVE_TAB: `view/resetActiveTab`,
  SET_ACTIVE_TAB: `view/setActiveTab`,
  SET_FAVORITE_STATUS: `data/setFavoriteStatus`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  fetchFilmsListError: (error) => ({
    type: ActionType.FETCH_FILMS_LIST_ERROR,
    payload: {error},
  }),
  fetchPromoFilmError: (error) => ({
    type: ActionType.FETCH_PROMO_FILM_ERROR,
    payload: {error},
  }),
  fetchFavoriteFilmsListError: (error) => ({
    type: ActionType.FETCH_FAVORITE_FILMS_LIST_ERROR,
    payload: {error},
  }),
  fetchFilmByIdError: (error) => ({
    type: ActionType.FETCH_FILM_BY_ID_ERROR,
    payload: {error},
  }),
  fetchReviewsByIdError: (error) => ({
    type: ActionType.FETCH_REVIEWS_BY_ID_ERROR,
    payload: {error},
  }),
  increaseVisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
  }),
  loadFilms: (films, isDataLoaded) => ({
    type: ActionType.LOAD_FILMS,
    payload: {films, isDataLoaded},
  }),
  setIsFilmsListLoading: (isLoading) => ({
    type: ActionType.SET_IS_FILMS_LIST_LOADING,
    payload: isLoading,
  }),
  loadPromoFilm: (film, isPromoLoaded) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: {film, isPromoLoaded},
  }),
  setIsPromoLoading: (isLoading) => ({
    type: ActionType.SET_IS_PROMO_LOADING,
    payload: isLoading,
  }),
  loadFavoriteFilmsList: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS_LIST,
    payload: films,
  }),
  loadFilm: (film, isFilmLoaded) => ({
    type: ActionType.LOAD_FILM,
    payload: {film, isFilmLoaded},
  }),
  loadReviews: (reviews, isReviewsLoaded) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: {reviews, isReviewsLoaded},
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
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
  }),
  commentPostError: (error) => ({
    type: ActionType.COMMENT_POST_ERROR,
    payload: {error},
  }),
  setIsReviewFormDisabled: (isDisabled) => ({
    type: ActionType.SET_IS_REVIEW_FORM_DISABLED,
    payload: isDisabled,
  }),
  resetActiveTab: () => ({
    type: ActionType.RESET_ACTIVE_TAB,
  }),
  setActiveTab: (activeTab) => ({
    type: ActionType.SET_ACTIVE_TAB,
    payload: activeTab,
  }),
  setFavoriteStatus: (film) => ({
    type: ActionType.SET_FAVORITE_STATUS,
    payload: film
  })
};
