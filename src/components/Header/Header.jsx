import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './header.css';

function isActive(link, currentPath) {
  return link === currentPath
   ? 'active' : '';
}

const Header = ({
  currentPath,
  isAuthenticated,
  onLogout,
}) => (
  <nav className="header navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">
          Demo
        </Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className={isActive(currentPath, '/protected')}>
            <Link to="/protected">Protected</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {isAuthenticated === false
            ? <li className={isActive(currentPath, '/login')}><Link to="/login">Login</Link></li>
            : <li><Link to="/login" onClick={onLogout}>Logout</Link></li>}
        </ul>
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  currentPath: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  userRole: PropTypes.string,
};

export default Header;
