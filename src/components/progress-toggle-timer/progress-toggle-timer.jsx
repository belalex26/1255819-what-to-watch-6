import React from 'react';
import PropTypes from "prop-types";
import {MouseEvent} from '../../const';

const ProgressTogglerTimer = (props) => {
  const {progress, timer, onProgressClickHandler} = props;

  const handleTogglerMove = (evt) => {
    evt.preventDefault();

    const onMouseMove = (moveEvt) => {
      moveEvt.preventDefault();
      onProgressClickHandler(moveEvt);
    };

    const onMouseUp = (upEvt) => {
      upEvt.preventDefault();

      onProgressClickHandler(upEvt);
      document.removeEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
      document.removeEventListener(MouseEvent.MOUSE_UP, onMouseUp);
    };

    document.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
    document.addEventListener(MouseEvent.MOUSE_UP, onMouseUp);
  };

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          className="player__progress"
          value={`${progress}`}
          max={100}
          onClick={onProgressClickHandler}
        >
        </progress>
        <div
          className="player__toggler"
          style={{left: `${progress}` + `%`}}
          onMouseDown={handleTogglerMove}
        >
          Toggler
        </div>
      </div>
      <div className="player__time-value">{timer}</div>
    </div>
  );
};

ProgressTogglerTimer.propTypes = {
  progress: PropTypes.number.isRequired,
  timer: PropTypes.string.isRequired,
  onProgressClickHandler: PropTypes.func.isRequired,
};

export default ProgressTogglerTimer;
