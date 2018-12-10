import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
export default function Header() {
  return (
    <div className="link-container">
    <div className="header-links">
      <Link to="/">Home</Link>
      <Link to="/mens">Men's</Link>
      <Link to="/womens">Women's</Link>
      <Link to="/cart">Cart</Link>
    </div>
    </div>
  )
}
