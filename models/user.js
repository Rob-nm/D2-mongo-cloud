const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  edad: { type: Number, required: true },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);