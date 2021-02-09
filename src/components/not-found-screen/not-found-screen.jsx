import React from 'react';
import {Link} from 'react-router-dom';


const NotFoundScreen = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>UH OH! You&#39;re lost.</h2>
      <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
      </p>

      <div className="logo">
        <Link className="logo__link logo__link--light" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
