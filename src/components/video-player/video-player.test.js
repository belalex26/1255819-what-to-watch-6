import React from 'react';
import {render} from '@testing-library/react';
import VideoPlayer from './video-player';

describe(`PreviewVideoPlayer`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
  });

  it(`renders correctly`, () => {
    const mockPath = `mock-path`;
    const mockPosterImage = `http://picsum.photos/248/152?r=${Math.random()}`;
    const mockAltText = `Some Film`;
    const {container} = render(
        <VideoPlayer
          isPlaying={true}
          src={mockPath}
          poster={mockPosterImage}
          width={280}
          height={175}
          alt={mockAltText}
        />
    );

    expect(container.querySelector(`video`)).toBeInTheDocument();
  });
});
