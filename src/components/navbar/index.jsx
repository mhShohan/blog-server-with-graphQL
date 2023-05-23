import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ setShowSideBar }) => {
  return (
    <div className='navigation'>
      <div className=''>
        <FaBars
          onClick={() => setShowSideBar((p) => !p)}
          className='nav_icon'
        />
      </div>
    </div>
  );
};

export default Navbar;
