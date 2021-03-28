import React from 'react';
import Logo from '../../logo.png';
import './navbar.css'

const Navbar = () => {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/#">
        <img src={Logo}
             alt="logo" width="150"
             height="30" />
      </a>
    </div>
    <div className="navbar-actions">
      <a className="button is-primary mr-2 mt-2" href="/login">
        Post your pickup
      </a>
    </div>
  </nav>
}

export default Navbar;
