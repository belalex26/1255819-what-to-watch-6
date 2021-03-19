import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/selectors';

const User = (props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <div className="user-block">
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      </div>
    );
  } else {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </Link>
        </div>
      </div>
    );
  }
};

User.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {User};
export default connect(mapStateToProps)(User);
