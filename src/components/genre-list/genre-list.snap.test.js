import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';

import {GenreList} from './genre-list';
import {mockFilms} from '../../test-mocks';
import {DEFAULT_GENRE} from '../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    films: mockFilms,
  },
  VIEW: {
    activeGenre: DEFAULT_GENRE,
  }
};

it(`GenreList renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <GenreList
            films={mockFilms}
            activeGenre={DEFAULT_GENRE}
            onGenreClick={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
