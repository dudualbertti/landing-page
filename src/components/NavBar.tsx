import React from 'react';
import './NavBar.css'; // Importa o CSS

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* A imagem será gerada pelo CSS */}
      </div>
      <ul className="nav-links">
        <li><a href="#cardapio">Cardápio</a></li>
        <li><a href="#sobre">Sobre a BellaPizza</a></li>
        <li><a href="#promocoes">Promoções</a></li> {/* Atualizado */}
      </ul>
    </nav>
  );
};

export default NavBar;
