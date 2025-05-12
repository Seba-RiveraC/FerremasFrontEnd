import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';
import { Link } from 'react-router-dom'; // Importa Link de React Router

const CarritoModal = ({ onClose }) => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  console.log(carrito);  // Verifica el contenido del carrito en la consola

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mi Carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carrito.length > 0 ? (
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} x {item.cantidad}{' '}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay items en el carrito.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="danger" onClick={vaciarCarrito}>
          Vaciar carrito
        </Button>
      </Modal.Footer>

      {/* Botón para terminar compra justo abajo de los productos */}
      {carrito.length > 0 && (
        <div className="d-flex justify-content-center w-100">
          <Link to="/carrito" className="btn btn-success mt-3">
            Terminar Compra
          </Link>
        </div>
      )}
    </Modal>
  );
};

export default CarritoModal;
