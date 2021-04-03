import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';

import FilmCard from './film-card';
import {mockFilm} from '../../test-mocks';

describe(`FilmCard`, () => {
  it(`renders correctly`, () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
          <FilmCard
            film={mockFilm}
            onMouseOver={jest.fn()}
          />
        </Router>
    );

    expect(screen.getByTestId(`film-card-name`)).toBeInTheDocument();
  });
});
