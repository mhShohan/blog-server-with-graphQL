import React from 'react';
import loaderImg from '../assets/loader.svg';

const fullPage = {
  background: '#2e4f4f',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const pageSize = {
  // width: '100%',
  // height: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Loader({ full }) {
  return (
    <div style={full ? fullPage : pageSize}>
      <img src={loaderImg} alt='loader' />
    </div>
  );
}

export default Loader;
