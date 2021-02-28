import React, {Fragment, useEffect, useRef} from 'react';
import videoPlayerShape from '../../proptypes/shape-of-video-player';

const VideoPlayer = (props) => {
  const {isPlaying, src, posterImage, width, height, alt} = props;
  const videoRef = useRef();

  useEffect(() => {
    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onload = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <Fragment>
      <video muted
        src={src}
        poster={posterImage}
        ref={videoRef}
        width={width}
        height={height}
        alt={alt}>
      </video>
    </Fragment>
  );
};

VideoPlayer.propTypes = videoPlayerShape;

export default VideoPlayer;
