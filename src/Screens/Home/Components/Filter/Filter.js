'use client'

import React, { useState } from 'react';
import './Filter.css'; // Make sure the path is correct

function Filter({ toggleSidebar }) { // Receive toggleSidebar as a prop
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState([5, 10]);
  const [effects, setEffects] = useState({
    ACDP: false,
    Apetit: false,
    Anxiety: true,
    Entspannung: false,
    Creativity: false
  });
  const [thc, setThc] = useState([3, 20]);
  const [cbd, setCbd] = useState([3, 5]);
  const [genetics, setGenetics] = useState('Indica');
  const [availability, setAvailability] = useState('Vorrätig');
  const [terpenes, setTerpenes] = useState('');

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
    toggleSidebar(); // Notify CardList to shift the content
  };

  const handlePriceChange = (event) => {
    setPrice([5, +event.target.value]);
  };

  const handleEffectChange = (event) => {
    setEffects({ ...effects, [event.target.name]: event.target.checked });
  };

  const handleThcChange = (event) => {
    setThc([3, +event.target.value]);
  };

  const handleCbdChange = (event) => {
    setCbd([3, +event.target.value]);
  };

  const handleGeneticsChange = (event) => {
    setGenetics(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleTerpenesChange = (event) => {
    setTerpenes(event.target.value);
  };

  return (
    <div className="filter-container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="sidebar-toggle" onClick={handleSidebarToggle}>
          {isOpen ? '<' : '>'}
        </button>
        <div className="filter-content">
          <div className='filter-heading'>
            <h2 className="filter-title">Filter</h2>
            <h3 className="filter-subtitle">Preis</h3>
          </div>
          <div className="filter-section">
            <input
              type="range"
              min={5}
              max={10}
              className="filter-range"
              value={price[1]}
              onChange={handlePriceChange}
            />
            <span className="filter-range-label">{price[0]} € - {price[1]} €</span>
          </div>
          <h3 className="filter-subtitle">Hersteller</h3>
          <div className="filter-section-checkbox">
            {Object.keys(effects).map(effect => (
              <label key={effect}>
                <input
                  type="checkbox"
                  name={effect}
                  checked={effects[effect]}
                  onChange={handleEffectChange}
                  className="filter-checkbox"
                />
                {effect}
              </label>
            ))}
          </div>
          <h3 className="filter-subtitle">THC-Gehalt</h3>
          <div className="filter-section">
            <input
              type="range"
              min={3}
              max={20}
              className="filter-range"
              value={thc[1]}
              onChange={handleThcChange}
            />
            <span className="filter-range-label">{thc[0]}% - {thc[1]}%</span>
          </div>
          <h3 className="filter-subtitle">CBD-Gehalt</h3>
          <div className="filter-section">
            <input
              type="range"
              min={3}
              max={5}
              className="filter-range"
              value={cbd[1]}
              onChange={handleCbdChange}
            />
            <span className="filter-range-label">{cbd[0]}% - {cbd[1]}%</span>
          </div>
          <h3 className="filter-subtitle">Genetik</h3>
          <div className="filter-section-two">
            {['Indica', 'Sativa', 'Hybrid'].map(type => (
              <button
                key={type}
                value={type}
                onClick={handleGeneticsChange}
                className={genetics === type ? 'filter-button active' : 'filter-button'}
              >
                {type}
              </button>
            ))}
          </div>
          <h3 className="filter-subtitle">Verfügbarkeit</h3>
          <div className="filter-section-three">
            {['bestrahlt', 'nicht bestrahlt'].map(status => (
              <button
                key={status}
                value={status}
                onClick={handleAvailabilityChange}
                className={availability === status ? 'filter-button active' : 'filter-button'}
              >
                {status}
              </button>
            ))}
          </div>
          <h3 className="filter-subtitle">Terpene</h3>
          <div className="filter-section">
            <select className="filter-select" value={terpenes} onChange={handleTerpenesChange}>
              <option value="">Alle Terpene</option>
              {/* Add more terpenes here */}
            </select>
          </div>
          <button className="reset-button">Alle Filter zurücksetzen</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
