import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT} from '../../const';
import App from './app';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';

const api = createAPI(() => {});

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    isDataLoaded: true,
    isDataLoading: false,
    isPromoLoaded: true,
    isPromoLoading: false,
    isFilmLoaded: true,
    isReviewsLoaded: true,
    isFilmsListLoading: false,
    films: [],
    film: {
      backgroundColor: ``,
      backgroundImage: ``,
      description: ``,
      director: ``,
      genre: ``,
      id: 1,
      isFavorite: false,
      name: ``,
      posterImage: ``,
      previewImage: ``,
      previewVideoLink: ``,
      rating: 0,
      released: 0,
      runTime: 0,
      scoresCount: 0,
      starring: [``],
      videoLink: ``
    },
    reviews: [],
    favoriteFilms: [],
    promo: {
      backgroundColor: ``,
      backgroundImage: ``,
      description: ``,
      director: ``,
      genre: ``,
      id: 1,
      isFavorite: false,
      name: ``,
      posterImage: ``,
      previewImage: ``,
      previewVideoLink: ``,
      rating: 0,
      released: 0,
      runTime: 0,
      scoresCount: 0,
      starring: [``],
      videoLink: ``
    },
  },
  VIEW: {
    activeGenre: DEFAULT_GENRE,
    visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
    isReviewFormDisabled: false,
  },
  ERRORS: {
    error: null,
    errorMessage: null,
  }
};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainScreen' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigate to '/mylist url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.MY_LIST);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`Render 'Film' when user navigate to '/films/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.FILM);
    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.ADD_REVIEW);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
  it(`Render 'Player' when user navigate to '/player/:id url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.PLAYER);

    render(
        <redux.Provider store={mockStore(store)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });
  it(`Render 'NotFoundScreen' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404`)).toBeInTheDocument();
  });
});
