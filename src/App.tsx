import React from 'react';
import NavBar from './components/NavBar';
import ContainerComImagem from './components/ContainerComImagem';
import Solucao from './components/Solucao';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
     
      <NavBar />

      
      <ContainerComImagem />

     
      <section id="solucoes">
        <Solucao 
          titulo="Soluções Inovadoras"
          descricao="Oferecemos soluções que ajudam você a alcançar seus objetivos de maneira eficiente."
        />
        <Solucao 
          titulo="Tecnologia de Ponta"
          descricao="Utilizamos as tecnologias mais avançadas para garantir resultados."
        />
      </section>

     
      <Footer />
    </div>
  );
};

export default App;
