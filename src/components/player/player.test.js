import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import {Player} from './player';
import {mockFilm} from '../../test-mocks';

describe(`Player`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

  });

  it(`renders correctly`, () => {
    const history = createMemoryHistory();
    const {container} = render(
        <Router history={history}>
          <Player
            film={mockFilm}
            isFilmLoaded={true}
            onLoad={jest.fn()}
          />
        </Router>
    );

    expect(screen.getByTestId(`full-screen_btn`)).toBeInTheDocument();
    expect(container.querySelector(`video`)).toBeInTheDocument();
    expect(screen.getByText(`Exit`)).toBeInTheDocument();
    expect(screen.getByText(`Full screen`)).toBeInTheDocument();
  });
});
