import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  const location = useLocation();

  const isBlog = location.pathname === '/blog';

  return (
    <div className='navBar'>    
      <h1 className='Logo'>Pepelandia</h1>
      <Link to={isBlog ? '/' : '/blog'}>
        <a href='./' className='HrefNavbarForoLabel'> 
          <h1 className='NavbarForoLabel'>
            {isBlog ? 'directory' : 'blog'}
          </h1>
        </a>
      </Link>
    </div>
  );
}

export default NavBar;