import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const navigationData = [
  {
    path: '/sales',
    name: 'sales',
    child: [
      { path: '/sales/create', name: 'Create sales' },
      { path: '/sales/view', name: 'View sales' },
    ],
  },
  {
    path: '/attendance',
    name: 'attendance',
    child: [{ path: '/attendance/analysis', name: 'Analysis' }],
  },
  { path: '/employee', name: 'employee' },
  { path: '/expense', name: 'expense' },
  { path: '/inventory', name: 'inventory' },
  { path: '/overtime', name: 'overtime' },
  {
    path: '/admin',
    name: 'admin',
    child: [
      { path: '/admin/create', name: 'Create Admin' },
      { path: '/admin/view', name: 'View Admin' },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar_content">
      {navigationData.map((link, i) => (
        <div key={i} className="sidebar_link">
          <SubLink link={link} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

const SubLink = ({ link }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`sidebar_content ${show && 'show_links'}`}
      onClick={() => setShow((p) => !p)}
    >
      <div className="show_links_head">
        {link.name}
        {show ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {show &&
        link.child?.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            onClick={() => setShow(false)}
            className="sub_sidebar_link"
          >
            {link.name}
          </NavLink>
        ))}
    </div>
  );
};
