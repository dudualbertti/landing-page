import React from 'react';
import './ContainerComImagem.css'; // Você pode usar CSS externo para estilizar

const ContainerComImagem: React.FC = () => {
  return (
    <div className="container-imagem">
      <div className="texto-central">
        <p>BellaPizza</p>
        <h1>Faça seu pedido</h1>
      </div>
      
    <div className="botoes">
  <button className="botao">Entrega</button>
  <button className="botao">Retirada na Loja</button>
</div>

    </div>
  );
};

export default ContainerComImagem;
