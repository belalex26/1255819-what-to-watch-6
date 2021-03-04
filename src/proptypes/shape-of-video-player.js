import PropTypes from 'prop-types';

const videoPlayerShape = () => {
  return PropTypes.shape({
    "alt": PropTypes.string.isRequired,
    "height": PropTypes.number.isRequired,
    "isPlaying": PropTypes.bool.isRequired,
    "posterImage": PropTypes.string.isRequired,
    "previewVideoLink": PropTypes.string.isRequired,
    "src": PropTypes.string.isRequired,
    "width": PropTypes.number.isRequired,
  });
};


export default videoPlayerShape;
