import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src="./img/logo.png" alt="logo" className="app-logo" /> {/* Ruta actualizada */}
      </div>
      <nav className="app-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#contact">Contáctenos</a></li>
          <li><a href="#messages">Mensajes</a></li>
        </ul>
        <div className="user-icon">
          <img src="./img/user.png" alt="user" /> {/* Ruta actualizada */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
