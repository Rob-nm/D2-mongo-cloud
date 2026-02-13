const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db');
const User = require('./models/user');
// --- NUEVA LÍNEA PARA PRODUCTOS ---
const productController = require('./controllers/productController'); 
const app = express(); // 1. PRIMERO creamos la app

// 2. LUEGO configuramos los middlewares
app.use(cors()); 
app.use(express.json()); 

// 3. Conectamos a la base de datos
connectDB(); // Quité el comentario para que funcione la DB


// 4. Definimos las rutas
app.get('/', (req, res) => {
  res.send('Servidor funcionando perfectamente');
});

// Esta es la ruta que vas a usar en Postman
app.post('/models/user', async (req, res) => {
  try {
    const nuevoUsuario = new User(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: '¡Usuario guardado!', usuario: nuevoUsuario });
  } catch (error) {
    res.status(400).json({ error: 'Error al guardar', detalle: error.message });
  }
});

app.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// --- NUEVAS RUTAS PARA PRODUCTOS ---
app.get('/api/productos', productController.getProducts);
app.post('/api/productos', productController.createProduct);

app.use(express.static('public'));

// 5. Encendemos el motor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});