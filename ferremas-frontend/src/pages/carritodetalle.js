import React from 'react';
import { useCarrito } from '../context/CarritoContext';

const CarritoDetalle = () => {
  const { carrito } = useCarrito();

  const total = carrito.reduce((acc, item) => acc + item.precio, 0); // Ajusta "precio" según tu estructura

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Detalle del Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CarritoDetalle;
