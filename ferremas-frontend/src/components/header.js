import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/header.css';
import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { carrito } = useCarrito();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="ferremas-header">FERREMAS</div>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">Inicio</Link>  {/* Te lleva al Home */}
          <Nav className="me-auto">
            <Link to="/contacto" className="nav-link text-white">Contacto</Link>  {/* Enlace de Contacto */}
            <Link to="/carrito" className="nav-link text-white">Carrito Detalle</Link>
          </Nav>
          <Button onClick={handleShow} className="btn btn-warning">
            <FaShoppingCart /> ({carrito.length})
          </Button>
        </Container>
      </Navbar>

      {/* Modal del carrito */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {carrito.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <ul>
              {carrito.map((item, idx) => (
                <li key={idx}>{item.nombre} - ${item.precio}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
