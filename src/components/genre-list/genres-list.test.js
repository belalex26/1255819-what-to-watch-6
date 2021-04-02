import React from 'react';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';

import {GenresList} from './genre-list';
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

it(`Click on Genre works`, () => {
  const history = createMemoryHistory();
  let activeGenre = DEFAULT_GENRE;
  const activeGenreClickHandler = jest.fn();
  activeGenreClickHandler.mockImplementation(
      () => (activeGenre = `Drama`)
  );
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <GenresList
            films={mockFilms}
            activeGenre={DEFAULT_GENRE}
            onGenreClick={activeGenreClickHandler}
          />
        </Router>
      </Provider>
  );

  userEvent.click(screen.getByText(`Drama`));
  expect(activeGenreClickHandler).toBeCalled();
  expect(activeGenre).toBe(`Drama`);
});
