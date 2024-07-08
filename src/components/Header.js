import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand">Timbu Cloud Shop</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">🔍</button>
      </div>
    </header>
  );
};
