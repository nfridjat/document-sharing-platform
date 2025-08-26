import React from 'react';
import './Header.css'; // Si tu veux ajouter du style

const Header = () => {
  return (
    <header className="header">
      <h1>Plateforme de Partage de Documents</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/upload">Téléverser</a></li>
          <li><a href="/viewer">Visualiser</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
