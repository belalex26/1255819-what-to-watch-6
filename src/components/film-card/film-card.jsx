import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import videoPlayerShape from '../video-player/video-player';
import shapeOfFilm from '../../utils/shape-of-film';

const FilmCard = (props) => {

  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [playbackTimer, setPlaybackTimer] = useState(null);

  const handleMouseOver = () => {
    onActiveFilmChange(film);
    setPlaybackTimer(setTimeout(() => setIsPreviewPlaying(true), 1000));
  };

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" data-id={props.id} onMouseOver={props.onMouseOver} onMouseLeave={handleMouseLeave} data-id={film.id}>
      <img src={props.preview_image} alt={props.name} width="280" height="175"/>

    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`/films/${props.id}`}>{props.name}</Link>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  "name": PropTypes.string.isRequired,
  "preview_image": PropTypes.string.isRequired,
  "id": PropTypes.number.isRequired,
  "onMouseOver": PropTypes.func
};

export default FilmCard;
