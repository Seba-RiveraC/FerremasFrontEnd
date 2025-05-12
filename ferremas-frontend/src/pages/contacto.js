// src/pages/Contacto.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Contacto() {
  return (
    <Container className="mt-4">
      <h2>Contacto Comercial</h2>
      <p>Para compras al por mayor o consultas, contáctanos:</p>
      <ul>
        <li>Email: contacto@ferremas.com</li>
        <li>Teléfono: +56 9 1234 5678</li>
        <li>Horario: Lunes a Viernes, 09:00 a 18:00 hrs</li>
      </ul>
    </Container>
  );
}

export default Contacto;
