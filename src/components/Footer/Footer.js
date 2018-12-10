import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
  return (
    <div className='footer-container'>
    <div className="footer-links">
      <Link to="/">Home</Link>
      <Link to="/mens">Men's</Link>
      <Link to="/womens">Women's</Link>
      <Link to="/cart">Cart</Link>
    </div>
    </div>
  )
}
