import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

import {MyListScreen} from './my-list-screen';
import {mockFilms} from '../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    favoriteFilms: mockFilms,
  },
  VIEW: {
    visibleFilmsCount: 8,
  },
};
it(`MyList renders correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Provider store={mockStore(store)}>
        <Router history={history}>
          <MyListScreen
            favoriteFilms={mockFilms}
            onLoadData={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
