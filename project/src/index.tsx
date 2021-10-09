import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import comments from './mocks/comments';

const propsMain= {
  offers: 351,
};

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}
      comments={comments}
      counter={propsMain.offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
