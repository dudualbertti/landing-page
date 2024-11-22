import React, { useRef, useState } from 'react';
import './Carousel.css';

// Importando imagens locais
import pizza1 from '../assets/pizza1.jpeg';

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  // Função para controlar o scroll horizontal
  const handleWheel = (event: React.WheelEvent) => {
    if (carouselRef.current) {
      setIsScrolling(true);
      event.preventDefault(); // Evita que o scroll da página aconteça

      // Valor que representa a largura de uma imagem
      const itemWidth = carouselRef.current.querySelector('.carousel-item')?.clientWidth || 0;

      // Verifica a direção do scroll
      const scrollAmount = event.deltaY > 0 ? itemWidth : -itemWidth;

      // Ajusta o scroll
      carouselRef.current.scrollLeft += scrollAmount;

      setTimeout(() => setIsScrolling(false), 100);
    }
  };

  // Função para mover o carrossel para a esquerda
  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.querySelector('.carousel-item')?.clientWidth || 0;
      carouselRef.current.scrollLeft -= itemWidth;
    }
  };

  // Função para mover o carrossel para a direita
  const scrollRight = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.querySelector('.carousel-item')?.clientWidth || 0;
      carouselRef.current.scrollLeft += itemWidth;
    }
  };

  return (
    <section className="carousel-container">
      <div className="carousel-separator"></div>

      <div className="carousel-header">
        <h2>Mais Pedidos</h2>
        <p>Confira os sabores mais amados pelos nossos clientes</p>
      </div>

      <div className="carousel-wrapper-container">
        <button className="carousel-nav carousel-nav-left" onClick={scrollLeft}>
          &#10094;
        </button>
        <div
          className="carousel-wrapper"
          ref={carouselRef}
          onWheel={handleWheel}
          style={{ cursor: isScrolling ? 'grabbing' : 'grab' }}
        >
          <div className="carousel-item">
            <img src={pizza1} alt="Pizza de Calabresa com Cebola" />
            <p className="carousel-caption">Pizza de Calabresa com Cebola</p>
            <p>Uma deliciosa pizza com calabresa fresca e cebolas caramelizadas.</p>
          </div>
          <div className="carousel-item">
            <img src={pizza1} alt="Pizza de Alcatra ao Molho Barbecue" />
            <p className="carousel-caption">Pizza de Alcatra ao Molho Barbecue</p>
            <p>Fatias suculentas de alcatra combinadas com um molho barbecue irresistível.</p>
          </div>
          <div className="carousel-item">
            <img src={pizza1} alt="Pizza de Marguerita" />
            <p className="carousel-caption">Pizza de Marguerita</p>
            <p>Uma clássica combinação de queijo, tomate fresco e manjericão.</p>
          </div>
          <div className="carousel-item">
            <img src={pizza1} alt="Pizza de Frango com Catupiry" />
            <p className="carousel-caption">Pizza de Frango com Catupiry</p>
            <p>Frango desfiado com o cremoso toque especial do Catupiry.</p>
          </div>
          <div className="carousel-item">
            <img src={pizza1} alt="Pizza de Quatro Queijos" />
            <p className="carousel-caption">Pizza de Quatro Queijos</p>
            <p>Uma explosão de sabores com mussarela, gorgonzola, parmesão e provolone.</p>
          </div>
        </div>
        <button className="carousel-nav carousel-nav-right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
