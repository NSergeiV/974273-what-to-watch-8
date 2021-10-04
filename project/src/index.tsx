import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  FILM_CARD_COUNT: 20,
  FILM_CARD_TITLE: 'The Grand Budapest Hotel',
  FILM_CARD_GENRE: 'Drama',
  FILM_CARD_YEAN: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmCard={Setting}
    />
  </React.StrictMode>,
  document.getElementById('root'));
