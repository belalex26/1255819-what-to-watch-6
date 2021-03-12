import PropTypes from 'prop-types';

const shapeOfPromoFilm = () => {
  return PropTypes.shape({
    "backgroundImage": PropTypes.string.isRequired,
    "posterImage": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
  });
};

export default shapeOfPromoFilm;
