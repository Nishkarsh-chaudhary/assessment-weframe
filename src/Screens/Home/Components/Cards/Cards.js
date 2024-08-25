// Card.js
import React from 'react';
import './Card.css';
import Container from '@/Components/Common/Container';

const Card = ({ image, title, heading, subname1,subname2 ,price }) => {
  return (
    
    <div className="card-container">
      {/* Image Section (1/3 part) */}
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      
      {/* Content Section (2/3 part) */}
      <div className="content-container">
        <p className='title'>{title}</p>
        <h3>{heading}</h3>
        <p>{subname1}</p>
        <p>{subname2}</p>
        <p>{price}</p>
      </div>
    </div>
  
  );
};

export default Card;
