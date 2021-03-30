import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import PropTypes from 'prop-types';

import shapeOfFilm from '../../proptypes/shape-of-film';
import LoadingScreen from '../loading-screen/loading-screen';
import PlayButton from '../play-button/play-button';
import PlayerToggler from '../player-toggler/player-toggler';

import {fetchFilmById} from '../../store/api-actions';
import {getFilm, getFilmLoadedStatus} from '../../store/selectors';
import {format} from '../../utils';


const Player = (props) => {
  const {film, isFilmLoaded, onLoad} = props;

  const id = parseInt(useParams().id, 10);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [timeLapse, setTimeLapse] = useState(false);
  const [previousTime, setPreviousTime] = useState(0);
  const [togglerProgress, setTogglerProgress] = useState(0);

  const videoRef = useRef();

  const hrefToFilmPage = `/films/${film.id}`;

  useEffect(() => {
    onLoad(id);
  }, [id]);

  useEffect(() => {
    if (!isFilmLoaded) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying, isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handlePlayBtnClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFullScreenBtnClick = () => {
    if (!isFullScreen) {
      videoRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      videoRef.current.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleEndVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const time = Math.floor((duration - currentTime) % 60);

    if (previousTime !== time) {
      setPreviousTime(time);
      setTimeLapse(format(duration - currentTime));
    }
    const progress = Math.round((currentTime / duration * 100) * 100) / 100;
    setTogglerProgress(progress);
  };

  return (
    <div className="player">
      <video
        muted={false}
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEndVideo}
      >
      </video>
      <Link to={hrefToFilmPage}>
        <button type="button" className="player__exit">Exit</button>
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <PlayerToggler togglerProgress={togglerProgress}/>
          <div className="player__time-value">{timeLapse}</div>
        </div>

        <div className="player__controls-row">
          <PlayButton
            isPlaying={isPlaying}
            onButtonClick={handlePlayBtnClick}
          />
          <div className="player__name">{film.name}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenBtnClick}
            data-testid="full-screen_btn"
          >
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: shapeOfFilm(),
  isFilmLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  isFilmLoaded: getFilmLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmById(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
