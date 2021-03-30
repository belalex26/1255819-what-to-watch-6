import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {MyListButton} from './my-list-button';
import {mockFilm} from '../../test-mocks';

const mockStore = configureStore({});
const store = {
  FILMS: {
    film: {
      id: 1,
      isFavorite: true
    }
  }
};
describe(`MyListButton`, () => {
  it(`renders correctly`, () => {
    render(
        <Provider store={mockStore(store)}>
          <MyListButton
            film={mockFilm}
            onClick={jest.fn()}
          />
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
  it(`works correctly when clicked`, () => {
    const myListButtonClickHandler = jest.fn();
    myListButtonClickHandler.mockImplementation(
        () => (mockFilm.isFavorite = false)
    );

    render(
        <Provider store={mockStore(store)}>
          <MyListButton
            film = {mockFilm}
            onClick={myListButtonClickHandler}
          />
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(`myList_btn`));
    expect(myListButtonClickHandler).toBeCalled();
    expect(mockFilm.isFavorite).toBe(false);
  });
});
