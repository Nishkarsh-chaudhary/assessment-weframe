import React from 'react';
import { FaSearch} from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

import Container from '@/Components/Common/Container';
import './Buleten.css'

const Buleten = () => {
  return (
    <Container>
    <header className="header">
      {/* Left Side: Search Bar */}
     <div className='buleten-title'>
      <h1>Blüten</h1>
     </div>

      {/* Center: Navigation Links */}
      <div className="search-bar">
        
        <input
          type="text"
          placeholder="Suchen"
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Right Side: Shopping Cart Icon and Button */}
      <div className='right-side' >
        <div>
         <select>
              <option value="">Sortieren nach</option>
              {/* Add more terpenes here */}
            </select>
        </div>
        <div>
        <label className="checkbox">
          <input type="checkbox" />
          <span>Verfügbarkeit</span>
        </label>
        </div>
        <div>
          <div className='mdMenu'>
            <MdMenu className='icon-md' />
          </div>
          
        </div>
      </div>
    </header>
    </Container>
  );
};

export default Buleten;
