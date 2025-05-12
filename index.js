require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Rutas
const productosRoutes = require('./routes/productos.routes');
const pagosRoutes = require('./routes/pagos.routes');
const conversionRoutes = require('./routes/conversion.routes');

// Usar rutas con prefijos únicos
app.use('/api/productos', productosRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/conversion', conversionRoutes); // Corregido: evitar conflicto con /api/productos

// Ruta principal
app.get('/', (req, res) => {
  res.send('Ferretería FERREMAS');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
