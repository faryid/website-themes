import React from 'react';
import logo from '../assets/images/logo.png';

function Logo() {
  return (
    <h1>
      <a href='/' title='avana'>
        <img
          src={logo}
          title='avana'
          alt='avana'
        />
      </a>
    </h1>
  );
}

export default Logo;
