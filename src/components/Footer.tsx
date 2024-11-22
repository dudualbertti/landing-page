import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Logomarca</h4>
          
        </div>
        <div className="footer-column">
          <h4>Empresa</h4>
          <p>&copy; 2024 BellaPizza - Todos os direitos reservados</p>
          <p>Endereço: Rua Fictícia, 123 - Cidade Exemplo</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="footer-column">
          <h4>Funcionalidades</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Recursos</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy-policy">Política de Privacidade</a></li>
            <li><a href="#terms">Termos de Serviço</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
