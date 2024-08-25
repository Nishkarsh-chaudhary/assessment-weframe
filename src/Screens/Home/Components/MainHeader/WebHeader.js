import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link
import './WebHeader.css'; // Import the CSS file
import Container from '@/Components/Common/Container';

const Header = () => {
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
        <div className='anmelden'>
        <Link className='anmelden-link' href="/contact">Anmelden</Link>
        </div>
      </div>
    </header>
    </Container>
  );
};

export default Header;
