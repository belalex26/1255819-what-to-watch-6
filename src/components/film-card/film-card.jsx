import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';

const FilmCard = (props) => {
  const {name, id, posterImage, previewVideoLink, onMouseOver} = props;

  const TIMEOUT = 1000;
  const WIDTH = 280;
  const HEIGHT = 175;

  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [playbackTimer, setPlaybackTimer] = useState(null);

  const handleMouseOver = (film) => {
    onMouseOver(film);
    setPlaybackTimer(setTimeout(() => setIsPreviewPlaying(true), TIMEOUT));
  };

  const handleMouseLeave = () => {
    onMouseOver({id: null});
    clearTimeout(playbackTimer);
    setIsPreviewPlaying(false);
  };

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" data-id={id} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <VideoPlayer
        isPlaying={isPreviewPlaying}
        src={previewVideoLink}
        posterImage={posterImage}
        width={WIDTH}
        height={HEIGHT}
        alt={name}>
      </VideoPlayer>

    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  "name": PropTypes.string.isRequired,
  "posterImage": PropTypes.string.isRequired,
  "previewVideoLink": PropTypes.string.isRequired,
  "id": PropTypes.number.isRequired,
  "onMouseOver": PropTypes.func
};

export default FilmCard;
