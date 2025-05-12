import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FiltroSidebar from '../components/FiltroSidebar'; 
import ProductoList from '../components/ProductoList';
import productosMock from '../mock/productos'; // Correcto si es productosMock.js

function Home() {
  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState({ categoria: '', precio: null });

  useEffect(() => {
    let filtrados = productosMock;

    if (filtros.categoria) {
      filtrados = filtrados.filter(p => p.categoria === filtros.categoria);
    }

    if (filtros.precio) {
      filtrados = filtrados.filter(p => p.precio <= filtros.precio);
    }

    setProductos(filtrados);
  }, [filtros]);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={3}>
          <FiltroSidebar setFiltros={setFiltros} />
        </Col>
        <Col md={9}>
          <ProductoList productos={productos} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
