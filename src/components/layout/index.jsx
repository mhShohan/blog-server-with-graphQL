import React, { useState } from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <Navbar setShowSideBar={setShowSideBar} />
      <div className='dashboard'>
        <div className={`side_navigation ${showSideBar && 'mobile_sidebar'}`}>
          <Sidebar />
        </div>
        <div className='nav_space'>
          <div className='main_content_section'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
