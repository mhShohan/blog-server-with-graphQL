import React from 'react';
import loaderImg from '../assets/loading.gif';

function Loader() {
  return (
    <div className="loader">
      <img src={loaderImg} alt="loader" />
    </div>
  );
}

export default Loader;
