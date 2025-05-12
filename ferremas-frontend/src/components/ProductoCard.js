// src/components/ProductoCard.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext'; // Asegúrate de importar el contexto

const ProductoCard = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito(); // Usamos el contexto para agregar al carrito

  const handleAgregar = () => {
    agregarAlCarrito(producto); // Llamamos a la función para agregar el producto al carrito
  };

  return (
    <div className="producto-card">
      <h5>{producto.nombre}</h5>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <Button onClick={handleAgregar}>Agregar al carrito</Button>
    </div>
  );
};

export default ProductoCard;
