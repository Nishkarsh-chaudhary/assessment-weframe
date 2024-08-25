'use client'

import React, { useState } from 'react';
import Card from '@/Screens/Home/Components/Cards/Cards';
import { cardData } from '@/utils/Data/Data';
import './CardList.css';
import Container from '@/Components/Common/Container';
import Filter from '@/Screens/Home/Components/Filter/Filter'; // Import Filter component

const CardList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="cardList-container-wrapper">
      <Filter toggleSidebar={toggleSidebar} />
      <Container>
        <div className={`cardList-container ${isSidebarOpen ? 'shift-right' : ''}`}>
          {cardData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              heading={card.heading}
              subname1={card.subname1}
              subname2={card.subname2}
              price={card.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CardList;
