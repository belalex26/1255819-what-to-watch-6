import React from 'react';

import Logo from '../logo/logo';


const NotFoundScreen = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>UH OH! You&#39;re lost.</h2>
      <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
      </p>

      <Logo />

    </div>
  );
};

export default NotFoundScreen;
