import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {login} from '../../store/api-actions';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors';

const SingInScreen = ({onSubmit, authorizationStatus}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" data-testid="sign-in_form" onSubmit={handleSubmit}>
          {authorizationStatus === AuthorizationStatus.AUTH_ERROR &&
            <div className="sign-in__message">
              <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" data-testid="login" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" data-testid="password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" data-testid="sign-in_btn">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

SingInScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SingInScreen};
export default connect(mapStateToProps, mapDispatchToProps)(SingInScreen);
