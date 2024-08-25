
import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';
import './Navigator.css'
import Container from '@/Components/Common/Container';

const Navigator = () => {
  return  (
    <Container>
    <header className="header">
      {/* Left Side: Search Bar */}
      <nav className="navi">
        <Link href="/">Home</Link>
        <FaArrowRight/>
        <Link href="/about">Livebestand</Link>
        <FaArrowRight/>
        <Link className='link-3' href="/services">Cannabis Blüten</Link>
      </nav>
    

      {/* Right Side: Shopping Cart Icon and Button */}
      <div className="right-side">
       
        <div className='Preisoptionen'>
        <Link className='Preisoptionen-link' href="/contact">Preisoptionen</Link>
        </div>
      </div>
    </header>
    </Container>
  );
}

export default Navigator
