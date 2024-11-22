import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [motivo, setMotivo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Email:', email);
    console.log('Motivo:', motivo);
  };

  return (
    <section className="contact-container">
      <div className="contact-header">
        <h2>Entre em Contato</h2>
        <p>Entre em contato, estamos dispostos a ajudar com o que for necessário!</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="email">Seu E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="motivo">Motivo do Contato:</label>
          <textarea
            id="motivo"
            name="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Descreva o motivo do seu contato"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
