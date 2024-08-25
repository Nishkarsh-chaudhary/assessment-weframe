import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link'; 
import './WebHeader.css'; 
import Container from '@/Components/Common/Container';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <header className="header">
        {/* Left Side: Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Suchen"
          />
          <FaSearch className="search-icon" />
        </div>

        {/* Center: Navigation Links */}
        <nav className="nav">
          <Link href="/">Rezept einlösen</Link>
          <Link href="/about">Live Bestand</Link>
          <Link href="/services">Videosprechstunde</Link>
          <Link href="/products">FAQs</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>

        {/* Right Side: Shopping Cart Icon and Button */}
        <div className="right-side">
          <FaShoppingCart className="shopping-cart" />
          
          <div className="anmelden">
            <Link className="anmelden-link" href="/contact">Anmelden</Link>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <Link href="/" onClick={toggleMobileMenu}>Rezept einlösen</Link>
          <Link href="/about" onClick={toggleMobileMenu}>Live Bestand</Link>
          <Link href="/services" onClick={toggleMobileMenu}>Videosprechstunde</Link>
          <Link href="/products" onClick={toggleMobileMenu}>FAQs</Link>
          <Link href="/contact" onClick={toggleMobileMenu}>Kontakt</Link>
          <div className="mobile-anmelden">
            <Link className="anmelden-link" href="/contact" onClick={toggleMobileMenu}>Anmelden</Link>
          </div>
        </nav>
      )}
    </Container>
  );
};

export default Header;
