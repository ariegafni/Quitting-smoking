import React from "react";
import "./Header.style.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">מעקב עישון</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              דף ראשי
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              סטטיסטיקות
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              יעדים
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              הגדרות
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
