import React from 'react';
import Logo from '../../logo.png';
import './navbar.css'
import LinkToAuth from 'helpers/link_to_auth';

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
      <LinkToAuth
          linkText='Post your pickup'
          destination='/'
          className='button is-primary mr-2 mt-2'
      />
    </div>
  </nav>
}

export default Navbar;
