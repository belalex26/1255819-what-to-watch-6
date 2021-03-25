import React, {Fragment, useEffect, useRef} from 'react';

import shapeOfVideoPlayer from '../../proptypes/shape-of-video-player';

const VideoPlayer = (props) => {
  const {isPlaying, src, posterImage, width, height, alt} = props;
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let timeoutId;

    if (isPlaying) {
      timeoutId = setTimeout(() => {
        video.play();
      }, 1000);

    } else {
      clearTimeout(timeoutId);
      video.load();
    }

    return () => {
      clearTimeout(timeoutId);
    };
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

VideoPlayer.propTypes = shapeOfVideoPlayer;

export default VideoPlayer;

