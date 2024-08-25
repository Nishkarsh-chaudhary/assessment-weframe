"use client";
import React, { createContext, useEffect, useState } from "react";

import Footer from "@/Components/Common/Footer";
import Header from "@/Components/Common/Header";

// Create the AppContext with default values
export const AppContext = createContext({
  isMobile: false,
  setIsMobile: () => {},
});

const Route = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Attach event listener to handle resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ isMobile, setIsMobile }}>
      <Header />
      {children}
      <Footer />
    </AppContext.Provider>
  );
};

export default Route;
