import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MovieList from '../movie-list/movie-list';
import User from '../user/user';
import Logo from '../logo/logo';
import Footer from '../footer/footer';

import shapeOfFilm from '../../proptypes/shape-of-film';
import {fetchFavoriteFilmsList} from '../../store/api-actions';
import {getFavoriteFilms} from '../../store/selectors';

const MyListScreen = (props) => {
  const {favoriteFilms, onLoadData} = props;

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          <User />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieList films={favoriteFilms}/>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

MyListScreen.propTypes = {
  favoriteFilms: PropTypes.arrayOf(
      shapeOfFilm()
  ).isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteFilmsList());
  },
});

export {MyListScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
