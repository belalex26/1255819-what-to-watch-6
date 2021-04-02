import React from 'react';
import {Router} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';

import {SingInScreen} from './sing-in-screen';
import {AppRoute, AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
};

describe(`SignIn`, () => {
  it(`renders correctly when user navigate to '/login' url`, () => {
    const testAuthorizationStatus = AuthorizationStatus.NO_AUTH;
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SingInScreen
              onSubmit={jest.fn()}
              authorizationStatus={testAuthorizationStatus}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(`sign-in_btn`)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`login`), `testUser`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/testUser/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it(`renders correctly when AuthorizationStatus is AUTH_ERROR`, () => {
    const testAuthorizationStatus = AuthorizationStatus.AUTH_ERROR;
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SingInScreen
              onSubmit={jest.fn()}
              authorizationStatus={testAuthorizationStatus}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByText(/We can’t recognize this email and password combination. Please try again./i)).toBeInTheDocument();
    expect(screen.getByTestId(`sign-in_btn`)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`login`), `testUser`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/testUser/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it(`works correctly when clicked`, () => {
    const testAuthorizationStatus = AuthorizationStatus.NO_AUTH;
    const history = createMemoryHistory();
    let user = {
      login: null,
      password: null,
    };
    history.push(AppRoute.LOGIN);
    const SignInBtnClickHandler = jest.fn();
    SignInBtnClickHandler.mockImplementation(
        () => (user = {
          login: `testUser`,
          password: `123456`,
        })
    );


    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SingInScreen
              onSubmit={SignInBtnClickHandler}
              authorizationStatus={testAuthorizationStatus}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(`sign-in_btn`)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`login`), `testUser`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/testUser/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

    fireEvent.submit(screen.getByTestId(`sign-in_form`));
    expect(SignInBtnClickHandler).toBeCalled();
    expect(user.login).toBe(`testUser`);
    expect(user.password).toBe(`123456`);
  });
});
