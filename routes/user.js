const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para crear un nuevo usuario
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);

// Ruta para actualizar un usuario existente
router.put('/users/:id', userController.updateUser);

// Ruta para eliminar un usuario
router.delete('/users/:id', userController.deleteUser);

module.exports = router;