import React from 'react';
import { Link } from 'react-router-dom';
import {
  HighlightOff,
  HomeOutlined,
  Menu,
  PermContactCalendarOutlined,
  Settings,
} from '@material-ui/icons';

import './Navbar.scss'

const Navbar = ({ app }) => {
    const menuActiveToggle = () => {
        app.current.classList.toggle("menu_active");
    };
    const menuRemoveToggle = () => {
        app.current.classList.remove("menu_active");
    };
  return (
    <>
      <span className="menu_toggle">
        <Menu className="menu_open" onClick={menuActiveToggle} />
        <HighlightOff className="menu_close" onClick={menuActiveToggle} />
      </span>
      <ul className="menu_items">
        <li>
          <Link to="/" onClick={menuRemoveToggle}>
            <HomeOutlined /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={menuRemoveToggle}>
            <Settings /> About
          </Link>
        </li>
        <li>
          <Link to="/contacts" onClick={menuRemoveToggle}>
            <PermContactCalendarOutlined />
            Contacts
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
