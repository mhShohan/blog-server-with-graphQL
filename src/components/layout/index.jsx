import React from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="side_navigation">
          <Sidebar />
        </div>
        <div className="main_content_section">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
