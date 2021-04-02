import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {changeFavoriteStatus, checkAuth, commentPost, fetchFavoriteFilmsList, fetchFilmById, fetchFilmsList, fetchPromoFilm, fetchReviewsById, login, logout} from './api-actions';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';

const api = createAPI(() => {});

describe(`Async operation`, () => {
  it(`should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(ApiRoute.FILMS)
      .reply(200, [
        {
          "name": `test`,
          "poster_image": `test`,
          "preview_image": `test`,
          "background_image": `test`,
          "background_color": `test`,
          "description": `test`,
          "rating": 0,
          "scores_count": 0,
          "director": `test`,
          "starring": [],
          "run_time": 0,
          "genre": `test`,
          "released": 0,
          "id": 1,
          "is_favorite": false,
          "video_link": `test`,
          "preview_video_link": `test`
        }
      ]);

    return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_IS_FILMS_LIST_LOADING,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_FILMS,
        payload: {
          films: [
            {
              id: 1,
              name: `test`,
              rating: 0,
              description: `test`,
              director: `test`,
              starring: [],
              genre: `test`,
              released: 0,
              posterImage: `test`,
              previewImage: `test`,
              backgroundImage: `test`,
              backgroundColor: `test`,
              scoresCount: 0,
              runTime: 0,
              isFavorite: false,
              videoLink: `test`,
              previewVideoLink: `test`,
            }
          ],
          isDataLoaded: true,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_IS_FILMS_LIST_LOADING,
        payload: false,
      });
    });
  });
  it(`should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = fetchPromoFilm();

    apiMock
      .onGet(ApiRoute.PROMO_FILM)
      .reply(200,
          {
            "name": `test`,
            "poster_image": `test`,
            "preview_image": `test`,
            "background_image": `test`,
            "background_color": `test`,
            "description": `test`,
            "rating": 0,
            "scores_count": 0,
            "director": `test`,
            "starring": [],
            "run_time": 0,
            "genre": `test`,
            "released": 0,
            "id": 1,
            "is_favorite": false,
            "video_link": `test`,
            "preview_video_link": `test`
          }
      );

    return promoLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_IS_PROMO_LOADING,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_PROMO_FILM,
        payload: {
          film:
            {
              id: 1,
              name: `test`,
              rating: 0,
              description: `test`,
              director: `test`,
              starring: [],
              genre: `test`,
              released: 0,
              posterImage: `test`,
              previewImage: `test`,
              backgroundImage: `test`,
              backgroundColor: `test`,
              scoresCount: 0,
              runTime: 0,
              isFavorite: false,
              videoLink: `test`,
              previewVideoLink: `test`,
            },
          isPromoLoaded: true,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SET_IS_PROMO_LOADING,
        payload: false,
      });
    });
  });

  it(`should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilmsList();

    apiMock
      .onGet(ApiRoute.FAVORITE_FILMS)
      .reply(200, [
        {
          "name": `test`,
          "poster_image": `test`,
          "preview_image": `test`,
          "background_image": `test`,
          "background_color": `test`,
          "description": `test`,
          "rating": 0,
          "scores_count": 0,
          "director": `test`,
          "starring": [],
          "run_time": 0,
          "genre": `test`,
          "released": 0,
          "id": 1,
          "is_favorite": false,
          "video_link": `test`,
          "preview_video_link": `test`
        }
      ]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITE_FILMS_LIST,
        payload: [
          {
            id: 1,
            name: `test`,
            rating: 0,
            description: `test`,
            director: `test`,
            starring: [],
            genre: `test`,
            released: 0,
            posterImage: `test`,
            previewImage: `test`,
            backgroundImage: `test`,
            backgroundColor: `test`,
            scoresCount: 0,
            runTime: 0,
            isFavorite: false,
            videoLink: `test`,
            previewVideoLink: `test`,
          }
        ],
      });
    });
  });
  it(`should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const filmLoader = fetchFilmById(id);

    apiMock
      .onGet(`/films/${id}`)
      .reply(200,
          {
            "name": `test`,
            "poster_image": `test`,
            "preview_image": `test`,
            "background_image": `test`,
            "background_color": `test`,
            "description": `test`,
            "rating": 0,
            "scores_count": 0,
            "director": `test`,
            "starring": [],
            "run_time": 0,
            "genre": `test`,
            "released": 0,
            "id": 1,
            "is_favorite": false,
            "video_link": `test`,
            "preview_video_link": `test`
          }
      );

    return filmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILM,
        payload: {
          film: {
            id: 1,
            name: `test`,
            rating: 0,
            description: `test`,
            director: `test`,
            starring: [],
            genre: `test`,
            released: 0,
            posterImage: `test`,
            previewImage: `test`,
            backgroundImage: `test`,
            backgroundColor: `test`,
            scoresCount: 0,
            runTime: 0,
            isFavorite: false,
            videoLink: `test`,
            previewVideoLink: `test`,
          },
          isFilmLoaded: true,
        }
      });
    });
  });
  it(`should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = fetchReviewsById(id);

    apiMock
      .onGet(`/comments/${id}`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: {
          reviews: [{fake: true}],
          isReviewsLoaded: true,
        }
      });
    });
  });
  it(`should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
  it(`should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });
  it(`should make a correct API call to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(ApiRoute.LOGOUT)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });
  it(`should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fakeRating = 8;
    const fakeComment = `test`;
    const commentPostLoader = commentPost(id, fakeRating, fakeComment);

    apiMock
      .onPost(`/comments/${id}`)
      .reply(200, [{fake: true}]);

    return commentPostLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_REVIEW_FORM_DISABLED,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/${id}`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_REVIEW_FORM_DISABLED,
          payload: false,
        });
      });
  });
  it(`should make a correct API call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const changeFavoriteStatusLoader = changeFavoriteStatus(id, status);

    apiMock
      .onPost(`/favorite/${id}/${status}`)
      .reply(200,
          {
            "name": `test`,
            "poster_image": `test`,
            "preview_image": `test`,
            "background_image": `test`,
            "background_color": `test`,
            "description": `test`,
            "rating": 0,
            "scores_count": 0,
            "director": `test`,
            "starring": [],
            "run_time": 0,
            "genre": `test`,
            "released": 0,
            "id": 1,
            "is_favorite": true,
            "video_link": `test`,
            "preview_video_link": `test`
          }
      );

    return changeFavoriteStatusLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_FAVORITE_STATUS,
        payload: {
          id: 1,
          name: `test`,
          rating: 0,
          description: `test`,
          director: `test`,
          starring: [],
          genre: `test`,
          released: 0,
          posterImage: `test`,
          previewImage: `test`,
          backgroundImage: `test`,
          backgroundColor: `test`,
          scoresCount: 0,
          runTime: 0,
          isFavorite: true,
          videoLink: `test`,
          previewVideoLink: `test`,
        },
      });
    });
  });
});
