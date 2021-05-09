import React from 'react';
import Logo from '../../logo.png';
import './navbar.css'
import LinkToAuth from 'helpers/link_to_auth';

const Navbar = ({ showCallToAction }) => {
  if (showCallToAction === undefined || showCallToAction === null) showCallToAction = true
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/#">
        <img src={Logo}
             alt="logo" width="150"
             height="30" />
      </a>
    </div>
    {showCallToAction && (
      <div className="navbar-actions">
        <LinkToAuth
            linkText='Post your pickup'
            destination='/dashboard'
            className='button is-primary mr-2 mt-2'
        />
      </div>
    )}
  </nav>
}

export default Navbar;
