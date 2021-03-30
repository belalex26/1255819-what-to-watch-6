
import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import {FilmOverView} from './film-over-view';
import {mockFilm} from '../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    film: mockFilm,
    isFilmLoaded: true
  },
};

it(`FilmOverView renders correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <FilmOverView
            film={mockFilm}
            isFilmLoaded={true}
          />
        </Router>
      </Provider>
  );


  expect(screen.getByTestId(`film-over-view`)).toBeInTheDocument();
});
