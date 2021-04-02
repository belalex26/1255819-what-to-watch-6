import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import {FilmReviews} from './film-reviews';
import {mockFilm, mockReviews} from '../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    film: mockFilm,
    reviews: mockReviews,
  }
};

it(`FilmReviews renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <FilmReviews
            film={mockFilm}
            reviews={mockReviews}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});

