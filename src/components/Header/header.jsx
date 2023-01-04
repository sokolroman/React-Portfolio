import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <header className="header">
      <nav className="header-nav">
        <Link
          to="/"
          className={`header-nav-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={`header-nav-item ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`header-nav-item ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </Link>
        <Link
          to="/resume"
          className={`header-nav-item ${activeTab === 'resume' ? 'active' : ''}`}
          onClick={() => setActiveTab('resume')}
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Header;
