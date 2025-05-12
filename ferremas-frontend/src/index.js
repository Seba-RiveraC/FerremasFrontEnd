import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Aquí puedes agregar tu archivo de estilos personalizados
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

// Importa un archivo de fuentes si lo necesitas para tu estilo
import '@fontsource/roboto'; // Puedes elegir otras fuentes que te gusten
import { CarritoProvider } from './context/CarritoContext'; // Importa el proveedor del carrito

const root = ReactDOM.createRoot(document.getElementById('root'));

// Aquí agregas tu renderizado de la app con React
root.render(
  <React.StrictMode>
    <CarritoProvider> {/* Envolvemos la app en el CarritoProvider */}
      <div className="bg-light min-vh-100"> {/* Fondo ligero para la página */}
        <App />
      </div>
    </CarritoProvider>
  </React.StrictMode>
);

// Mide el rendimiento de tu app (opcional, pero útil)
reportWebVitals();
