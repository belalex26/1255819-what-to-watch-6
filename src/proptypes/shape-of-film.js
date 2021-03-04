import PropTypes from 'prop-types';

const shapeOfFilm = () => {
  return PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "posterImage": PropTypes.string.isRequired,
    "previewImage": PropTypes.string.isRequired,
    "backgroundImage": PropTypes.string.isRequired,
    "backgroundColor": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "rating": PropTypes.number.isRequired,
    "scoresCount": PropTypes.number.isRequired,
    "director": PropTypes.string.isRequired,
    "starring": PropTypes.arrayOf(PropTypes.string).isRequired,
    "runTime": PropTypes.number.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
    "id": PropTypes.number.isRequired,
    "isFavorite": PropTypes.bool.isRequired,
    "videoLink": PropTypes.string.isRequired,
    "previewVideoLink": PropTypes.string.isRequired
  });
};

export default shapeOfFilm;
