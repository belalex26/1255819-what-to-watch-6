import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

import FilmReviews from './film-reviews';

it(`FilmReviews renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <FilmReviews/>
      </Router>
  );
  expect(container).toMatchSnapshot();
});
