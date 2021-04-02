import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import User from './user';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

describe(`UserBlock`, () => {
  it(`renders correctly when AuthorizationStatus is NO_AUTH`, () => {
    const store = {
      FILMS: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    };
    const history = createMemoryHistory();
    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <User />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
  it(`renders correctly when AuthorizationStatus is AUTH`, () => {
    const store = {
      FILMS: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    };
    const history = createMemoryHistory();
    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <User />
          </Router>
        </Provider>
    );

    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
  });
});
