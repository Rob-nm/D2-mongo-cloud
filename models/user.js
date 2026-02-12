const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true, required: true },
  edad: Number,
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);