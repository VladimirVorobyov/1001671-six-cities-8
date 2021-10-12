import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const propsMain= {
  offers: 351,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}
      counter={propsMain.offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
