import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {MainScreen} from './main-screen';
import {mockFilm, mockFilms, mockReviews} from '../../test-mocks';
import {AuthorizationStatus, DEFAULT_GENRE} from '../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    promo: mockFilm,
    visibleFilms: mockFilms,
    reviews: mockReviews,
    films: mockFilms,
    isDataLoaded: true,
    isPromoLoaded: true,
    isFilmsListLoading: false,
    isPromoLoading: false,
  },
  VIEW: {
    activeGenre: DEFAULT_GENRE,
  },
  ERRORS: {
    errorMessage: null,
  }
};
it(`MainScreen renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <MainScreen
            authorizationStatus={AuthorizationStatus.AUTH}
            promo={mockFilm}
            films={mockFilms}
            onLoad={jest.fn()}
            isDataLoaded={true}
            isFilmsListLoading={false}
            isPromoLoaded={true}
            isPromoLoading={false}
            loadFilmsList={jest.fn()}
            loadPromoFilm={jest.fn()}
            errorMessage={null}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
