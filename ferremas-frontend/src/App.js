import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Header from './components/header';
import Home from './pages/home';
import CarritoDetalle from './pages/carritodetalle';
import Contacto from './pages/contacto';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<CarritoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
