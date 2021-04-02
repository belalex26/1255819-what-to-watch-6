import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import {Player} from './player';
import {mockFilm} from '../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    film: mockFilm,
  }
};

it(`Player renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <Player
            film={mockFilm}
            isFilmLoaded={true}
            onLoad={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});

