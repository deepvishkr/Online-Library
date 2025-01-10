import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse Books</Link></li>
        <li><Link to="/add">Add Book</Link></li>
        <li><Link to="/books/fiction">Fiction</Link></li>
        <li><Link to="/books/non-fiction">Non-Fiction</Link></li>
        <li><Link to="/books/sci-fi">Sci-Fi</Link></li>
        <li><Link to="/books/mystery">Mystery</Link></li>
        <li><Link to="/books/biography">Biography</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
