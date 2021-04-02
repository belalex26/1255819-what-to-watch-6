import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

import Footer from './footer';

it(`Logo should render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Footer />
      </Router>
  );
  expect(container).toMatchSnapshot();
});
