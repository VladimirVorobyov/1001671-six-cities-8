import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const propsMain= {
  offers: 351,
};

ReactDOM.render(
  <React.StrictMode>
    <App counter={propsMain.offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
