import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

import FilmDetails from './film-details';
import {mockFilm} from '../../test-mocks';

it(`FilmDetails renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <FilmDetails
          film={mockFilm}
        />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
