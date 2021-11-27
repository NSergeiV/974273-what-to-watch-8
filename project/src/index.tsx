import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {movieData} from './mocks/films';
import App from './components/app/app';
import {reducer} from './store/reducer';

const Setting = {
  FILM_CARD_TITLE: 'The Grand Budapest Hotel',
  FILM_CARD_GENRE: 'Drama',
  FILM_CARD_YEAN: 2014,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        filmCard = {Setting}
        movieData = {movieData}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
