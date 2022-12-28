import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import Logo from '../images/snapBlog-logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to={'/'}>
            <img src={Logo} alt="snap-blog-logo" />
          </Link>
        </div>
        <div className="links">
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
          <span style={{textTransform: 'capitalize'}}>{currentUser?.username}</span>
          {currentUser ? (<span onClick={logout}>Logout</span>) : <Link className='link' to='/login'>Login</Link>}
          <span className='write'>
            <Link to={'/write'} className='link'>Write</Link>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;