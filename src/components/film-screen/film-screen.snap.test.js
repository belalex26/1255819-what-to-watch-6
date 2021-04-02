import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';

import {FilmScreen} from './film-screen';
import {mockFilm, mockFilms, mockReviews} from '../../test-mocks';
import {AuthorizationStatus} from '../../const';


const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    film: mockFilm,
    films: mockFilms,
    reviews: mockReviews,
    isDataLoaded: true,
    isFilmLoaded: true,
    isReviewsLoaded: true,
  },
};
it(`FilmScreen renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <FilmScreen
            film={mockFilm}
            films={mockFilms}
            isDataLoaded={true}
            isFilmLoaded={true}
            isReviewsLoaded={true}
            onLoad={jest.fn()}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
