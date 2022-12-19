import React from 'react';
import Logo from '../images/snapBlog-logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logoimg" />
      <span>Made with ❤️ <strong>snapTech</strong></span>
    </footer>
  )
}

export default Footer