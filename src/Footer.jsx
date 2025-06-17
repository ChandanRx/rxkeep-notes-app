import React from "react";
import './index.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">© {year} RxKeep. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
