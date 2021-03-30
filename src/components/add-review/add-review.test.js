import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import {AddReview} from './add-review';
import {mockFilm} from '../../test-mocks';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    film: mockFilm,
    isFilmLoaded: true
  },
  ERRORS: {
    errorMessage: null,
  },
  VIEW: {
    isReviewFormDisabled: false,
  }
};

it(`AddReview renders correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <AddReview
            film={mockFilm}
            isFilmLoaded={true}
            onLoad={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(`Add review`)).toBeInTheDocument();
});
