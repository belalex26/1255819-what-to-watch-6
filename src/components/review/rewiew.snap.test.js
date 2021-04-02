import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

import Review from './review';
import {mockReviews} from '../../test-mocks';

it(`Rewiew renders correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Review
          comment={mockReviews}
        />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
