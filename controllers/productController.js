const Product = require('../models/product');

exports.createProduct = async (req, res) => {
  try {
    const { nombre, precio, stock, categoria } = req.body;
    const newProduct = new Product({ nombre, precio, stock, categoria });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};