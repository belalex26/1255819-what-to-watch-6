import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieList from '../movie-list/movie-list';
import shapeOfFilm from '../../proptypes/shape-of-film';
import {fetchFavoriteFilmsList} from '../../store/api-actions';

const MyListScreen = (props) => {
  const {favoriteFilms, onLoadData} = props;

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieList visibleFilms={favoriteFilms}/>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
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

const mapStateToProps = ({movies}) => ({
  favoriteFilms: movies.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteFilmsList());
  },
});

export {MyListScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
