import {ActionType, ActionCreator} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator 'changeGenre' returns correct action with payload`, () => {
    const someGenre = `someGenre`;

    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: someGenre,
    };

    expect(ActionCreator.changeGenre(someGenre)).toEqual(expectedAction);
  });
  it(`Action creator 'commentPostError' returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.COMMENT_POST_ERROR,
      payload: {error: someError},
    };

    expect(ActionCreator.commentPostError(someError)).toEqual(expectedAction);
  });
  it(`Action creator 'fetchFavoriteFilmsListError' returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_FAVORITE_FILMS_LIST_ERROR,
      payload: {error: someError},
    };

    expect(ActionCreator.fetchFavoriteFilmsListError(someError)).toEqual(expectedAction);
  });
  it(`Action creator 'fetchFilmsListError' returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_FILMS_LIST_ERROR,
      payload: {error: someError},
    };

    expect(ActionCreator.fetchFilmsListError(someError)).toEqual(expectedAction);
  });
  it(`Action creator 'fetchFilmByIdError' returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_FILM_BY_ID_ERROR,
      payload: {error: someError},
    };

    expect(ActionCreator.fetchFilmByIdError(someError)).toEqual(expectedAction);
  });
  it(`Action creator 'fetchPromoFilmError' returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_PROMO_FILM_ERROR,
      payload: {error: someError},
    };

    expect(ActionCreator.fetchPromoFilmError(someError)).toEqual(expectedAction);
  });
  it(`Action creator 'fetchReviewsByIdError' returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_REVIEWS_BY_ID_ERROR,
      payload: {error: someError},
    };

    expect(ActionCreator.fetchReviewsByIdError(someError)).toEqual(expectedAction);
  });
  it(`Action creator 'increaseVisibleFilmsCount' returns correct action`, () => {
    const expectedAction = {
      type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
    };

    expect(ActionCreator.increaseVisibleFilmsCount()).toEqual(expectedAction);
  });
  it(`Action creator 'loadFavoriteFilmsList' returns correct action with array in payload`, () => {
    const someArray = [];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS_LIST,
      payload: someArray,
    };

    expect(ActionCreator.loadFavoriteFilmsList(someArray)).toEqual(expectedAction);
  });
  it(`Action creator 'loadFilm' returns correct action with payload`, () => {
    const someFilm = {};
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: {film: someFilm, isFilmLoaded: isLoaded},
    };

    expect(ActionCreator.loadFilm(someFilm, isLoaded)).toEqual(expectedAction);
  });
  it(`Action creator 'loadFilms' returns correct action with payload`, () => {
    const someFilms = [];
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: {films: someFilms, isDataLoaded: isLoaded},
    };

    expect(ActionCreator.loadFilms(someFilms, isLoaded)).toEqual(expectedAction);
  });
  it(`Action creator 'loadPromoFilm' returns correct action with payload`, () => {
    const someFilm = {};
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {film: someFilm, isPromoLoaded: isLoaded},
    };

    expect(ActionCreator.loadPromoFilm(someFilm, isLoaded)).toEqual(expectedAction);
  });
  it(`Action creator 'loadReviews' returns correct action with payload`, () => {
    const someReviews = [];
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: {reviews: someReviews, isReviewsLoaded: isLoaded},
    };

    expect(ActionCreator.loadReviews(someReviews, isLoaded)).toEqual(expectedAction);
  });
  it(`Action creator 'redirectToRoute' returns correct action with payload`, () => {
    const url = ``;

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(ActionCreator.redirectToRoute(url)).toEqual(expectedAction);
  });
  it(`Action creator 'requireAuthorization' returns correct action with payload`, () => {
    const status = ``;

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(ActionCreator.requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator 'resetGenre' returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(ActionCreator.resetGenre()).toEqual(expectedAction);
  });
  it(`Action creator 'resetVisibleFilmsCount' returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_VISIBLE_FILMS_COUNT,
    };

    expect(ActionCreator.resetVisibleFilmsCount()).toEqual(expectedAction);
  });

  it(`Action creator 'setFavoriteStatus' returns correct action with payload`, () => {
    const someFilm = {};

    const expectedAction = {
      type: ActionType.SET_FAVORITE_STATUS,
      payload: someFilm,
    };

    expect(ActionCreator.setFavoriteStatus(someFilm)).toEqual(expectedAction);
  });
  it(`Action creator 'setIsFilmsListLoading' returns correct action with boolean in payload`, () => {
    const isLoading = false;

    const expectedAction = {
      type: ActionType.SET_IS_FILMS_LIST_LOADING,
      payload: isLoading,
    };

    expect(ActionCreator.setIsFilmsListLoading(isLoading)).toEqual(expectedAction);
  });
  it(`Action creator 'setIsPromoLoading' returns correct action with boolean in payload`, () => {
    const isLoading = true;

    const expectedAction = {
      type: ActionType.SET_IS_PROMO_LOADING,
      payload: isLoading,
    };

    expect(ActionCreator.setIsPromoLoading(isLoading)).toEqual(expectedAction);
  });
  it(`Action creator 'setIsReviewFormDisabled' returns correct action with boolean in payload`, () => {
    const isDisabled = true;

    const expectedAction = {
      type: ActionType.SET_IS_REVIEW_FORM_DISABLED,
      payload: isDisabled,
    };

    expect(ActionCreator.setIsReviewFormDisabled(isDisabled)).toEqual(expectedAction);
  });
});
