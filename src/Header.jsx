import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="brand-name">
         📝 <span className="highlight">Rx</span>Keep
        </h1>
        <p className="tagline">Organize thoughts. Effortlessly.</p>
      </div>
    </header>
  );
};

export default Header;
