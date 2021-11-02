import { Link } from 'react-router-dom';
import React from 'react';
function Error(): JSX.Element{
  return(
    <>
      <h1>404 Not Found</h1>
      <Link to="/">Home</Link>
    </>);
}

export default React.memo(Error);
