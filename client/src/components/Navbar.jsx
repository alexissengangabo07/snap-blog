import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/snapBlog-logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="snap-blog-logo" />
        </div>
        <div className="links">
          <Link to={'/?categorie=art'} className='link'>
            <h6>ART</h6>
          </Link>
          <Link to={'/?categorie=art'} className='link'>
            <h6>ART</h6>
          </Link>
          <Link to={'/?categorie=science'} className='link'>
            <h6>SCIENCE</h6>
          </Link>
          <Link to={'/?categorie=technology'} className='link'>
            <h6>TECHNOLOGIE</h6>
          </Link>
          <Link to={'/?categorie=cinema'} className='link'>
            <h6>CINEMA</h6>
          </Link>
          <Link to={'/?categorie=design'} className='link'>
            <h6>DESIGN</h6>
          </Link>
          <Link to={'/?categorie=sport'} className='link'>
            <h6>SPORT</h6>
          </Link>
          <span>Alexis</span>
          <span>Logout</span>
          <span className='write'>
            <Link to={'/write'} className='link'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar