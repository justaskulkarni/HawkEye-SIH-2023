import React, { useState, useEffect } from 'react';
import '../stylesheets/Popup.css'
const Popup = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Automatically close the popup after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <p style={{ color: 'green' }}>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
