import React from 'react';
import { NavLink as Link } from 'react-router-dom';
  
const Navbar = () => {
  return (
      <div className="navbar">
  
        <div className="menu">
          <Link to='/webscan' activeStyle>
          webscan
          </Link>
          <Link to='/library' activeStyle>
          library
          </Link>
          <Link to='/news' activeStyle>
          news
          </Link>
          <Link to='/report' activeStyle>
          report
          </Link>
          <Link to='/help' activeStyle>
          help
          </Link>
        </div>
      </div>
  );
};
  
export default Navbar;