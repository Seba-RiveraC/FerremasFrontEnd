import React from 'react';
import ProductoCard from './ProductoCard'; // Importamos el nuevo componente

const ProductoList = ({ productos }) => {
  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} /> // Usamos ProductoCard para cada producto
      ))}
    </div>
  );
};

export default ProductoList;
