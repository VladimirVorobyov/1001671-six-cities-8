import './loading.css';
import React from 'react';

function Loading (): JSX.Element{
  return (
    <div id="page-preloader" style={{background: 'red'}}>
      <span className="spinner"></span>
    </div>
  );}

export default React.memo(Loading);
