
import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';

import PlayerToggler from './player-toggler';

const mockStore = configureStore({});

it(`PlayerToggler renders correctly`, () => {
  const history = createMemoryHistory();
  const togglerProgress = 0;

  const {container} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <PlayerToggler
            togglerProgress={togglerProgress}
          />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});

