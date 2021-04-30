import React from 'react';
import { Link } from 'react-router-dom';

const LinkToAuth = ({linkText, destination, className }) => {
  return (
    <Link
      to={{
        pathname: "/authenticate",
        state: { destination: destination }
      }}
      className={className}
    >
      {linkText}
    </Link>
  )
}

export default LinkToAuth
