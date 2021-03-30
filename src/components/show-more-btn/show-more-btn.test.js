import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {ShowMoreBtn} from './show-more-btn';
import {mockFilms} from '../../test-mocks';
import {DEFAULT_VISIBLE_FILMS_COUNT} from '../../const';

const mockStore = configureStore({});
const store = {
  FILMS: {
    films: mockFilms,
  },
  VIEW: {
    visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
  }
};
describe(`ShowMoreBtn`, () => {
  it(`renders correctly`, () => {
    render(
        <Provider store={mockStore(store)}>
          <ShowMoreBtn
            visibleFilmsCount={DEFAULT_VISIBLE_FILMS_COUNT}
            allFilms={mockFilms}
            onButtonClick={jest.fn()}
          />
        </Provider>
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
  it(`works correctly when clicked`, () => {
    const ShowMoreBtnClickHandler = jest.fn();

    render(
        <Provider store={mockStore(store)}>
          <ShowMoreBtn
            visibleFilmsCount={DEFAULT_VISIBLE_FILMS_COUNT}
            allFilms={mockFilms}
            onButtonClick={ShowMoreBtnClickHandler}
          />
        </Provider>
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole(`button`));
    expect(ShowMoreBtnClickHandler).toBeCalled();
  });
});
