import React from 'react';
import './solucao.css';

interface SolucaoProps {
  titulo: string;
  descricao: string;
}

const Solucao: React.FC<SolucaoProps> = ({ titulo, descricao }) => {
  return (
    <div id="promocoes" className="solucao-container">
      <div className="solucao-cards">
        <div className="solucao-card">
          <h3>Combos</h3>
          <p>Desconto incrível em nossa pizza de Pepperoni. Peça já!</p>
        </div>
        <div className="solucao-card">
          <h3>Promoção do Dia</h3>
          <p>Compre uma Margherita e ganhe um refrigerante grátis.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Solucao;
