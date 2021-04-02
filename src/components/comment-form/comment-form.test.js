import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import {CommentForm} from './comment-form';
import {mockFilm} from '../../test-mocks';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    authorizationStatus: AuthorizationStatus.AUTH,
    film: mockFilm,
    isFilmLoaded: true
  },
  ERRORS: {
    errorMessage: null,
  },
  VIEW: {
    isReviewFormDisabled: false,
  }
};

describe(`CommentForm`, () => {
  it(`renders correctly`, () => {
    const history = createMemoryHistory();
    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <CommentForm
              film={mockFilm}
              errorMessage={null}
              isReviewFormDisabled={false}
              onReviewSubmit={jest.fn()}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(`Post`)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`add-review_textarea`), `test comment`);
    expect(screen.getByDisplayValue(/test comment/i)).toBeInTheDocument();
  });

  it(`is submitted when Submit btn is clicked`, () => {
    const history = createMemoryHistory();
    const SubmitBtnClickHandler = jest.fn();
    let isReviewFormDisabled = false;
    SubmitBtnClickHandler.mockImplementation(
        () => (isReviewFormDisabled = true)
    );

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <CommentForm
              film={mockFilm}
              errorMessage={null}
              isReviewFormDisabled={false}
              onReviewSubmit={SubmitBtnClickHandler}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByText(`Post`)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`add-review_textarea`), `test comment`);
    expect(screen.getByDisplayValue(/test comment/i)).toBeInTheDocument();
    fireEvent.submit(screen.getByTestId(`add-review_form`));
    expect(SubmitBtnClickHandler).toBeCalled();
    expect(isReviewFormDisabled).toBe(true);
  });
});
