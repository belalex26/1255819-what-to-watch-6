import PropTypes from 'prop-types';

const shapeOfPromoFilm = () => {
  return PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
  });
};

export default shapeOfPromoFilm;
