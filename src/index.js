import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from "./store/reducer";

import App from './components/app/app';
import mockFilms from './mocks/films';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App films={mockFilms} />
    </Provider>,
    document.querySelector(`#root`)
);
