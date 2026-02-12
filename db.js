const mongoose = require('mongoose'); // Corregido: mongoose
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Corregido: punto y coma y nombre
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    // En Vercel, es mejor no usar process.exit(1) para que la función no muera siempre
  }
};
module.exports = connectDB;