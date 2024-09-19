import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 BellaPizza - Todos os direitos reservados</p>
        <p>Endereço: Rua Fictícia, 123 - Cidade Exemplo</p>
        <p>Telefone: (11) 1234-5678</p>
      </div>
    </footer>
  );
};

export default Footer;
