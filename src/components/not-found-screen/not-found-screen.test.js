import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

import NotFoundScreen from './not-found-screen';

it(`NotFoundScreen should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <NotFoundScreen />
      </Router>
  );
  const headerElement = getByText(`404`);

  expect(headerElement).toBeInTheDocument();

});
