import React from 'react';
import Container from './Container';
import './Footer.css'

const Footer = () => {
  return (
    <Container>
      <footer className='footer'>
      <div className="container-footer">
        <div className="legal">
          <a href="#">AGB</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
        <div className="links">
          <a href="#">Rezept einlösen</a>
          <a href="#">Live Bestand</a>
          <a href="#">Videosprechstunde</a>
          <a href="#">FAQs</a>
          <a href="#">Kontakt</a>
        </div>
        <div className="info">
          <p>Standort</p>
          <p>Bergstraße 49 - 57<br />69469 Weinheim<br />(3 Glocken Quartier)</p>
        </div>
        <div className='tele'>
        <p>Telefon</p>
        <p>0223 545 5250</p>
        </div>
        <div className="hours">
          <p>Öffnungszeiten:</p>
          <span>Mo-Fr: </span>
          <h3>09:00 - 18:00 Uhr</h3>
          <p>Sa: </p>
          <h3>09:00 - 14:00 Uhr</h3>
        </div>
      </div>
      
    </footer>


    </Container>
  )
  
};

export default Footer;
