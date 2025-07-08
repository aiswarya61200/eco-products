const express = require('express');
const router = express.Router();
const RtsProduct = require('../models/RtsProduct');

// Get all RTS products
router.get('/', async (req, res) => {
  try {
    const products = await RtsProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single RTS product
router.get('/:id', async (req, res) => {
  try {
    const product = await RtsProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;