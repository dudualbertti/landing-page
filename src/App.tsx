import React from 'react';
import NavBar from './components/NavBar';
import ContainerComImagem from './components/ContainerComImagem';
import Solucao from './components/Solucao';
import Footer from './components/Footer';
import Carousel from './components/Carousel'; // Importando o componente do carrossel
import Contact from './components/Contact'; // Importando o novo componente de contato

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

      {/* Aqui está o carrossel */}
      <section id="carrossel">
        <Carousel />
      </section>

      {/* Componente de contato */}
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
