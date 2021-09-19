import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import "../css/style.css"
  
const Navbar = () => {
  return (
      <div className="navbar">
          <span className="logo">FIN<span className="logo-blue">FORGE</span></span>
          <div className="menu">
            <Link to='/webscan' className="links">
            webscan
            </Link>
            <Link to='/library' className="links">
            library
            </Link>
            <Link to='/news' className="links">
            news
            </Link>
            <Link to='/report' className="links">
            report
            </Link>
            <Link to='/help' className="links">
            help
            </Link>
          </div>
      </div>
  );
};
  
export default Navbar;