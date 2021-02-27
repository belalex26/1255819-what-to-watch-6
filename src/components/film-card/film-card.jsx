import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';

const FilmCard = (props) => {
  const {onMouseOver} = props;

  const TIMEOUT = 1000;

  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [playbackTimer, setPlaybackTimer] = useState(null);

  const handleMouseOver = (film) => {
    onMouseOver(film);
    setPlaybackTimer(setTimeout(() => setIsPreviewPlaying(true), TIMEOUT));
  };

  const handleMouseLeave = () => {
    onMouseOver(null);
    clearTimeout(playbackTimer);
    setIsPreviewPlaying(false);
  };

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" data-id={props.id} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <VideoPlayer
        isPlaying={isPreviewPlaying}
        src={props.preview_video_link}
        posterImage={props.preview_image}
        width={280}
        height={175}
        alt={props.name}>
      </VideoPlayer>

    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`/films/${props.id}`}>{props.name}</Link>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  "name": PropTypes.string.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "preview_video_link": PropTypes.string.isRequired,
  "id": PropTypes.number.isRequired,
  "onMouseOver": PropTypes.func
};

export default FilmCard;
