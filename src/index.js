import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockFilms from './mocks/films';

ReactDOM.render(<App films={mockFilms} />, document.querySelector(`#root`));
