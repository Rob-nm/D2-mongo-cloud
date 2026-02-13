const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  categoria: { type: String },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);