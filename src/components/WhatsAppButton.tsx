"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Contact us on WhatsApp"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <FaWhatsapp className="text-2xl" />
      </div>
    </div>
  );
};

export default WhatsAppButton; 